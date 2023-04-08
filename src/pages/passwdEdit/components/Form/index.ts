import { Block } from '@src/utils/Block';
import { Button } from '@src/components/Button';
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

        this.props.avatar = avatar;
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

        this.children.oldPasswd = new EditableRow({
            title: OldPasswd,
            type: 'password',
            name: 'oldPassword'
        });
        this.children.newPasswd = new EditableRow({
            title: NewPasswd,
            type: 'password',
            name: 'newPassword',
            valueType: TypesChecked.PASSWORD
        });
        this.children.newPasswdRetry = new EditableRow({
            title: NewPasswdRetry,
            type: 'password',
            name: 'newPasswordRetry'
        });
        this.children.save = new Button({
            text: SAVE,
            events: {
                click: () => sendForm(this.children)
            }
        });
    }

    render() {
        return this.compile(template, this.props);
    }
}
