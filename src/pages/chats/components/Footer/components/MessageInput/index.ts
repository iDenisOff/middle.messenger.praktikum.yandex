import { Block } from '@src/utils/Block';
import { MSG } from '@src/constants';

import template from './messageInput.hbs';
import './messageInput.pcss';

interface MessageInputProps {
    value?: string;
    events?: {
        focus: (event: Event) => void;
        blur: (event: Event) => void;
    };
}

export class MessageInput extends Block<MessageInputProps> {
    constructor(props: MessageInputProps) {
        super('input', props);
    }

    init() {
        this.element.classList.add('message-input');
        (this.element as HTMLInputElement).type = 'text';
        (this.element as HTMLInputElement).name = 'message';
        (this.element as HTMLInputElement).placeholder = MSG;
        (this.element as HTMLInputElement).value = this.props.value ?? '';
    }

    render() {
        return this.compile(template, this.props);
    }
}
