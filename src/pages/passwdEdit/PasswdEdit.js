import Handlebars from 'handlebars';

import { Button } from '/src/components/Button/button';
import { EditableRow } from '/src/components/EditableRow/editableRow';
import { Save } from '/src/constants';
import back from '/static/back.svg';
import avatar from '/static/avatar.svg';

import passwdEdit from 'bundle-text:./passwdEdit.hbs';
import './PasswdEdit.pcss';

const OldPasswd = 'Старый пароль';
const NewPasswd = 'Новый пароль';
const NewPasswdRetry = 'Повторите новый пароль';

export const PasswdEdit = () => {
    let oldPasswd = '1234567';
    let newPasswd = '1234567';
    let newPasswdRetry = '1234567';

    return Handlebars
        .compile(passwdEdit)({
            back: back,
            goBack: '/profile',
            avatar: avatar,
            onSave: '/profile',
            oldPasswd: EditableRow({ title: OldPasswd, type: 'password', value: oldPasswd }),
            newPasswd: EditableRow({ title: NewPasswd, type: 'password', value: newPasswd }),
            newPasswdRetry: EditableRow({ title: NewPasswdRetry, type: 'password', value: newPasswdRetry }),
            save: Button({ text: Save })
        });
};
