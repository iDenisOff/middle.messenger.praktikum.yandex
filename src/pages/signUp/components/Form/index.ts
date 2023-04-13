import { Block } from '@src/utils/Block';
import authController from '@src/controllers/AuthController';
import router from '@src/utils/Router';
import { SignupData } from '@src/api/AuthAPI';
import { Button } from '@src/components/Button';
import { FormInput } from '@src/components/FormInput';
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

import template from 'bundle-text:./form.hbs';
import './form.pcss';

export class Form extends Block {
    constructor() {
        super('form', {});

        this.props.title = REGISTRATION;
    }

    componentDidMount(): void {
        this.setProps({
            events: {
                submit: (event: Event) => event.preventDefault()
            }
        });
    }

    init() {
        this.element.classList.add('sign-up-form');
        this.children.email =
            new FormInput({ label: EMAIL, type: 'email', name: 'email', valueType: TypesChecked.MAIL });
        this.children.login =
            new FormInput({ label: USER_NAME, name: 'login', valueType: TypesChecked.LOGIN });
        this.children.first_name =
            new FormInput({ label: FIRST_NAME, name: 'first_name', valueType: TypesChecked.NAME });
        this.children.second_name =
            new FormInput({ label: SECOND_NAME, name: 'second_name', valueType: TypesChecked.NAME });
        this.children.phone =
            new FormInput({ label: PHONE, type: 'tel', name: 'phone', valueType: TypesChecked.TELEPHONE });
        this.children.password =
            new FormInput({ label: PASSWD, type: 'password', name: 'password', valueType: TypesChecked.PASSWORD });
        this.children.passwordRetry =
            new FormInput({ label: PASSWD_RETRY, type: 'password', name: 'password_retry' });
        this.children.signUp = new Button({
            text: REGISTER,
            events: {
                click: () => {
                    const data: SignupData = sendForm(this.children);
                    authController.signUp(data);
                }
            }
        });
        this.children.link = new Link({
            href: '/',
            text: ENTER
        });
        this.children.signIn = new Button({
            text: ENTER,
            className: 'transparent',
            events: {
                click: () => router.go('/')
            }

        });
    }

    render() {
        return this.compile(template, this.props);
    }
}
