import { Block } from '@src/utils/Block';
import { Link } from '@src/components/Link';
import {
    EMAIL,
    USER_NAME,
    FIRST_NAME,
    SECOND_NAME,
    PHONE,
    DISPLAY_NAME
} from '@src/constants';
import back from '@static/back.svg';
import avatar from '@static/avatar.svg';

import { Row } from './components/Row';
import { RowWithLink } from './components/RowWithLink';

import template from 'bundle-text:./profile.hbs';
import './profile.pcss';

const EditData = 'Изменить данные';
const EditPasswd = 'Изменить пароль';
const Exit = 'Выйти';

export class Profile extends Block {
    constructor() {
        super('main', {});

        this.props.back = back;
        this.props.goBack = '/chats';
        this.props.avatar = avatar;
        this.props.name = 'Ваня';
    }

    init() {
        const email = 'pochta@yandex.ru';
        const login = 'ivanIvanov';
        const firstName = 'Иван';
        const secondName = 'Иванов';
        const displayName = 'Ваня';
        const phone = '+7 (909) 967 30 30';

        this.element.classList.add('profile');
        this.children.email = new Row({ title: EMAIL, value: email });
        this.children.login = new Row({ title: USER_NAME, value: login });
        this.children.firstName = new Row({ title: FIRST_NAME, value: firstName });
        this.children.secondName = new Row({ title: SECOND_NAME, value: secondName });
        this.children.displayName = new Row({ title: DISPLAY_NAME, value: displayName });
        this.children.phone = new Row({ title: PHONE, value: phone });
        this.children.editProfile = new RowWithLink({
            link: new Link({ href: '/profileEdit', text: EditData })
        });
        this.children.editPasswd = new RowWithLink({
            link: new Link({ href: '/passwdEdit', text: EditPasswd })
        });
        this.children.exit = new RowWithLink({
            link: new Link({ href: '/signIn', text: Exit })
        });
    }

    render() {
        return this.compile(template, this.props);
    }
}
