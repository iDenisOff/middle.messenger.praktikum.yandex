import { Block } from '@src/utils/Block';
import { validateValue } from '@src/utils/validateValues';
import { TypesChecked } from '@src/constants';

import template from 'bundle-text:./editableRow.hbs';
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
        const input = this.element.getElementsByClassName('editable-row__value')[0];

        const eventHandler = (event: Event): void => {
            const value = (event.target as HTMLInputElement).value;
            const isValid = validateValue(this.props.valueType!, value);

            if (isValid) {
                (this.element.getElementsByClassName('editable-row__title')[0] as HTMLDivElement).classList.remove('editable-row__title-error');
            } else {
                (this.element.getElementsByClassName('editable-row__title')[0] as HTMLDivElement).classList.add('editable-row__title-error');
            }
        };

        if (this.props.valueType) {
            input.addEventListener('focus', eventHandler);
            input.addEventListener('blur', eventHandler);
        }
    }

    init() {
        this.element.classList.add('editable-row');
    }

    render() {
        return this.compile(template, this.props);
    }
}
