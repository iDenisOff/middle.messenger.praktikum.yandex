import { Block } from '@src/utils/Block';
import { validateValue } from '@src/utils/validateValues';
import { ValueTypes } from '@src/constants';

export function sendForm(children: Record<string, Block<any>>, errorClass: string) {
    let data: Record<string, string> = {};
    let isValidData = true;

    Object.entries(children).forEach(([name, el]) => {
        if (name === 'signUp' || name === 'signIn' || name === 'link' || name === 'save' || name === 'password_retry') {
            return;
        }

        const { value } = (el.children.input.element as HTMLInputElement);
        const isValidValue = validateValue(ValueTypes[name], value);

        (el.element.getElementsByClassName(errorClass)[0] as HTMLDivElement).innerText =
            isValidValue ? '' : 'Некорректное значение';

        if (isValidValue) {
            data[name] = value;
        } else {
            isValidData = false;
        }
    });

    return !isValidData ? false : data;
}
