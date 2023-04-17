import chatsAPI, {Chat, GetTokenRequest} from '@src/api/ChatsAPI';
import { store } from '@src/store/store';
import {
    GetChatsRequest,
    CreateChatRequest,
    ModifyChatUsersRequest,
    DeleteChatRequest
} from '@src/api/ChatsAPI';
import MsgController from "@src/controllers/MsgController";

class ChatsController {
    getChats(data: GetChatsRequest) {
        chatsAPI.getChats(data)
            .then(() => console.log('GET: /chats'))
            .catch(console.log);
    }

    async createChat(data: CreateChatRequest) {
        return chatsAPI.createChat(data);
    }

    async addUsersToChat(data: ModifyChatUsersRequest) {
        return chatsAPI.addUsersToChat(data);
    }

    deleteUsersFromChat(data: ModifyChatUsersRequest) {
        return chatsAPI.deleteUsersFromChat(data);
    }

    async deleteChat(data: DeleteChatRequest) {
        return chatsAPI.deleteChat(data);
    }

    async fetchChats() {
        store.set('chats.isLoading', true);

        await chatsAPI.getChats({})
            .then((chats: Chat[]) => {
                chats.map(async (chat) => {
                    const { token } = await this.getToken({ token: chat.id.toString() });

                    await MsgController.connect(chat.id, token);
                });

                store.set('chats.data', chats);
            })
            .catch(() => console.log)
            .finally(() => {
                store.set('chats.isLoading', false);
            });
    }

    async getToken(data: GetTokenRequest) {
        return await chatsAPI.getToken(data);
    }
}

export default new ChatsController();
