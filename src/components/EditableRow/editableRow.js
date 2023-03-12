import Handlebars from 'handlebars';

import editableRow from 'bundle-text:./editableRow.hbs';
import './editableRow.pcss';

export const EditableRow = ({ title, type = 'text', value }) =>
    Handlebars.compile(editableRow)({ title, type, value });
