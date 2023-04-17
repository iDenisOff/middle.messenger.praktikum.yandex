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
import chatsController from '@src/controllers/ChatsController';
import { store, StoreEvents } from '@src/store/store';
import { Chat, CreateChatRequest } from '@src/api/ChatsAPI';
import { getTime } from '@src/utils/helpers';

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

        chatsController.fetchChats();

        store.on(StoreEvents.Updated, () => {
            this.setProps(store.getState().chats);
        });
    }

    componentDidMount() {
        this.children.plusChat.setProps({
            events: {
                click: () => {
                    this.children.addChatModal.element.classList.add('active');
                    this.children.overlay.element.classList.add('active');
                }
            }
        });

        this.children.overlay.setProps({
            events: {
                click: () => {
                    this.children.addChatModal.element.classList.remove('active');
                    this.children.overlay.element.classList.remove('active');
                }
            }
        });
    }

    init() {
        store.on(StoreEvents.Updated, () => {
            if (store.getState() && store.getState().chats.data) {
                const { chats } = store.getState();

                this.childrenCollection.tabs = chats.data!.map((chat: Chat) => new Tab({
                    id: chat.id,
                    activeChatId: chats.activeChat?.id ?? null,
                    name: chat.title,
                    text: chat.last_message?.content,
                    time: chat.last_message?.time ? getTime(chat.last_message?.time) : undefined,
                    count: chat.unread_count,
                    events: {
                        click: (e) => {
                            const selectChatId = parseInt(e.currentTarget.id);

                            if (selectChatId === this.props.activeChat?.id) {
                                store.set('chats.activeChat', null);
                            } else {
                                const { id, title, avatar } = chats.data?.find((el) => el.id === selectChatId)!;
                                store.set('chats.activeChat', { id, title, avatar });
                            }
                        }
                    }
                }));
            }
        });

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
        this.children.header = new Header({});
        this.children.content = new Content();
        this.children.footer = new Footer({});
        this.children.addChatModal = new Modal({
            title: ADD_CHAT,
            inputLabel: TITLE,
            inputName: 'chat',
            buttonText: ADD,
            onSubmit: () => {
                const input = this.children.addChatModal.children.form.element.getElementsByClassName('input')[0];
                const data: CreateChatRequest = { title: (input as HTMLInputElement).value };

                chatsController.createChat(data)
                    .then(() => {
                        this.children.overlay.element.dispatchEvent(new Event('click'));
                        (input as HTMLInputElement).value = '';
                        chatsController.fetchChats();
                    })
                    .catch((err) => {
                        const errorEl = this.element.getElementsByClassName('modal-form_error')[0];
                        (errorEl as HTMLDivElement).innerText = err.reason;
                    });
            }
        });
        this.children.overlay = new Overlay({});

        this.children.goToProfile.element.style.gridColumnStart = '3';
    }

    render() {
        if (this.props.data) {
            this.children.header.setProps({
                title: this.props.activeChat?.title
            });
        }

        return this.compile(template, this.props);
    }
}
