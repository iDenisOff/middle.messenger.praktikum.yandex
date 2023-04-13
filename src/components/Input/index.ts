import { Block } from '@src/utils/Block';

import template from 'bundle-text:./input.hbs';
import './input.pcss';

interface InputProps {
    type?: 'text' | 'password' | 'email' | 'tel';
    name: string;
    value?: string;
    events?: {
        focus: (event: Event) => void;
        blur: (event: Event) => void;
    };
}

export class Input extends Block<InputProps> {
    constructor(props: InputProps) {
        super('input', { ...props, type: props.type ?? 'text' });
    }

    init() {
        this.element.classList.add('input');
        (this.element as HTMLInputElement).type = this.props.type!;
        (this.element as HTMLInputElement).name = this.props.name;
        (this.element as HTMLInputElement).value = this.props.value ?? '';
    }

    render() {
        if (this.props.value) {
            (this.element as HTMLInputElement).value = this.props.value;
        }

        return this.compile(template, this.props);
    }
}
