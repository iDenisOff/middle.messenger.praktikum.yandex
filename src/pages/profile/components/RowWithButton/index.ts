import { Block } from '@src/utils/Block';
import { Button } from '@src/components/Button';

import template from './rowWithButton.hbs';
import './rowWithButton.pcss';

interface RowWithButtonProps {
    button: Button;
}

export class RowWithButton extends Block<RowWithButtonProps> {
    constructor(props: RowWithButtonProps) {
        super('div', props);
    }

    init() {
        this.element.classList.add('row-with-button');
    }

    render() {
        return this.compile(template, this.props);
    }
}
