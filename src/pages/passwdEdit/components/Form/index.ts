import { Block } from '@src/utils/Block';
import { Button } from '@src/components/Button';
import userController from '@src/controllers/UserController';
import { store, StoreEvents } from '@src/store/store';
import { UserPassword } from '@src/api/UserAPI';
import { EditableRow } from '@src/components/EditableRow';
import { SAVE, TypesChecked } from '@src/constants';
import { sendForm } from '@src/utils/sendForm';
import avatar from '@static/avatar.svg';

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
                    const data: UserPassword = sendForm(this.children);
                    userController.changeUserPassword(data);
                }
            }
        });
    }

    render() {
        return this.compile(template, { ...this.props, avatar: this.props.data?.avatar ?? avatar });
    }
}
