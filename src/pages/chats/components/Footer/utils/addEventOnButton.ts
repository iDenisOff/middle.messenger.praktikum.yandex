import { ButtonWithImg } from '../components/ButtonWithImg';

export const addEventOnButton = (buttonSend: ButtonWithImg, messageInput: HTMLInputElement): void => {
    buttonSend.setProps({
        events: {
            click: () => {
                let values: Record<string, string> = {};

                messageInput.dispatchEvent(new Event('blur'));

                if (messageInput.value.length !== 0) {
                    values.message = messageInput.value;
                }

                console.log(values);
            }
        }
    });
};
