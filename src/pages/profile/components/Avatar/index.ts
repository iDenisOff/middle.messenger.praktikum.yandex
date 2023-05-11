import { Block } from '@src/utils/Block';
import { URLs } from '@src/constants';
import defAvatar from '@static/avatar.svg';

import template from './avatar.hbs';
import './avatar.pcss';

interface AvatarProps {
    avatar?: string;
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
        const avatar =
            this.props.avatar ? `${URLs.RESOURCES}${this.props.avatar}` : defAvatar;

        return this.compile(template, { ...this.props, avatar });
    }
}
