import Handlebars from 'handlebars';

import chats from 'bundle-text:./chats.hbs';
import { ProfileLink } from './components/ProfileLink/profileLink';
import { Search } from './components/Search/search';
import { Tab } from './components/Tab/tab';
import { Header } from './components/Header/header';
import { Content } from './components/Content/content';
import { Footer } from './components/Footer/footer';
import { PROFILE } from '@src/constants';

import './chats.pcss';

export const Chats = () => {
    let searchValue = '';

    const tabs = Array(20).fill(
        Tab({
            name: 'Андрей',
            text: 'Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила',
            time: '10:49',
            count: 2
        })
    );

    return Handlebars.compile(chats)({
        profileLink: ProfileLink({ href: '/profile', label: PROFILE }),
        search: Search({ value: searchValue }),
        tabs,
        header: Header({ name: 'Вадим' }),
        content: Content(),
        footer: Footer({ message: '' })
    });
};
