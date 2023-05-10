import { SignIn } from '@src/pages/signIn';
import { SignUp } from '@src/pages/signUp';
import { Chats } from '@src/pages/chats';
import { ProfilePage } from '@src/pages/profile';
import { ProfileEditPage } from '@src/pages/profileEdit';
import { PasswdEditPage } from '@src/pages/passwdEdit';
import { UIError } from '@src/pages/error';
import authController from '@src/controllers/AuthController';
import Router from '@src/utils/Router';
import { Routes } from '@src/constants';

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
