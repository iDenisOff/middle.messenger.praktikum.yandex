import { Input } from '@src/components/Input';

export const getInput = (input: Input): HTMLInputElement => {
    return input.element.getElementsByTagName('input')[0];
};
