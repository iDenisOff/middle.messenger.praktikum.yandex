import BaseAPI from './BaseAPI';
import { User } from '@src/api/AuthAPI';

export interface UserData {
    'email': string,
    'login': string,
    'first_name': string,
    'second_name': string,
    'display_name': string,
    'phone': string
}

export interface UserPassword {
    'oldPassword': string,
    'newPassword': string
}

export interface SearchUsersRequest {
    'login': string
}

class UserAPI extends BaseAPI {
    constructor() {
        super('/user');
    }

    public changeUserAvatar(data: FormData) {
        return this.http.put('/profile/avatar', { data });
    }

    public changeUserData(data: UserData) {
        return this.http.put('/profile', { data });
    }

    public changeUserPassword(data: UserPassword) {
        return this.http.put('/password', { data });
    }

    public searchUsers(data: SearchUsersRequest): Promise<User[]> {
        return this.http.post('/search', { data });
    }

    create = undefined;

    update = undefined;

    delete = undefined;

    read = undefined;
}

export default new UserAPI();
