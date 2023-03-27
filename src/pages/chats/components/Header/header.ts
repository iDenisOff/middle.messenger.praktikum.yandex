import Handlebars from 'handlebars';

import header from 'bundle-text:./header.hbs';
import menu from '@static/menu.svg';

import './header.pcss';

interface HeaderProps {
    avatar?: string;
    name: string;
}

export const Header = ({ avatar, name }: HeaderProps) =>
    Handlebars.compile(header)({ avatar, name, menu });
