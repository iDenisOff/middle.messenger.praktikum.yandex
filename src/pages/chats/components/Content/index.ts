import { Block } from '@src/utils/Block';

import template from 'bundle-text:./content.hbs';

export class Content extends Block {
    constructor() {
        super('div', {});
    }

    init() {
        this.element.classList.add('content');
    }

    render() {
        return this.compile(template, this.props);
    }
}
