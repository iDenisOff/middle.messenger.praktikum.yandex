import { Block } from '@src/utils/Block';

import template from 'bundle-text:./messageInput.hbs';
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
        (this.element as HTMLInputElement).placeholder = 'Сообщение';
        (this.element as HTMLInputElement).value = this.props.value ?? '';
    }

    render() {
        return this.compile(template, this.props);
    }
}
