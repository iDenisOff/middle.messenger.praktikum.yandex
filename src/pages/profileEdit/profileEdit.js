import Handlebars from 'handlebars';

import { Button } from '/src/components/Button/button';
import { EditableRow } from '/src/components/EditableRow/editableRow';
import {
    Email,
    UserName,
    FirstName,
    SecondName,
    Phone,
    DisplayName,
    Save
} from '/src/constants';
import back from '/static/back.svg';
import avatar from '/static/avatar.svg';

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
            email: EditableRow({ title: Email, name: 'email', value: email }),
            login: EditableRow({ title: UserName, name: 'login', value: login }),
            firstName: EditableRow({ title: FirstName, name: 'first_name', value: firstName }),
            secondName: EditableRow({ title: SecondName, name: 'second_name', value: secondName }),
            displayName: EditableRow({ title: DisplayName, name: 'display_name', value: displayName }),
            phone: EditableRow({ title: Phone, name: 'phone', value: phone }),
            save: Button({ text: Save })
        });
};
