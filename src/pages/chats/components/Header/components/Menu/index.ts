import { Block } from '@src/utils/Block';
import {
    ADD_USER,
    DELETE_USER,
    DELETE_CHAT,
    USER_NAME,
    ADD,
    DELETE
} from '@src/constants';
import chatsController from '@src/controllers/ChatsController';
import userController from '@src/controllers/UserController';
import { ModifyChatUsersRequest } from '@src/api/ChatsAPI';
import { store, StoreEvents } from '@src/store/store';
import { Overlay } from '@src/components/Overlay';
import { User } from '@src/api/AuthAPI';
import add from '@static/add.svg';
import del from '@static/del.svg';

import { MenuElement } from './components/MenuElement';
import { Modal } from '../../../Modal';

import template from 'bundle-text:./menu.hbs';
import './menu.pcss';

export class Menu extends Block {
    constructor() {
        super('dev', {});

        store.on(StoreEvents.Updated, () => {
            this.setProps(store.getState().chats);
        });
    }

    componentDidMount() {
        this.children.addUser.setProps({
            events: {
                click: () => {
                    this.children.addUsersToChatModal.element.classList.add('active');
                    this.children.overlay.element.classList.add('active');
                }
            }
        });

        this.children.deleteUser.setProps({
            events: {
                click: () => {
                    this.children.deleteUsersFromChatModal.element.classList.add('active');
                    this.children.overlay.element.classList.add('active');
                }
            }
        });

        this.children.overlay.setProps({
            events: {
                click: () => {
                    this.children.addUsersToChatModal.element.classList.remove('active');
                    this.children.deleteUsersFromChatModal.element.classList.remove('active');
                    this.children.overlay.element.classList.remove('active');

                    const addUsersInput = this.children.addUsersToChatModal.children.form.element.getElementsByClassName('modal-form_error')[0];
                    (addUsersInput as HTMLDivElement).innerText = '';

                    const deleteUsersInput = this.children.deleteUsersFromChatModal.children.form.element.getElementsByClassName('modal-form_error')[0];
                    (deleteUsersInput as HTMLDivElement).innerText = '';
                }
            }
        });
    }

    init() {
        this.element.classList.add('menu');

        this.children.addUser = new MenuElement({
            icon: add,
            title: ADD_USER
        });
        this.children.deleteUser = new MenuElement({
            icon: del,
            title: DELETE_USER
        });
        this.children.deleteChat = new MenuElement({
            icon: del,
            title: DELETE_CHAT,
            events: {
                click: () => {
                    chatsController.deleteChat({ chatId: this.props.activeChat.id })
                        .then(() => {
                            store.set('chats.activeChat', null);
                            chatsController.fetchChats();
                        })
                        .catch(console.log);
                }
            }
        });
        this.children.addUsersToChatModal = new Modal({
            title: ADD_USER,
            inputLabel: USER_NAME,
            inputName: 'login',
            buttonText: ADD,
            onSubmit: () => {
                const input = this.children.addUsersToChatModal.children.form.element.getElementsByClassName('input')[0];

                (async () => {
                    const foundUsers: User[] = await userController.searchUsers({ login: (input as HTMLInputElement).value });

                    if (foundUsers.length) {
                        const data: ModifyChatUsersRequest = {
                            users: [ foundUsers[0].id ],
                            chatId: this.props.activeChat.id
                        };

                        chatsController.addUsersToChat(data)
                            .then(() => {
                                this.children.overlay.element.dispatchEvent(new Event('click'));
                                (input as HTMLInputElement).value = '';
                            })
                            .catch((err) => {
                                const errorEl = this.children.addUsersToChatModal.element.getElementsByClassName('modal-form_error')[0];
                                (errorEl as HTMLDivElement).innerText = err.reason;
                            });

                    } else {
                        const errorEl = this.children.addUsersToChatModal.element.getElementsByClassName('modal-form_error')[0];
                        (errorEl as HTMLDivElement).innerText = 'Ошибка метода поиска пользователя';
                    }
                })();
            }
        });
        this.children.deleteUsersFromChatModal = new Modal({
            title: DELETE_USER,
            inputLabel: USER_NAME,
            inputName: 'login',
            buttonText: DELETE,
            onSubmit: () => {
                const input = this.children.deleteUsersFromChatModal.children.form.element.getElementsByClassName('input')[0];

                (async () => {
                    const foundUsers: User[] = await userController.searchUsers({ login: (input as HTMLInputElement).value });

                    if (foundUsers.length) {
                        const data: ModifyChatUsersRequest = {
                            users: [ foundUsers[0].id ],
                            chatId: this.props.activeChat.id
                        };

                        chatsController.deleteUsersFromChat(data)
                            .then(() => {
                                this.children.overlay.element.dispatchEvent(new Event('click'));
                                (input as HTMLInputElement).value = '';
                            })
                            .catch((err) => {
                                const errorEl = this.children.deleteUsersFromChatModal.element.getElementsByClassName('modal-form_error')[0];
                                (errorEl as HTMLDivElement).innerText = err.reason;
                            });
                    } else {
                        const errorEl = this.children.deleteUsersFromChatModal.element.getElementsByClassName('modal-form_error')[0];
                        (errorEl as HTMLDivElement).innerText = 'Ошибка метода поиска пользователя';
                    }
                })();
            }
        });
        this.children.overlay = new Overlay({});
    }

    render() {
        return this.compile(template, this.props);
    }
}
