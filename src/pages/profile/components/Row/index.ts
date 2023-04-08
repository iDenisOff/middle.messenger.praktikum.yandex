import { Block } from '@src/utils/Block';

import template from 'bundle-text:./row.hbs';
import './row.pcss';

interface RowProps {
    title: string;
    value: string;
}

export class Row extends Block<RowProps> {
    constructor(props: RowProps) {
        super('div', props);
    }

    init() {
        this.element.classList.add('row');
    }

    render() {
        return this.compile(template, this.props);
    }
}
