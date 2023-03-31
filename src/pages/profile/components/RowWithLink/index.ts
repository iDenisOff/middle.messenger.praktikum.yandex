import { Block } from '@src/utils/Block';
import { Link } from '@src/components/Link';

import template from 'bundle-text:./rowWithLink.hbs';
import './rowWithLink.pcss';

interface RowWithLinkProps {
    link: Link;
}

export class RowWithLink extends Block<RowWithLinkProps> {
    constructor(props: RowWithLinkProps) {
        super('div', props);
    }

    init() {
        this.element.classList.add('row-with-link');
    }

    render() {
        return this.compile(template, this.props);
    }
}
