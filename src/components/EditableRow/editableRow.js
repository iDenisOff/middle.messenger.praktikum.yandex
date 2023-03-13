import Handlebars from 'handlebars';

import editableRow from 'bundle-text:./editableRow.hbs';
import './editableRow.pcss';

export const EditableRow = ({ title, type = 'text', name, value }) =>
    Handlebars.compile(editableRow)({ title, type, name, value });
