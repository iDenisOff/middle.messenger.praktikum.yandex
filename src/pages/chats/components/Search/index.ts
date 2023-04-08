import { Block } from '@src/utils/Block';

import template from 'bundle-text:./search.hbs';
import './search.pcss';

interface SearchProps {
    value: string;
}

export class Search extends Block<SearchProps> {
    constructor(props: SearchProps) {
        super('input', props);
    }

    init() {
        this.element.classList.add('search');
        (this.element as HTMLInputElement).type = 'text';
        (this.element as HTMLInputElement).name = 'search';
        (this.element as HTMLInputElement).placeholder = 'Поиск';
        (this.element as HTMLInputElement).value = this.props.value;
    }

    render() {
        return this.compile(template, this.props);
    }
}
