import Handlebars from 'handlebars';

import row from 'bundle-text:./row.hbs';
import './row.pcss';

export const Row = ({ title, value }) =>
    Handlebars.compile(row)({ title, value });
