import { Block } from '@src/utils/Block';

import template from 'bundle-text:./tab.hbs';
import './tab.pcss';

interface TabProps {
    name: string;
    text?: string;
    time?: string;
    count?: number;
}

export class Tab extends Block<TabProps> {
    constructor(props: TabProps) {
        super('div', props);
    }

    init() {
        this.element.classList.add('tab');
    }

    render() {
        return this.compile(template, this.props);
    }
}
