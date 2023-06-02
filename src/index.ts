import { SignIn } from './pages/signIn';
import { SignUp } from './pages/signUp';
import { Chats } from './pages/chats';
import { ProfilePage } from './pages/profile';
import { ProfileEditPage } from './pages/profileEdit';
import { PasswdEditPage } from './pages/passwdEdit';
import { UIError } from './pages/error';
import authController from './controllers/AuthController';
import Router from './utils/Router';
import { Routes } from './constants';

Router
    .setUnprotectedPaths([Routes.SIGN_IN, Routes.SIGN_UP])
    .onRoute(authController.fetchUser)
    .use(Routes.SIGN_IN, SignIn)
    .use(Routes.SIGN_UP, SignUp)
    .use(Routes.CHATS, Chats)
    .use(Routes.PROFILE, ProfilePage)
    .use(Routes.PROFILE_EDIT, ProfileEditPage)
    .use(Routes.PASSWD_EDIT, PasswdEditPage)
    .use(Routes.ERROR, UIError)
    .start();
