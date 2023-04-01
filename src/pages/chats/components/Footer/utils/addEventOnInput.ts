import { validateValue } from '@src/utils/validateValues';
import { TypesChecked } from '@src/constants';
import { MessageInput } from '../components/MessageInput';

const eventHandler = (event: Event): void => {
    const input = (event.target as HTMLInputElement);
    const isValid = validateValue(TypesChecked.MESSAGE, input.value);

    if (isValid) {
        input.classList.remove('message-input-error');
    } else {
        input.classList.add('message-input-error');
    }
};

export const addEventOnInput = (messageInput: MessageInput): void => {
    messageInput.setProps({
        events: {
            focus: event => eventHandler(event),
            blur: event => eventHandler(event)
        }
    });
};
