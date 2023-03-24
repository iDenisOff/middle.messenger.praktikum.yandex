import Handlebars from 'handlebars';

import { Link } from '../../components/Link/link';
import { Row } from './components/Row/row';
import { RowWithLink } from './components/RowWithLink/rowWithLink';
import {
    EMAIL,
    USER_NAME,
    FIRST_NAME,
    SECOND_NAME,
    PHONE,
    DISPLAY_NAME
} from '../../constants';
import back from '/static/back.svg';
import avatar from '/static/avatar.svg';

import profile from 'bundle-text:./profile.hbs';
import './profile.pcss';

const EditData = 'Изменить данные';
const EditPasswd = 'Изменить пароль';
const Exit = 'Выйти';

export const Profile = () => {
    let email = 'pochta@yandex.ru';
    let login = 'ivanivanov';
    let firstName = 'Иван';
    let secondName = 'Иванов';
    let displayName = 'Ваня';
    let phone = '+7 (909) 967 30 30';

    return Handlebars
        .compile(profile)({
            back: back,
            goBack: '/chats',
            avatar: avatar,
            name: displayName,
            email: Row({ title: EMAIL, value: email }),
            login: Row({ title: USER_NAME, value: login }),
            firstName: Row({ title: FIRST_NAME, value: firstName }),
            secondName: Row({ title: SECOND_NAME, value: secondName }),
            displayName: Row({ title: DISPLAY_NAME, value: displayName }),
            phone: Row({ title: PHONE, value: phone }),
            editProfile: RowWithLink({ link: Link({ href: '/profileEdit', text: EditData })}),
            editPasswd: RowWithLink({ link: Link({ href: '/passwdEdit', text: EditPasswd })}),
            exit: RowWithLink({ link: Link({ href: '/signIn', text: Exit })})
        });
};
