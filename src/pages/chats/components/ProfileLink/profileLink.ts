import Handlebars from 'handlebars';

import profileLink from 'bundle-text:./profileLink.hbs';
import go from '@static/go.svg';

import './profileLink.pcss';

interface ProfileLinkProps {
    href: string;
    label: string;
}

export const ProfileLink = ({ href, label }: ProfileLinkProps) =>
    Handlebars.compile(profileLink)({ href, label, go });
