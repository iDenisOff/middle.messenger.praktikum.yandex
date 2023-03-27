import Handlebars from 'handlebars';

import tab from 'bundle-text:./tab.hbs';

import './tab.pcss';

interface TabProps {
    name: string;
    text?: string;
    time?: string;
    count?: number;
}

export const Tab = ({ name, text, time, count }: TabProps) =>
    Handlebars.compile(tab)({ name, text, time, count });
