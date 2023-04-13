import { Block } from '@src/utils/Block';
import { MY_PROFILE } from '@src/constants';

import { ProfileLink } from './components/ProfileLink';
import { Search } from './components/Search';
import { Tab } from './components/Tab';
import { Header } from './components/Header';
import { Content } from './components/Content';
import { Footer } from './components/Footer';

import template from 'bundle-text:./chats.hbs';
import './chats.pcss';

export class Chats extends Block {
    constructor() {
        super('main', {});
    }

    init() {
        const searchValue = '';

        this.element.classList.add('chats');
        this.children.profileLink = new ProfileLink({ href: '/profile', label: MY_PROFILE });
        this.children.search = new Search({ value: searchValue });
        this.children.header = new Header({ name: 'Вадим' });
        this.children.content = new Content();
        this.children.footer = new Footer({});
        this.children.tab = new Tab({
            name: 'Андрей',
            text: 'Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила',
            time: '10:49',
            count: 2
        });
    }

    render() {
        return this.compile(template, this.props);
    }
}
