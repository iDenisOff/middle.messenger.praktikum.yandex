import { Button } from '@src/components/Button';
import { Block } from '@src/utils/Block';
import { Overlay } from '@src/components/Overlay';
import router from '@src/utils/Router';
import {
    ADD_CHAT,
    MY_PROFILE,
    ADD,
    TITLE
} from '@src/constants';

import { Search } from './components/Search';
import { Tab } from './components/Tab';
import { Header } from './components/Header';
import { Content } from './components/Content';
import { Footer } from './components/Footer';
import { Modal } from './components/Modal';

import template from 'bundle-text:./chats.hbs';
import './chats.pcss';

export class Chats extends Block {
    constructor() {
        super('main', {});
    }

    componentDidMount() {
        this.children.plusChat.setProps({
            events: {
                click: () => {
                    this.children.modal.element.classList.add('active');
                    this.children.overlay.element.classList.add('active');
                }
            }
        });

        this.children.overlay.setProps({
            events: {
                click: () => {
                    this.children.modal.element.classList.remove('active');
                    this.children.overlay.element.classList.remove('active');
                }
            }
        });
    }

    init() {
        const searchValue = '';

        this.element.classList.add('chats');
        this.children.plusChat = new Button({
            text: ADD_CHAT,
            className: 'transparent-grey'
        });
        this.children.goToProfile = new Button({
            text: MY_PROFILE,
            className: 'transparent-grey',
            events: {
                click: () => router.go('/profile')
            }
        });
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
        this.children.modal = new Modal({
            title: ADD_CHAT,
            inputLabel: TITLE,
            inputName: 'chat',
            buttonText: ADD
        });
        this.children.overlay = new Overlay({});


        this.children.goToProfile.element.style.gridColumnStart = '3';
    }

    render() {
        return this.compile(template, this.props);
    }
}
