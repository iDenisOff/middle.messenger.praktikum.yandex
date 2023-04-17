import { Block } from '@src/utils/Block';
import { store, StoreEvents } from '@src/store/store';

import { MessageBlock } from './MessageBlock';

import template from 'bundle-text:./content.hbs';
import './content.pcss';

export class Content extends Block {
    constructor() {
        super('div', {});

        store.on(StoreEvents.Updated, () => {
            this.setProps(store.getState().chats);
        });

        store.on(StoreEvents.Updated, () => {
            this.setProps(store.getState().messages);
        });
    }

    init() {
        store.on(StoreEvents.Updated, () => {
            if (store.getState() && store.getState().messages) {
                const { messages, chats, user } = store.getState();

                if (chats.activeChat?.id && messages![chats.activeChat.id]) {
                    this.childrenCollection.messages =
                        messages![chats.activeChat.id].map((msg) => new MessageBlock({
                            content: msg.content,
                            className: user.data?.id === msg.user_id ? 'my' : 'your'
                        }));
                }
            }
        });

        this.element.classList.add('content');
    }

    render() {
        return this.compile(template, this.props);
    }
}
