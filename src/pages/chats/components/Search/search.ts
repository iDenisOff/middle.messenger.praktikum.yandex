import Handlebars from 'handlebars';

import search from 'bundle-text:./search.hbs';

import './search.pcss';

interface SearchProps {
    value: string;
}

export const Search = ({ value }: SearchProps) =>
    Handlebars.compile(search)({ value });
