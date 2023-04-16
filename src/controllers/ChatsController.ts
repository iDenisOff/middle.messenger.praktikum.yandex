import chatsAPI, { Chat } from '@src/api/ChatsAPI';
import { store } from '@src/store/store';
import {
    GetChatsRequest,
    CreateChatRequest,
    ModifyChatUsersRequest,
    DeleteChatRequest
} from '@src/api/ChatsAPI';

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
                store.set('chats.data', chats);
            })
            .catch(() => console.log)
            .finally(() => {
                store.set('chats.isLoading', false);
            });
    }
}

export default new ChatsController();
