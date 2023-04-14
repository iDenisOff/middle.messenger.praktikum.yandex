import chatsAPI from '@src/api/ChatsAPI';
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

    createChat(data: CreateChatRequest) {
        chatsAPI.createChat(data)
            .then(() => console.log('POST: /chats'))
            .catch(console.log);
    }

    addUsersToChat(data: ModifyChatUsersRequest) {
        chatsAPI.addUsersToChat(data)
            .then(() => console.log('PUT: /chats/users'))
            .catch(console.log);
    }

    deleteUsersFromChat(data: ModifyChatUsersRequest) {
        chatsAPI.deleteUsersFromChat(data)
            .then(() => console.log('DELETE: /chats/users'))
            .catch(console.log);
    }

    deleteChat(data: DeleteChatRequest) {
        chatsAPI.deleteChat(data)
            .then(() => console.log('DELETE: /chats'))
            .catch(console.log);
    }
}

export default new ChatsController();
