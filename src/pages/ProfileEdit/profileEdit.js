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
            avatar: avatar,
            email: EditableRow({ title: Email, value: email }),
            login: EditableRow({ title: UserName, value: login }),
            firstName: EditableRow({ title: FirstName, value: firstName }),
            secondName: EditableRow({ title: SecondName, value: secondName }),
            displayName: EditableRow({ title: DisplayName, value: displayName }),
            phone: EditableRow({ title: Phone, value: phone }),
            save: Button({ text: Save })
        });
};
