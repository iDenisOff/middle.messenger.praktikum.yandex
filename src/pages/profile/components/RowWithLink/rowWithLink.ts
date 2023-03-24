import Handlebars from 'handlebars';

import rowWithLink from 'bundle-text:./rowWithLink.hbs';
import './rowWithLink.pcss';

interface RowWithLinkProps {
    link: string;
}

export const RowWithLink = ({ link }: RowWithLinkProps) =>
    Handlebars.compile(rowWithLink)({ link });
