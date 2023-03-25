import Handlebars from 'handlebars';

import { Button } from '@src/components/Button/button';
import { EditableRow } from '@src/components/EditableRow/editableRow';
import {
    EMAIL,
    USER_NAME,
    FIRST_NAME,
    SECOND_NAME,
    PHONE,
    DISPLAY_NAME,
    SAVE
} from '@src/constants';
import back from '@static/back.svg';
import avatar from '@static/avatar.svg';

import profileEdit from 'bundle-text:./profileEdit.hbs';
import './profileEdit.pcss';

export const ProfileEdit = () => {
    let email = 'pochta@yandex.ru';
    let login = 'ivanivanov';
    let firstName = 'Иван';
    let secondName = 'Иванов';
    let displayName = 'Ваня';
    let phone = '+7(909)9673030';

    return Handlebars
        .compile(profileEdit)({
            back: back,
            goBack: '/profile',
            avatar: avatar,
            onSave: '/profile',
            email: EditableRow({ title: EMAIL, name: 'email', value: email }),
            login: EditableRow({ title: USER_NAME, name: 'login', value: login }),
            firstName: EditableRow({ title: FIRST_NAME, name: 'first_name', value: firstName }),
            secondName: EditableRow({ title: SECOND_NAME, name: 'second_name', value: secondName }),
            displayName: EditableRow({ title: DISPLAY_NAME, name: 'display_name', value: displayName }),
            phone: EditableRow({ title: PHONE, name: 'phone', value: phone }),
            save: Button({ text: SAVE })
        });
};
