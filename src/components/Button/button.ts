import Handlebars from 'handlebars';

import button from 'bundle-text:./button.hbs';
import './button.pcss';

interface ButtonProps {
    text: string;
}

export const Button = ({ text }: ButtonProps) =>
    Handlebars.compile(button)({ text });
