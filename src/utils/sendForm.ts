import { Block } from '@src/utils/Block';
import { getInput } from '@src/components/Input/utils/getInput';
import { Input } from '@src/components/Input';

export const sendForm = (children:  Record<string, Block<any>>): void => {
    let values: Record<string, string> = {};

    Object.entries(children).forEach(([name, el]) => {
        if (name === 'signUp' || name === 'signIn' || name === 'link' || name === 'save') {
            return;
        }

        const input = getInput(el as Input);
        input.dispatchEvent(new Event('blur'));

        if (input.value.length !== 0) {
            values[name] = input.value;
        }
    });

    console.log(values);
};
