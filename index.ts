import { SignIn } from '@src/pages/signIn/signIn';
import { SignUp } from '@src/pages/signUp/signUp';
import { Chats } from '@src/pages/chats/chats';
import { Error as UIError } from '@src/pages/error/error';
import { Profile } from '@src/pages/profile/profile';
import { ProfileEdit } from '@src/pages/profileEdit/profileEdit';
import { PasswdEdit } from '@src/pages/passwdEdit/PasswdEdit';

window.addEventListener('load', () => {
    const page = window.location.pathname;
    const root = document.getElementById('root');

    if (root) {
        root.innerHTML = (function () {
            switch (page) {
                case '/':
                case '/signIn': {
                    return SignIn();
                }
                case '/signUp': {
                    return SignUp();
                }
                case '/chats': {
                    return Chats();
                }
                case '/profile': {
                    return Profile();
                }
                case '/profileEdit': {
                    return ProfileEdit();
                }
                case '/passwdEdit': {
                    return PasswdEdit();
                }
                default: {
                    return UIError({ code: 404, text: 'Не туда попали' });
                }
            }
        }());
    }
});
