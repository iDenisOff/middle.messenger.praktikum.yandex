import { Block } from '@src/utils/Block';

import template from 'bundle-text:./link.hbs';
import './link.pcss';

interface LinkProps {
    href: string;
    text: string;
}

export class Link extends Block<LinkProps> {
    constructor(props: LinkProps) {
        super('a', props);
    }

    init() {
        this.element.classList.add('link');
        (this.element as HTMLLinkElement).href = this.props.href;
    }

    render() {
        return this.compile(template, this.props);
    }
}
