import { Block } from '@src/utils/Block';
import { addEventOnInput } from './utils/addEventOnInput';
import { addEventOnButton } from './utils/addEventOnButton';
import { MessageInput } from './components/MessageInput';
import { ButtonWithImg } from './components/ButtonWithImg';
import pin from '@static/pin.svg';

import template from 'bundle-text:./footer.hbs';
import './footer.pcss';

interface FooterProps {
    events?: {
        submit: (event: Event) => void;
    };
}

export class Footer extends Block {
    constructor(props: FooterProps) {
        super('form', { props });
    }

    componentDidMount(): void {
        this.setProps({
            events: {
                submit: (event: Event) => event.preventDefault()
            }
        });

        addEventOnInput(this.children.message as MessageInput);
        addEventOnButton(
            this.children.button as ButtonWithImg,
            this.children.message.element as HTMLInputElement
        );
    }

    init() {
        this.element.classList.add('footer');

        this.children.button = new ButtonWithImg({});
        this.children.message = new MessageInput({});
    }

    render() {
        return this.compile(template, { ...this.props, pin });
    }
}
