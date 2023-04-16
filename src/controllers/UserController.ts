import userAPI from '@src/api/UserAPI';
import router from '@src/utils/Router';
import { UserData, UserPassword, SearchUsersRequest } from '@src/api/UserAPI';
import { User } from '@src/api/AuthAPI';

class UserController {
    async changeUserAvatar(data: FormData) {
        return userAPI.changeUserAvatar(data);
    }

    changeUserData(data: UserData) {
        userAPI.changeUserData(data)
            .then(() => {
                router.go('/profile');
            })
            .catch(console.log);
    }

    changeUserPassword(data: UserPassword) {
        userAPI.changeUserPassword(data)
            .then(() => {
                router.go('/profile');
            })
            .catch(console.log);
    }

    async searchUsers(data: SearchUsersRequest): Promise<User[]> {
        return await userAPI.searchUsers(data);
    }
}

export default new UserController();
