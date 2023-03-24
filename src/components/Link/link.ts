import Handlebars from 'handlebars';

import link from 'bundle-text:./link.hbs';
import './link.pcss';

interface LinkProps {
    href: string;
    text: string;
}

export const Link = ({ href, text }: LinkProps) =>
    Handlebars.compile(link)({ href, text });
