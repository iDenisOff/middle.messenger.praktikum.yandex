import Handlebars from 'handlebars';

import row from 'bundle-text:./row.hbs';
import './row.pcss';

interface RowProps {
    title: string;
    value: string;
}

export const Row = ({ title, value }: RowProps) =>
    Handlebars.compile(row)({ title, value });
