import Handlebars from 'handlebars';

import editableRow from 'bundle-text:./editableRow.hbs';
import './editableRow.pcss';

interface EditableRowProps {
    title: string;
    type?: 'text' | 'password';
    name: string;
    value: string;
}

export const EditableRow = ({ title, type = 'text', name, value }: EditableRowProps) =>
    Handlebars.compile(editableRow)({ title, type, name, value });
