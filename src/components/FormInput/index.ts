import { Block } from '@src/utils/Block';
import { TypesChecked } from '@src/constants';
import { validateValue } from '@src/utils/validateValues';
import { Input } from '@src/components/Input';

import template from 'bundle-text:./formInput.hbs';
import './formInput.pcss';

interface FormInputProps {
    label: string;
    type?: 'text' | 'password' | 'email' | 'tel';
    name: string;
    valueType?: TypesChecked;
    value?: string;
    error?: string;
}

export class FormInput extends Block<FormInputProps> {
    constructor(props: FormInputProps) {
        super('div', props);
    }

    componentDidMount(): void {
        const eventHandler = (event: Event): void => {
            const value = (event.target as HTMLInputElement).value;
            const isValid = validateValue(this.props.valueType!, value);

            (this.element.getElementsByClassName('form-input__error')[0] as HTMLDivElement).innerText =
            isValid ? '' : 'Некорректное значение';
        };

        if (this.props.valueType) {
            this.children.input.setProps({
                events: {
                    focus: eventHandler,
                    blur: eventHandler
                }
            });
        }
    }

    init() {
        this.element.classList.add('form-input');

        this.children.input = new Input({
            type: this.props.type,
            name: this.props.name,
            value: this.props.value
        });
    }

    render() {
        return this.compile(template, this.props);
    }
}
