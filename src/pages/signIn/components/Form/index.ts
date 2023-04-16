import { Block } from '@src/utils/Block';
import authController from '@src/controllers/AuthController';
import router from '@src/utils/Router';
import { Button } from '@src/components/Button';
import { FormInput } from '@src/components/FormInput';
import {
    ENTER,
    LOG_IN,
    PASSWD,
    REGISTER,
    TypesChecked,
    USER_NAME
} from '@src/constants';
import { sendForm } from '@src/utils/sendForm';

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
                click: () => {
                    const data = sendForm(this.children, 'form-input__error');

                    if (data) {
                        authController.signIn({
                            login: data.login,
                            password: data.password
                        })
                            .then(() => {
                                router.go('/messenger');
                            })
                            .catch((err) => {
                                const errorEl = this.element.getElementsByClassName('sign-up-form_error')[0];
                                (errorEl as HTMLDivElement).innerText = err.reason;
                            });
                    }
                }
            }
        });
        this.children.signUp = new Button({
            text: REGISTER,
            className: 'transparent',
            events: {
                click: () => router.go('/sign-up')
            }
        });
    }

    render() {
        return this.compile(template, this.props);
    }
}
