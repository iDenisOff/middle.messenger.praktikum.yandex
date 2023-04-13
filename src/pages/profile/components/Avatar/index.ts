import { Block } from '@src/utils/Block';
import avatar from '@static/avatar.svg';

import template from 'bundle-text:./avatar.hbs';
import './avatar.pcss';

interface AvatarProps {
    events?: {
        click: () => void;
    }
}

export class Avatar extends Block<AvatarProps> {
    constructor(props: AvatarProps) {
        super('div', props);
    }

    init() {
        this.element.classList.add('avatar');
    }

    render() {
        return this.compile(template, { ...this.props, avatar });
    }
}
