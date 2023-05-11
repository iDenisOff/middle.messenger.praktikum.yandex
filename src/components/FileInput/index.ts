import { Block } from '@src/utils/Block';

import template from './fileInput.hbs';
import './fileInput.pcss';

export class FileInput extends Block {
    constructor() {
        super('div', {});
    }

    init() {
        this.element.classList.add('file-input');
    }

    render() {
        return this.compile(template, this.props);
    }
}
