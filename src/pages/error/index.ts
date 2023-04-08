import { Block } from '@src/utils/Block';
import { Link } from '@src/components/Link';
import {
    GO_BACK
} from '@src/constants';

import template from 'bundle-text:./error.hbs';
import './error.pcss';

interface ErrorProps {
    code: number;
    text: string;
}

export class UIError extends Block<ErrorProps> {
    constructor(props: ErrorProps) {
        super('main', props);
    }

    init() {
        this.element.classList.add('server-error');
        this.children.link = new Link({ href: '/chats', text: GO_BACK });
    }

    render() {
        return this.compile(template, this.props);
    }
}
