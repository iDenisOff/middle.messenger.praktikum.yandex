import BaseAPI from './BaseAPI';

export interface SignupData {
    'email': string,
    'login': string,
    'first_name': string,
    'second_name': string,
    'phone': string,
    'password': string
}

export interface SigninData {
    'login': string,
    'password': string
}

export interface User {
    'id': number,
    'first_name': string
    'second_name': string
    'display_name': string
    'login': string
    'email': string
    'phone': string
    'avatar': string
}

class AuthAPI extends BaseAPI {
    constructor() {
        super('/auth');
    }

    public signup(data: SignupData): Promise<any> {
        return this.http.post('/signup', { data });
    }

    public signin(data: SigninData): Promise<any> {
        return this.http.post('/signin', { data });
    }

    public logout() {
        return this.http.post('/logout');
    }

    public getUser() {
        return this.http.get<User>('/user');
    }

    create = undefined;

    update = undefined;

    delete = undefined;

    read = undefined;
}

export default new AuthAPI();
