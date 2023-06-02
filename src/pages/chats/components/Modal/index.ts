import { Block } from '@src/utils/Block';
import { ModalForm } from '@src/components/ModalForm';
import { FormInput } from '@src/components/FormInput';
import { Button } from '@src/components/Button';

import template from './modal.hbs';
import './modal.pcss';

interface ModalProps {
    title: string;
    inputLabel: string;
    inputName: string;
    buttonText: string;
    onSubmit: () => void;
}

export class Modal extends Block<ModalProps> {
    constructor(props: ModalProps) {
        super('dev', props);
    }

    init() {
        this.element.classList.add('modal');

        this.children.form = new ModalForm({
            title: this.props.title,
            body: new FormInput({
                label: this.props.inputLabel,
                name: this.props.inputName
            }),
            footer: new Button({
                text: this.props.buttonText,
                events: {
                    click: () => this.props.onSubmit()
                }
            })
        });
    }

    render() {
        return this.compile(template, this.props);
    }
}
