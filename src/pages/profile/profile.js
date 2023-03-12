import Handlebars from 'handlebars';

import { Link } from '/src/components/Link/link';
import { Row } from './components/Row/row';
import { RowWithLink } from './components/RowWithLink/rowWithLink';
import {
    Email,
    UserName,
    FirstName,
    SecondName,
    Phone,
    DisplayName
} from '/src/constants';
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
            email: Row({ title: Email, value: email }),
            login: Row({ title: UserName, value: login }),
            firstName: Row({ title: FirstName, value: firstName }),
            secondName: Row({ title: SecondName, value: secondName }),
            displayName: Row({ title: DisplayName, value: displayName }),
            phone: Row({ title: Phone, value: phone }),
            editProfile: RowWithLink({ link: Link({ href: '/profileEdit', text: EditData })}),
            editPasswd: RowWithLink({ link: Link({ href: '/passwdEdit', text: EditPasswd })}),
            exit: RowWithLink({ link: Link({ href: '/signIn', text: Exit })})
        });
};
