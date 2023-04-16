import userAPI from '@src/api/UserAPI';
import { UserData, UserPassword, SearchUsersRequest } from '@src/api/UserAPI';
import { User } from '@src/api/AuthAPI';

class UserController {
    async changeUserAvatar(data: FormData) {
        return userAPI.changeUserAvatar(data);
    }

    async changeUserData(data: UserData) {
        return userAPI.changeUserData(data);
    }

    async changeUserPassword(data: UserPassword) {
        return userAPI.changeUserPassword(data);
    }

    async searchUsers(data: SearchUsersRequest): Promise<User[]> {
        return await userAPI.searchUsers(data);
    }
}

export default new UserController();
