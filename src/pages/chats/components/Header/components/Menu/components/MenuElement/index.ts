import { Block } from '@src/utils/Block';

import template from 'bundle-text:./menuElement.hbs';
import './menuElement.pcss';

interface ElementProps {
    icon: typeof import('*.svg'),
    title: string,
    events?: {
        click: () => void
    }
}

export class MenuElement extends Block<ElementProps> {
    constructor(props: ElementProps) {
        super('dev', props);
    }

    init() {
        this.element.classList.add('menu-element');
    }

    render() {
        return this.compile(template, this.props);
    }
}
