import { validateValue } from '@src/utils/validateValues';
import { TypesChecked } from '@src/constants';

const eventHandler = (event: Event): void => {
    const input = (event.target as HTMLInputElement);
    const isValid = validateValue(TypesChecked.MESSAGE, input.value);

    if (isValid) {
        input.classList.remove('footer_message-error');
    } else {
        input.classList.add('footer_message-error');
    }
};

export const addEventOnInput = (messageInput: HTMLInputElement): void => {
    messageInput.addEventListener('focus', eventHandler);
    messageInput.addEventListener('blur', eventHandler);
};
