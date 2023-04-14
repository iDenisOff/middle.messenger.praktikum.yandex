import { Block } from '@src/utils/Block';

import template from 'bundle-text:./form.hbs';
import './form.pcss';

interface FormProps {
    title: string;
    body: Block;
    footer: Block;
    events?: {
        submit: (event: Event) => void;
    };
}

export class Form extends Block<FormProps> {
    constructor(props: FormProps) {
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
