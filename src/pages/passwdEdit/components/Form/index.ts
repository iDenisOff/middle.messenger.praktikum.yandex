import { Block } from '@src/utils/Block';
import { Button } from '@src/components/Button';
import userController from '@src/controllers/UserController';
import { store, StoreEvents } from '@src/store/store';
import { EditableRow } from '@src/components/EditableRow';
import { SAVE, TypesChecked, URLs } from '@src/constants';
import { sendForm } from '@src/utils/sendForm';
import defAvatar from '@static/avatar.svg';
import router from '@src/utils/Router';

import template from 'bundle-text:./form.hbs';
import './form.pcss';

const OldPasswd = 'Старый пароль';
const NewPasswd = 'Новый пароль';
const NewPasswdRetry = 'Повторите новый пароль';

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
        this.element.classList.add('passwd-edit-form');

        this.children.oldPassword = new EditableRow({
            title: OldPasswd,
            type: 'password',
            name: 'oldPassword'
        });
        this.children.newPassword = new EditableRow({
            title: NewPasswd,
            type: 'password',
            name: 'newPassword',
            valueType: TypesChecked.PASSWORD
        });
        this.children.newPasswordRetry = new EditableRow({
            title: NewPasswdRetry,
            type: 'password',
            name: 'newPasswordRetry'
        });
        this.children.save = new Button({
            text: SAVE,
            events: {
                click: () => {
                    const data = sendForm(this.children, 'editable-row__error');

                    const passwdValue = (this.children.newPassword.children.input.element as HTMLInputElement).value;
                    const passwdRetryValue = (this.children.newPasswordRetry.children.input.element as HTMLInputElement).value;

                    (this.children.newPasswordRetry.element.getElementsByClassName('editable-row__error')[0] as HTMLDivElement).innerText =
                        passwdValue === passwdRetryValue ? '' : 'Некорректное значение';

                    if (passwdValue !== passwdRetryValue) {
                        return;
                    }

                    if (data) {
                        userController.changeUserPassword({
                            oldPassword: data.oldPassword,
                            newPassword: data.newPassword
                        })
                            .then(() => {
                                router.go('/profile');
                            })
                            .catch((err) => {
                                const errorEl = this.element.getElementsByClassName('passwd-edit-form_error')[0];
                                (errorEl as HTMLDivElement).innerText = err.reason;
                            });
                    }
                }
            }
        });
    }

    render() {
        const avatar =
            this.props.data?.avatar ? `${URLs.RESOURCES}${this.props.data.avatar}` : defAvatar;

        return this.compile(template, { ...this.props, avatar });
    }
}
