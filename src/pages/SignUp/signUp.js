import Handlebars from 'handlebars';

import { Button } from '/src/components/Button/button';
import { Input } from '/src/components/Input/input';
import { Link } from '/src/components/Link/link';
import {
    Email,
    UserName,
    FirstName,
    SecondName,
    Phone,
    Passwd,
    PasswdRetry,
    Registration,
    Register,
    Enter
} from '/src/constants';

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

    const inputEmail = Input({ label: Email, type: 'email', value: email });
    const inputLogin = Input({ label: UserName, value: login });
    const inputFirstName = Input({ label: FirstName, value: firstName });
    const inputSecondName = Input({ label: SecondName, value: secondName });
    const inputPhone = Input({ label: Phone, type: 'tel', value: phone });
    const inputPassword = Input({ label: Passwd, type: 'password', value: password });
    const inputPasswordRetry = Input({
        label: PasswdRetry,
        type: 'password',
        value: passwordRetry,
        error: passwordError
    });

    return Handlebars
        .compile(signUp)({
            title: Registration,
            email: inputEmail,
            login: inputLogin,
            firstName: inputFirstName,
            secondName: inputSecondName,
            phone: inputPhone,
            password: inputPassword,
            passwordRetry: inputPasswordRetry,
            signUp: Button({ text: Register }),
            link: Link({ href: '#', text: Enter }),
        });
};
