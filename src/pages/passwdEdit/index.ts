import { Block } from '@src/utils/Block';
import { Button } from '@src/components/Button';
import { EditableRow } from '@src/components/EditableRow';
import { SAVE, TypesChecked } from '@src/constants';
import { sendForm } from '@src/utils/sendForm';
import back from '@static/back.svg';
import avatar from '@static/avatar.svg';

import template from 'bundle-text:./passwdEdit.hbs';
import './PasswdEdit.pcss';

const OldPasswd = 'Старый пароль';
const NewPasswd = 'Новый пароль';
const NewPasswdRetry = 'Повторите новый пароль';

export class PasswdEdit extends Block {
    constructor() {
        super('main', {});

        this.props.back = back;
        this.props.goBack = '/profile';
        this.props.avatar = avatar;
        this.props.onSave = '/profile';
    }

    componentDidMount(): void {
        const form = this.element.getElementsByClassName('passwd-edit__content__form')[0];

        form.addEventListener('submit', event => {
            event.preventDefault();
        });
    }

    init() {
        this.element.classList.add('passwd-edit');

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
