import Handlebars from 'handlebars';

import { Button } from '@src/components/Button/button';
import { Input } from '@src/components/Input/input';
import { Link } from '@src/components/Link/link';
import {
    EMAIL,
    USER_NAME,
    FIRST_NAME,
    SECOND_NAME,
    PHONE,
    PASSWD,
    PASSWD_RETRY,
    REGISTRATION,
    REGISTER,
    ENTER
} from '@src/constants';

import signUp from 'bundle-text:./signUp.hbs';
import './signUp.pcss';

export const SignUp = () => {
    let email = '';
    let login = '';
    let firstName = '';
    let secondName = '';
    let phone = '';
    let password = '';
    let passwordRetry = '';

    let passwordError = '';

    const inputEmail = Input({ label: EMAIL, type: 'email', name: 'email', value: email });
    const inputLogin = Input({ label: USER_NAME, name: 'login', value: login });
    const inputFirstName = Input({ label: FIRST_NAME, name: 'first_name', value: firstName });
    const inputSecondName = Input({ label: SECOND_NAME, name: 'second_name', value: secondName });
    const inputPhone = Input({ label: PHONE, type: 'tel', name: 'phone', value: phone });
    const inputPassword = Input({ label: PASSWD, type: 'password', name: 'password', value: password });
    const inputPasswordRetry = Input({
        label: PASSWD_RETRY,
        type: 'password',
        name: 'password_retry',
        value: passwordRetry,
        error: passwordError
    });

    return Handlebars
        .compile(signUp)({
            onEnter: '/chats',
            title: REGISTRATION,
            email: inputEmail,
            login: inputLogin,
            firstName: inputFirstName,
            secondName: inputSecondName,
            phone: inputPhone,
            password: inputPassword,
            passwordRetry: inputPasswordRetry,
            signUp: Button({ text: REGISTER }),
            link: Link({ href: '/signIn', text: ENTER }),
        });
};
