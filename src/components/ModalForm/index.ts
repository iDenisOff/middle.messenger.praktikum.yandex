import { Block } from '@src/utils/Block';

import template from './modalForm.hbs';
import './modalForm.pcss';

interface ModalFormProps {
    title: string;
    body: Block;
    footer: Block;
    events?: {
        submit: (event: Event) => void;
    };
}

export class ModalForm extends Block<ModalFormProps> {
    constructor(props: ModalFormProps) {
        super('form', props);
    }

    componentDidMount(): void {
        this.setProps({
            title: this.props.title,
            body: this.props.body,
            footer: this.props.footer,
            events: {
                submit: (event: Event) => event.preventDefault()
            }
        });
    }

    init() {
        this.element.classList.add('modal-form');
    }

    render() {
        return this.compile(template, this.props);
    }
}
