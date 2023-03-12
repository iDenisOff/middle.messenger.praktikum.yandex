import Handlebars from 'handlebars';

import rowWithLink from 'bundle-text:./rowWithLink.hbs';
import './rowWithLink.pcss';

export const RowWithLink = ({ link }) =>
    Handlebars.compile(rowWithLink)({ link });
