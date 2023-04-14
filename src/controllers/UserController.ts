import userAPI from '@src/api/UserAPI';
import router from '@src/utils/Router';
import { UserData, UserPassword } from '@src/api/UserAPI';

class UserController {
    changeUserAvatar(data: FormData) {
        userAPI.changeUserAvatar(data)
            .then(() => {
                router.go('/messenger');
            })
            .catch(console.log);
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
}

export default new UserController();
