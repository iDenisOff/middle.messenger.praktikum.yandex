import userAPI from '@src/api/UserAPI';
import { UserData, UserPassword } from '@src/api/UserAPI';
import router from '@src/utils/Router';

class UserController {
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
