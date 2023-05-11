import { Block } from '@src/utils/Block';

import template from './overlay.hbs';
import './overlay.pcss';

interface OverlayProps {
    className?: string;
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

        if (this.props.className) {
            this.element.classList.add(this.props.className);
        }
    }

    render() {
        return this.compile(template, this.props);
    }
}
