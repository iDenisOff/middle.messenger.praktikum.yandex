import Handlebars from 'handlebars';

import { Button } from '/src/components/Button/button';
import { Input } from '/src/components/Input/input';
import { Link } from '/src/components/Link/link';
import {
    LogIn,
    UserName,
    Passwd,
    Enter,
    Register
} from '/src/constants';

import signIn from 'bundle-text:./signIn.hbs';
import './signIn.pcss';

export const SignIn = () => {
    let login = '';
    let password = '';

    let loginError = '';
    let passwordError = '';

    const inputLogin = Input({
        label: UserName,
        value: login,
        error: loginError
    });

    const inputPassword = Input({
        label: Passwd,
        type: 'password',
        value: password,
        error: passwordError
    });

    return Handlebars
        .compile(signIn)({
            onEnter: '/chats',
            title: LogIn,
            login: inputLogin,
            password: inputPassword,
            signIn: Button({ text: Enter }),
            link: Link({ href: '/signUp', text: Register })
        });
};
