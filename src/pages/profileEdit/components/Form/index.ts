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
import avatar from '@static/avatar.svg';

import template from 'bundle-text:./form.hbs';
import './form.pcss';

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
        const email = 'pochta@yandex.ru';
        const login = 'ivanIvanov';
        const firstName = 'Иван';
        const secondName = 'Иванов';
        const displayName = 'Ваня';
        const phone = '+79099673030';

        this.element.classList.add('profile-edit-form');
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
