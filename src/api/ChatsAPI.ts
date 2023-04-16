import BaseAPI from './BaseAPI';

export interface Chat {
    'id': number,
    'title': string,
    'avatar': null | string,
    'unread_count': number,
    'last_message': null | {
        'user': {
            'first_name': string,
            'second_name': string,
            'avatar': string,
            'email': string,
            'login': string,
            'phone': string
        },
        'time': string,
        'content': string
    }
}

export interface GetChatsRequest {
    'offset'?: number,
    'limit'?: number,
    'title'?: string
}

export interface CreateChatRequest {
    'title': string
}

export interface ModifyChatUsersRequest {
    'users': number[],
    'chatId': number
}

export interface DeleteChatRequest {
    'chatId': number
}

class ChatsAPI extends BaseAPI {
    constructor() {
        super('/chats');
    }

    public getChats(data: GetChatsRequest) {
        return this.http.get<Chat[]>('', { data });
    }

    public createChat(data: CreateChatRequest): Promise<any> {
        return this.http.post('', { data });
    }

    public addUsersToChat(data: ModifyChatUsersRequest): Promise<any> {
        return this.http.put('/users', { data });
    }

    public deleteUsersFromChat(data: ModifyChatUsersRequest): Promise<any> {
        return this.http.delete('/users', { data });
    }

    public deleteChat(data: DeleteChatRequest) {
        return this.http.delete('', { data });
    }

    create = undefined;

    update = undefined;

    delete = undefined;

    read = undefined;
}

export default new ChatsAPI();
