import { Block } from '@src/utils/Block';

import template from 'bundle-text:./overlay.hbs';
import './overlay.pcss';

interface OverlayProps {
    events?: {
        click: () => {}
    }
}

export class Overlay extends Block<OverlayProps> {
    constructor(props: OverlayProps) {
        super('div', props);
    }

    init() {
        this.element.classList.add('overlay');
    }

    render() {
        return this.compile(template, this.props);
    }
}
