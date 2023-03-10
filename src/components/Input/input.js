import Handlebars from 'handlebars';

import input from 'bundle-text:./input.hbs';
import './input.pcss';

export const Input = ({ label, type, value, error }) => Handlebars.compile(input)({ label, type, value, error });
