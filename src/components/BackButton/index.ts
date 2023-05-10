import { Block } from '@src/utils/Block';
import back from '@static/back.svg';

import template from 'bundle-text:./backButton.hbs';
import './backButton.pcss';

interface BackButtonProps {
    events: {
        click: () => void;
    };
}

export class BackButton extends Block<BackButtonProps> {
    constructor(props: BackButtonProps) {
        super('button', props);
    }

    init() {
        this.element.classList.add('back-button');
    }

    render() {
        return this.compile(template, { ...this.props, back });
    }
}
