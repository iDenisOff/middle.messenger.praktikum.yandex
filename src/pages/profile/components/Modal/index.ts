import { Block } from '@src/utils/Block';
import { UPLOAD_FILE, CHANGE } from '@src/constants';
import { Button } from '@src/components/Button';

import { FileInput } from './components/FileInput';

import template from 'bundle-text:./modal.hbs';
import './modal.pcss';

export class Modal extends Block {
    constructor() {
        super('div', {});

        this.props.title = UPLOAD_FILE;
    }

    init() {
        this.element.classList.add('modal');
        this.children.upload = new FileInput();
        this.children.change = new Button({
            text: CHANGE,
            events: {
                click: () => {
                    const input = this.children.upload.element.getElementsByClassName('file-input_input')[0];
                    console.log((input as HTMLInputElement).value);
                }
            }
        });
    }

    render() {
        return this.compile(template, this.props);
    }
}
