import { FormInput } from '@src/components/FormInput';

export const getInput = (input: FormInput): HTMLInputElement => {
    return input.element.getElementsByTagName('input')[0];
};
