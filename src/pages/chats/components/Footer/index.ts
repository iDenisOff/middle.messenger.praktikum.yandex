import { Block } from '@src/utils/Block';
import { addEventOnInput } from './utils/addEventOnInput';
import { addEventOnButton } from './utils/addEventOnButton';
import pin from '@static/pin.svg';
import send from '@static/send.svg';

import template from 'bundle-text:./footer.hbs';
import './footer.pcss';

export class Footer extends Block {
    constructor() {
        super('form', {});
    }

    componentDidMount(): void {
        this.element.addEventListener('submit', event => {
            event.preventDefault();
        });

        const messageInput = this.element.getElementsByClassName('footer_message')[0] as HTMLInputElement;

        addEventOnInput(messageInput);

        const buttonSend = this.element.getElementsByTagName('button')[0] as HTMLButtonElement;

        addEventOnButton(buttonSend, messageInput);
    }

    init() {
        this.element.classList.add('footer');
    }

    render() {
        return this.compile(template, { ...this.props, pin, send });
    }
}
