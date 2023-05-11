import { Block } from '@src/utils/Block';
import { store, StoreEvents } from '@src/store/store';
import userController from '@src/controllers/UserController';
import { Button } from '@src/components/Button';
import { EditableRow } from '@src/components/EditableRow';
import router from '@src/utils/Router';
import { sendForm } from '@src/utils/sendForm';
import {
    DISPLAY_NAME,
    EMAIL,
    FIRST_NAME,
    PHONE,
    SAVE,
    SECOND_NAME,
    TypesChecked,
    URLs,
    USER_NAME
} from '@src/constants';
import defAvatar from '@static/avatar.svg';

import template from './form.hbs';
import './form.pcss';

export class Form extends Block {
    constructor() {
        super('form', {});

        store.on(StoreEvents.Updated, () => {
            this.setProps(store.getState().user);
        });
    }

    componentDidMount(): void {
        this.setProps({
            events: {
                submit: (event: Event) => event.preventDefault()
            }
        });
    }

    init() {
        this.element.classList.add('profile-edit-form');
        this.children.email = new EditableRow({ title: EMAIL, name: 'email', valueType: TypesChecked.MAIL });
        this.children.login = new EditableRow({ title: USER_NAME, name: 'login', valueType: TypesChecked.LOGIN });
        this.children.first_name = new EditableRow({ title: FIRST_NAME, name: 'first_name', valueType: TypesChecked.NAME });
        this.children.second_name = new EditableRow({ title: SECOND_NAME, name: 'second_name', valueType: TypesChecked.NAME });
        this.children.display_name = new EditableRow({ title: DISPLAY_NAME, name: 'display_name' });
        this.children.phone = new EditableRow({ title: PHONE, name: 'phone', valueType: TypesChecked.TELEPHONE });
        this.children.save = new Button({
            text: SAVE,
            events: {
                click: () => {
                    const data = sendForm(this.children, 'editable-row__error');

                    if (data) {
                        userController.changeUserData({
                            email: data.email,
                            login: data.login,
                            first_name: data.first_name,
                            second_name: data.second_name,
                            display_name: data.display_name,
                            phone: data.phone
                        })
                            .then(() => {
                                router.go('/profile');
                            })
                            .catch((err) => {
                                const errorEl = this.element.getElementsByClassName('profile-edit-form_error')[0];
                                (errorEl as HTMLDivElement).innerText = err.reason;
                            });
                    }
                }
            }
        });
    }

    render() {
        if (this.props.isLoading === false) {
            const { data } = this.props;

            this.children.email.setProps({ value: data.email });
            this.children.login.setProps({ value: data.login });
            this.children.first_name.setProps({ value: data.first_name });
            this.children.second_name.setProps({ value: data.second_name });
            this.children.display_name.setProps({ value: data.display_name });
            this.children.phone.setProps({ value: data.phone });
        }

        const avatar =
            this.props.data?.avatar ? `${URLs.RESOURCES}${this.props.data.avatar}` : defAvatar;

        return this.compile(template, { ...this.props, avatar });
    }
}
