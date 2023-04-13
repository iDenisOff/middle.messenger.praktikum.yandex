import { Block } from '@src/utils/Block';

export function sendForm<T extends Record<string, any>>(children:  Record<string, Block<any>>): T {
    let values: T = {};

    Object.entries(children).forEach(([name, el]) => {
        if (name === 'signUp' || name === 'signIn' || name === 'link' || name === 'save') {
            return;
        }

        const input = el.children.input.element as HTMLInputElement;
        input.dispatchEvent(new Event('blur'));

        if (input.value.length !== 0) {
            values[name] = input.value;
        }
    });

    return values;
}
