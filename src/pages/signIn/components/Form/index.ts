import { Block } from '@src/utils/Block';
import authController from '@src/controllers/AuthController';
import router from '@src/utils/Router';
import { Button } from '@src/components/Button';
import { FormInput } from '@src/components/FormInput';
import { validateValue } from '@src/utils/validateValues';
import {
    ENTER,
    LOG_IN,
    PASSWD,
    REGISTER,
    TypesChecked,
    USER_NAME,
    ValueTypes
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
                click: () => {
                    let data: Record<string, string> = {};
                    let isValidData = true;

                    Object.entries(this.children).forEach(([name, el]) => {
                        if (name === 'signUp' || name === 'signIn') {
                            return;
                        }

                        const { value } = (el.children.input.element as HTMLInputElement);
                        const isValidValue = validateValue(ValueTypes[name], value);

                        (el.element.getElementsByClassName('form-input__error')[0] as HTMLDivElement).innerText =
                            isValidValue ? '' : 'Некорректное значение';

                        if (isValidValue) {
                            data[name] = value;
                        } else {
                            isValidData = false;
                        }
                    });

                    if (isValidData) {
                        authController.signIn(data)
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
