export const addEventOnButton = (buttonSend: HTMLButtonElement, messageInput: HTMLInputElement): void => {
    buttonSend.addEventListener('click', () => {
        let values: Record<string, string> = {};

        messageInput.dispatchEvent(new Event('blur'));

        if (messageInput.value.length !== 0) {
            values.message = messageInput.value;
        }

        console.log(values);
    });
};
