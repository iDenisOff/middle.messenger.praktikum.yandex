import { Block } from '@src/utils/Block';
import { TypesChecked } from '@src/constants';
import { validateValue } from '@src/utils/validateValues';

import template from 'bundle-text:./input.hbs';
import './input.pcss';

interface InputProps {
    label: string;
    type?: 'text' | 'password' | 'email' | 'tel';
    name: string;
    valueType?: TypesChecked;
    value?: string;
    error?: string;
}

export class Input extends Block<InputProps> {
    constructor(props: InputProps) {
        super('div', { ...props, type: props.type ?? 'text' });
    }

    componentDidMount(): void {
        const input = this.element.getElementsByClassName('input__value')[0];

        const eventHandler = (event: Event): void => {
            const value = (event.target as HTMLInputElement).value;
            const isValid = validateValue(this.props.valueType!, value);

            (this.element.getElementsByClassName('input__error')[0] as HTMLDivElement).innerText =
                isValid ? '' : 'Некорректное значение';
        };

        if (this.props.valueType) {
            input.addEventListener('focus', eventHandler);
            input.addEventListener('blur', eventHandler);
        }
    }

    init() {
        this.element.classList.add('input');
    }

    render() {
        return this.compile(template, this.props);
    }
}
