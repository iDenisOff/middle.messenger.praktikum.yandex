import { Block } from '@src/utils/Block';
import { Button } from '@src/components/Button';
import { Input } from '@src/components/Input';
import { Link } from '@src/components/Link';
import { sendForm } from '@src/utils/sendForm';
import {
    EMAIL,
    ENTER,
    FIRST_NAME,
    PASSWD,
    PASSWD_RETRY,
    PHONE,
    REGISTER,
    REGISTRATION,
    SECOND_NAME,
    TypesChecked,
    USER_NAME
} from '@src/constants';

import template from 'bundle-text:./signUp.hbs';
import './signUp.pcss';

export class SignUp extends Block {
    constructor() {
        super('main', {});

        this.props.title = REGISTRATION;
        this.props.onEnter = '/chats';
    }

    componentDidMount(): void {
        const form = this.element.getElementsByClassName('sign-up__form')[0];

        form.addEventListener('submit', event => {
            event.preventDefault();
        });
    }

    init() {
        this.element.classList.add('sign-up');
        this.children.email =
            new Input({ label: EMAIL, type: 'email', name: 'email', valueType: TypesChecked.MAIL });
        this.children.login =
            new Input({ label: USER_NAME, name: 'login', valueType: TypesChecked.LOGIN });
        this.children.firstName =
            new Input({ label: FIRST_NAME, name: 'first_name', valueType: TypesChecked.NAME });
        this.children.secondName =
            new Input({ label: SECOND_NAME, name: 'second_name', valueType: TypesChecked.NAME });
        this.children.phone =
            new Input({ label: PHONE, type: 'tel', name: 'phone', valueType: TypesChecked.TELEPHONE });
        this.children.password =
            new Input({ label: PASSWD, type: 'password', name: 'password', valueType: TypesChecked.PASSWORD });
        this.children.passwordRetry =
            new Input({ label: PASSWD_RETRY, type: 'password', name: 'password_retry' });
        this.children.signUp = new Button({
            text: REGISTER,
            events: {
                click: () => sendForm(this.children)
            }
        });
        this.children.link = new Link({
            href: '/signIn',
            text: ENTER
        });
    }

    render() {
        return this.compile(template, this.props);
    }
}
