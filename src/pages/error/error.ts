import Handlebars from 'handlebars';

import { Link } from '../../components/Link/link';
import {
    GO_BACK
} from '../../constants';

import error from 'bundle-text:./error.hbs';
import './error.pcss';

interface ErrorProps {
    code: number;
    text: string;
}

export const Error = ({ code, text }: ErrorProps) =>
    Handlebars.compile(error)({ code, text, link: Link({ href: '/chats', text: GO_BACK })});
