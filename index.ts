import { SignIn } from '@src/pages/signIn';
import { SignUp } from '@src/pages/signUp';
import { Chats } from '@src/pages/chats';
import { Profile } from '@src/pages/profile';
import { ProfileEdit } from '@src/pages/profileEdit';
import { PasswdEdit } from '@src/pages/passwdEdit';
import { UIError } from '@src/pages/error';

window.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname;
    const root = document.querySelector('#root')!;

    const page = (function () {
        switch (path) {
            case '/':
            case '/signIn': {
                return new SignIn();
            }
            case '/signUp': {
                return new SignUp();
            }
            case '/chats': {
                return new Chats();
            }
            case '/profile': {
                return new Profile();
            }
            case '/profileEdit': {
                return new ProfileEdit();
            }
            case '/passwdEdit': {
                return new PasswdEdit();
            }
            default: {
                return new UIError({ code: 404, text: 'Не туда попали' });
            }
        }
    }());

    root.appendChild(page.getContent());
    page.dispatchComponentDidMount();
});
