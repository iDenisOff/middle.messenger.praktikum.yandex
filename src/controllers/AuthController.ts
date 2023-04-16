import authApi from '@src/api/AuthAPI';
import { SignupData, SigninData, User } from '@src/api/AuthAPI';
import { store } from '@src/store/store';
import router from '@src/utils/Router';

class AuthController {
    async signUp(data: SignupData) {
        return authApi.signup(data);
        /*
        authApi.signup(data)
            .then(() => {
                router.go('/messenger');
            })
            .catch(console.log);
         */
    }

    signIn(data: SigninData) {
        authApi.signin(data)
            .then(() => {
                router.go('/messenger');
            })
            .catch(console.log);
    }

    logout() {
        authApi.logout()
            .then(() => {
                store.set('user', null);
                router.go('/');
            })
            .catch(console.log);
    }

    async fetchUser() {
        store.set('user.isLoading', true);

        await authApi.getUser()
            .then((user: User) => {
                store.set('user.data', user);
            })
            .catch(() => {
                router.go('/');
            })
            .finally(() => {
                store.set('user.isLoading', false);
            });
    }
}

export default new AuthController();
