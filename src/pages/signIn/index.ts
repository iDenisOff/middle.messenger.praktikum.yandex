import { Block } from '@src/utils/Block';
import { Button } from '@src/components/Button';
import { Input } from '@src/components/Input';
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

import template from 'bundle-text:./signIn.hbs';
import './signIn.pcss';

export class SignIn extends Block {
    constructor() {
        super('main', {});

        this.props.title = LOG_IN;
        this.props.onEnter = '/chats';
    }

    componentDidMount(): void {
        const form = this.element.getElementsByClassName('sign-in__form')[0];

        form.addEventListener('submit', event => {
            event.preventDefault();
        });
    }

    init() {
        this.element.classList.add('sign-in');
        this.children.login = new Input({
            label: USER_NAME,
            name: 'login',
            valueType: TypesChecked.LOGIN
        });
        this.children.password = new Input({
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
            href: '/signUp',
            text: REGISTER
        });
    }

    render() {
        return this.compile(template, this.props);
    }
}
