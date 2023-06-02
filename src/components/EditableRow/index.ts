import { Block } from '@src/utils/Block';
import { validateValue } from '@src/utils/validateValues';
import { TypesChecked } from '@src/constants';
import { Input } from '@src/components/Input';

import template from './editableRow.hbs';
import './editableRow.pcss';

interface EditableRowProps {
    title: string;
    type?: 'text' | 'password';
    name: string;
    valueType?: TypesChecked;
    value?: string;
}

export class EditableRow extends Block<EditableRowProps> {
    constructor(props: EditableRowProps) {
        super('div', { ...props, type: props.type ?? 'text' });
    }

    componentDidMount(): void {
        const eventHandler = (event: Event): void => {
            const value = (event.target as HTMLInputElement).value;
            const isValid = validateValue(this.props.valueType!, value);

            (this.element.getElementsByClassName('editable-row__error')[0] as HTMLDivElement).innerText =
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
        this.element.classList.add('editable-row');

        this.children.input = new Input({
            type: this.props.type,
            name: this.props.name,
            value: this.props.value
        });
    }

    render() {
        if (this.props.value) {
            this.children.input.setProps({
                value: this.props.value
            });
        }

        return this.compile(template, this.props);
    }
}
