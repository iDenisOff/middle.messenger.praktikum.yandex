import { Block } from '@src/utils/Block';

import template from 'bundle-text:./messageBlock.hbs';
import './messageBlock.pcss';

interface MessageBlockProps {
    content: string;
    className: string;
}

export class MessageBlock extends Block<MessageBlockProps> {
    constructor(props: MessageBlockProps) {
        super('div', props);
    }

    init() {
        this.element.classList.add('message-block');
        this.element.classList.add('message-block_' + this.props.className);
    }

    render() {
        return this.compile(template, this.props);
    }
}
