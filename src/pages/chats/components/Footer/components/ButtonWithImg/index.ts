import { Block } from '@src/utils/Block';
import send from '@static/send.svg';

import template from 'bundle-text:./buttonWithImg.hbs';

interface ButtonWithImgProps {
    events?: {
        click: () => void;
    };
}

export class ButtonWithImg extends Block<ButtonWithImgProps> {
    constructor(props: ButtonWithImgProps) {
        super('button', props);
    }

    render() {
        return this.compile(template, { ...this.props, send });
    }
}
