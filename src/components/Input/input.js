import Handlebars from 'handlebars';

import input from 'bundle-text:./input.hbs';
import './input.pcss';

export const Input = ({ label, type = 'text', name, value, error = '' }) =>
    Handlebars.compile(input)({ label, type, name, value, error });
