import Handlebars from 'handlebars';

import footer from 'bundle-text:./footer.hbs';
import pin from '@static/pin.svg';
import send from '@static/send.svg';

import './footer.pcss';

interface FooterProps {
    message: string;
}

export const Footer = ({ message }: FooterProps) =>
    Handlebars.compile(footer)({ pin, message, send });
