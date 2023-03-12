import Handlebars from 'handlebars';

import { Link } from '/src/components/Link/link';
import {
    GoBack
} from '/src/constants';

import error from 'bundle-text:./error.hbs';
import './error.pcss';

export const Error = ({ code, text }) =>
    Handlebars.compile(error)({ code, text, link: Link({ href: '/chats', text: GoBack })});
