import { SignIn } from '@src/pages/signIn';
import { SignUp } from '@src/pages/signUp';
import { Chats } from '@src/pages/chats';
import { ProfilePage } from '@src/pages/profile';
import { ProfileEdit } from '@src/pages/profileEdit';
import { PasswdEdit } from '@src/pages/passwdEdit';
import { UIError } from '@src/pages/error';
import authController from '@src/controllers/AuthController';
import Router from '@src/utils/Router';

enum Routes {
    SIGN_IN = '/',
    SIGN_UP = '/sign-up',
    CHATS = '/messenger',
    PROFILE = '/profile',
    PROFILE_EDIT = '/settings',
    PASSWD_EDIT = '/passwd-edit',
    ERROR = '*'
}

Router
    .setUnprotectedPaths([Routes.SIGN_IN, Routes.SIGN_UP])
    .onRoute(authController.fetchUser)
    .use(Routes.SIGN_IN, SignIn)
    .use(Routes.SIGN_UP, SignUp)
    .use(Routes.CHATS, Chats)
    .use(Routes.PROFILE, ProfilePage)
    .use(Routes.PROFILE_EDIT, ProfileEdit)
    .use(Routes.PASSWD_EDIT, PasswdEdit)
    .use(Routes.ERROR, UIError)
    .start();
