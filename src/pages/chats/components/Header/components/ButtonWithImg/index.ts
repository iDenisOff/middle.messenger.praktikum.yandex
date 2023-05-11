import { Block } from '@src/utils/Block';

import template from './buttonWithImg.hbs';
import './buttonWithImg.pcss';

interface ButtonWithImgProps {
    icon: typeof import('*.svg'),
    events?: {
        click: () => void;
    };
}

export class ButtonWithImg extends Block<ButtonWithImgProps> {
    constructor(props: ButtonWithImgProps) {
        super('button', props);
    }

    init() {
        this.element.classList.add('button-with-img');
    }

    render() {
        return this.compile(template, this.props);
    }
}
