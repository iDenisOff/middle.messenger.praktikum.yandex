import BaseAPI from './BaseAPI';

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

    create = undefined;

    update = undefined;

    delete = undefined;

    read = undefined;
}

export default new UserAPI();
