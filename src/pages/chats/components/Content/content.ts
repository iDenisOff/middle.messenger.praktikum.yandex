import Handlebars from 'handlebars';

import content from 'bundle-text:./content.hbs';

export const Content = () => Handlebars.compile(content)({});
