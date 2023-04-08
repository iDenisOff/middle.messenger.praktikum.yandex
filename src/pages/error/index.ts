import { Block } from '@src/utils/Block';
import { Link } from '@src/components/Link';
import {
    GO_BACK
} from '@src/constants';

import template from 'bundle-text:./error.hbs';
import './error.pcss';

export class UIError extends Block {
    constructor() {
        super('main', {});

        this.props.code = 404;
        this.props.text = 'Страница не найдена';

    }

    init() {
        this.element.classList.add('server-error');
        this.children.link = new Link({ href: '/messenger', text: GO_BACK });
    }

    render() {
        return this.compile(template, this.props);
    }
}
