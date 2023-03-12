import Handlebars from 'handlebars';

import chats from 'bundle-text:./chats.hbs';
import './chats.pcss';

export const Chats = () => {
    return Handlebars.compile(chats)();
};
