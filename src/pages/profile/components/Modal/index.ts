import { Block } from '@src/utils/Block';
import userController from '@src/controllers/UserController';
import { ModalForm } from '@src/components/ModalForm';
import { CHANGE, UPLOAD_FILE } from '@src/constants';
import { FileInput } from '@src/components/FileInput';
import { Button } from '@src/components/Button';

import template from 'bundle-text:./modal.hbs';
import './modal.pcss';

export class Modal extends Block {
    constructor() {
        super('div', {});
    }

    init() {
        this.element.classList.add('modal');

        this.children.form = new ModalForm({
            title: UPLOAD_FILE,
            body: new FileInput(),
            footer: new Button({
                text: CHANGE,
                events: {
                    click: () => {
                        const input = this.children.form.element.getElementsByClassName('file-input_input')[0];
                        const files = (input as HTMLInputElement).files;

                        if (files) {
                            const formData = new FormData();
                            formData.append('avatar', files[0]);

                            userController.changeUserAvatar(formData);
                        }
                    }
                }
            })
        });
    }

    render() {
        return this.compile(template, this.props);
    }
}
