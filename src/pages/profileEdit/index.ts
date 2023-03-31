import { Block } from '@src/utils/Block';
import { Button } from '@src/components/Button';
import { EditableRow } from '@src/components/EditableRow';
import { sendForm } from '@src/utils/sendForm';
import {
    DISPLAY_NAME,
    EMAIL,
    FIRST_NAME,
    PHONE,
    SAVE,
    SECOND_NAME,
    TypesChecked,
    USER_NAME
} from '@src/constants';
import back from '@static/back.svg';
import avatar from '@static/avatar.svg';

import template from 'bundle-text:./profileEdit.hbs';
import './profileEdit.pcss';

export class ProfileEdit extends Block {
    constructor() {
        super('main', {});

        this.props.back = back;
        this.props.goBack = '/profile';
        this.props.avatar = avatar;
        this.props.onSave = '/profile';
    }

    componentDidMount(): void {
        const form = this.element.getElementsByClassName('profile-edit__content__form')[0];

        form.addEventListener('submit', event => {
            event.preventDefault();
        });
    }

    init() {
        let email = 'pochta@yandex.ru';
        let login = 'ivanIvanov';
        let firstName = 'Иван';
        let secondName = 'Иванов';
        let displayName = 'Ваня';
        let phone = '+79099673030';

        this.element.classList.add('profile-edit');
        this.children.email = new EditableRow({ title: EMAIL, name: 'email', value: email, valueType: TypesChecked.MAIL });
        this.children.login = new EditableRow({ title: USER_NAME, name: 'login', value: login, valueType: TypesChecked.LOGIN });
        this.children.firstName = new EditableRow({ title: FIRST_NAME, name: 'first_name', value: firstName, valueType: TypesChecked.NAME });
        this.children.secondName = new EditableRow({ title: SECOND_NAME, name: 'second_name', value: secondName, valueType: TypesChecked.NAME });
        this.children.displayName = new EditableRow({ title: DISPLAY_NAME, name: 'display_name', value: displayName });
        this.children.phone = new EditableRow({ title: PHONE, name: 'phone', value: phone, valueType: TypesChecked.TELEPHONE });
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
