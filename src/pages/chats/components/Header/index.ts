import { Block } from '@src/utils/Block';
import menu from '@static/menu.svg';

import template from 'bundle-text:./header.hbs';
import './header.pcss';

interface HeaderProps {
    avatar?: string;
    title?: string;
}

export class Header extends Block<HeaderProps> {
    constructor(props: HeaderProps) {
        super('div', props);
    }

    init() {
        this.element.classList.add('header');
    }

    render() {
        return this.compile(template, { ...this.props, menu });
    }
}
