import Handlebars from 'handlebars';

import { Button } from '@src/components/Button/button';
import { Input } from '@src/components/Input/input';
import { Link } from '@src/components/Link/link';
import {
    LOG_IN,
    USER_NAME,
    PASSWD,
    ENTER,
    REGISTER
} from '@src/constants';

import signIn from 'bundle-text:./signIn.hbs';
import './signIn.pcss';

export const SignIn = () => {
    let login = '';
    let password = '';

    let loginError = '';
    let passwordError = '';

    const inputLogin = Input({
        label: USER_NAME,
        name: 'login',
        value: login,
        error: loginError
    });

    const inputPassword = Input({
        label: PASSWD,
        name: 'password',
        type: 'password',
        value: password,
        error: passwordError
    });

    return Handlebars
        .compile(signIn)({
            onEnter: '/chats',
            title: LOG_IN,
            login: inputLogin,
            password: inputPassword,
            signIn: Button({ text: ENTER }),
            link: Link({ href: '/signUp', text: REGISTER })
        });
};
