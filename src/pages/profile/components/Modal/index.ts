import { Block } from '@src/utils/Block';

import { Form } from './components/Form';

import template from 'bundle-text:./modal.hbs';
import './modal.pcss';

export class Modal extends Block {
    constructor() {
        super('div', {});
    }

    init() {
        this.element.classList.add('modal');

        this.children.form = new Form();

    }

    render() {
        return this.compile(template, this.props);
    }
}
