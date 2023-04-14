import { Block } from '@src/utils/Block';

import template from 'bundle-text:./button.hbs';
import './button.pcss';

interface ButtonProps {
    text: string;
    className?: 'normal' | 'transparent' | 'transparent-grey';
    events?: {
        click: () => void;
    };
}

export class Button extends Block<ButtonProps> {
    constructor(props: ButtonProps) {
        super('button', props);
    }

    init() {
        this.element.classList.add('button');
        this.element.classList.add(this.props.className ?? 'normal');
    }

    render() {
        return this.compile(template, this.props);
    }
}
