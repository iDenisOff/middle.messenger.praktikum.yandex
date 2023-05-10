import { Block } from '@src/utils/Block';
import menu from '@static/menu.svg';
import { Overlay } from '@src/components/Overlay';

import { ButtonWithImg } from './components/ButtonWithImg';
import { Menu } from './components/Menu';

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

    componentDidMount() {
        this.children.menuButton.setProps({
            events: {
                click: () => {
                    this.children.menu.element.classList.add('active');
                    this.children.overlay.element.classList.add('active');
                }
            }
        });

        this.children.overlay.setProps({
            events: {
                click: () => {
                    this.children.menu.element.classList.remove('active');
                    this.children.overlay.element.classList.remove('active');
                }
            }
        });
    }

    init() {
        this.element.classList.add('header');

        this.children.menuButton = new ButtonWithImg({ icon: menu });
        this.children.menu = new Menu();
        this.children.overlay = new Overlay({ className: 'transparent' });
    }

    render() {
        return this.compile(template, this.props);
    }
}
