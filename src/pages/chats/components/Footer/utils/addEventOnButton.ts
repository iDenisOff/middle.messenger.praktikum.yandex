import { ButtonWithImg } from '../components/ButtonWithImg';
import MsgController from '@src/controllers/MsgController';
import { store } from '@src/store/store';

export const addEventOnButton = (buttonSend: ButtonWithImg, messageInput: HTMLInputElement): void => {
    buttonSend.setProps({
        events: {
            click: () => {
                let values: Record<string, string> = {};

                if (messageInput.value.length !== 0) {
                    values.message = messageInput.value;
                    messageInput.value = '';

                    MsgController.sendMessage(store.getState().chats.activeChat!.id, values.message);
                }
            }
        }
    });
};
