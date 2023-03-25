import Handlebars from 'handlebars';

import { Link } from '@src/components/Link/link';
import {
    GO_BACK
} from '@src/constants';

import error from 'bundle-text:./error.hbs';
import './error.pcss';

interface ErrorProps {
    code: number;
    text: string;
}

export const UIError = ({ code, text }: ErrorProps) =>
    Handlebars.compile(error)({ code, text, link: Link({ href: '/chats', text: GO_BACK }) });
