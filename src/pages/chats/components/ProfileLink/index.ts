import { Block } from '@src/utils/Block';
import go from '@static/go.svg';

import template from 'bundle-text:./profileLink.hbs';
import './profileLink.pcss';

interface ProfileLinkProps {
    href: string;
    label: string;
}

export class ProfileLink extends Block<ProfileLinkProps> {
    constructor(props: ProfileLinkProps) {
        super('a', props);
    }

    init() {
        (this.element as HTMLLinkElement).href = this.props.href;
    }

    render() {
        return this.compile(template, { ...this.props, go });
    }
}
