import Handlebars from 'handlebars';

import link from 'bundle-text:./link.hbs';
import './link.pcss';

export const Link = ({ href, text }) => Handlebars.compile(link)({ href, text });
