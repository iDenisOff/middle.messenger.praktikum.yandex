import { Block } from '@src/utils/Block';
import userController from '@src/controllers/UserController';
import { UPLOAD_FILE, CHANGE } from '@src/constants';
import { Button } from '@src/components/Button';

import { FileInput } from './components/FileInput';

import template from 'bundle-text:./form.hbs';
import './form.pcss';

export class Form extends Block {
    constructor() {
        super('form', {});

        this.props.title = UPLOAD_FILE;
    }

    componentDidMount(): void {
        this.setProps({
            events: {
                submit: (event: Event) => event.preventDefault()
            }
        });
    }

    init() {
        this.element.classList.add('modal-form');
        this.children.upload = new FileInput();
        this.children.change = new Button({
            text: CHANGE,
            events: {
                click: () => {
                    const input = this.children.upload.element.getElementsByClassName('file-input_input')[0];
                    const files = (input as HTMLInputElement).files;

                    if (files) {
                        const formData = new FormData();
                        formData.append('avatar', files[0]);

                        userController.changeUserAvatar(formData);
                    }
                }
            }
        });
    }

    render() {
        return this.compile(template, this.props);
    }
}
