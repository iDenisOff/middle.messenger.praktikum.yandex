export const LOG_IN = 'Вход';
export const REGISTRATION = 'Регистрация';
export const USER_NAME = 'Логин';
export const PASSWD = 'Пароль';
export const PASSWD_RETRY = 'Пароль (ещё раз)';
export const ENTER = 'Войти';
export const REGISTER = 'Зарегистрироваться';
export const EMAIL = 'Почта';
export const FIRST_NAME = 'Имя';
export const SECOND_NAME = 'Фамилия';
export const PHONE = 'Телефон';
export const GO_BACK = 'Назад к чатам';
export const SAVE = 'Сохранить';
export const DISPLAY_NAME = 'Имя в чате';
export const MY_PROFILE = 'Мой профиль';
export const EDIT_DATA = 'Изменить данные';
export const EDIT_PASSWD = 'Изменить пароль';
export const EXIT = 'Выйти';
export const UPLOAD_FILE = 'Загрузите файл';
export const CHANGE = 'Поменять';
export const ADD_CHAT = 'Добавить чат';
export const ADD_USER = 'Добавить пользователя';
export const DELETE_USER = 'Удалить пользователя';
export const DELETE_CHAT = 'Удалить чат';
export const DELETE = 'Удалить';
export const ADD = 'Добавить';
export const TITLE = 'Название';

export enum TypesChecked {
    LOGIN = 'login',
    PASSWORD = 'password',
    NAME = 'name',
    MAIL = 'email',
    TELEPHONE = 'telephone',
    MESSAGE = 'message'
}

export const URLs = {
    API: 'https://ya-praktikum.tech/api/v2',
    RESOURCES: 'https://ya-praktikum.tech/api/v2/resources'
};

export enum Routes {
    SIGN_IN = '/',
    SIGN_UP = '/sign-up',
    CHATS = '/messenger',
    PROFILE = '/profile',
    PROFILE_EDIT = '/settings',
    PASSWD_EDIT = '/passwd-edit',
    ERROR = '*'
}

export enum ValueTypes {
    email = TypesChecked.MAIL,
    login = TypesChecked.LOGIN,
    first_name = TypesChecked.NAME,
    second_name = TypesChecked.NAME,
    phone = TypesChecked.TELEPHONE,
    password = TypesChecked.PASSWORD
}
