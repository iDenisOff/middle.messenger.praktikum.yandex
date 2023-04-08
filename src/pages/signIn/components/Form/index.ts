import { Block } from '@src/utils/Block';
import { Button } from '@src/components/Button';
import { FormInput } from '@src/components/FormInput';
import { Link } from '@src/components/Link';
import { sendForm } from '@src/utils/sendForm';
import {
    ENTER,
    LOG_IN,
    PASSWD,
    REGISTER,
    TypesChecked,
    USER_NAME
} from '@src/constants';

import template from 'bundle-text:./form.hbs';
import './form.pcss';

export class Form extends Block {
    constructor() {
        super('form', {});

        this.props.title = LOG_IN;
    }

    componentDidMount(): void {
        this.setProps({
            events: {
                submit: (event: Event) => event.preventDefault()
            }
        });
    }

    init() {
        this.element.classList.add('sign-in-form');
        this.children.login = new FormInput({
            label: USER_NAME,
            name: 'login',
            valueType: TypesChecked.LOGIN
        });
        this.children.password = new FormInput({
            label: PASSWD,
            name: 'password',
            type: 'password',
            valueType: TypesChecked.PASSWORD
        });
        this.children.signIn = new Button({
            text: ENTER,
            events: {
                click: () => sendForm(this.children)
            }
        });
        this.children.link = new Link({
            href: '/sign-up',
            text: REGISTER
        });
    }

    render() {
        return this.compile(template, this.props);
    }
}
