import { TypesChecked } from '@src/constants';

export const validateValue = (type: TypesChecked, value: string): boolean => {
    switch (type) {
        case TypesChecked.LOGIN: {
            return /(?=^[\w-]{3,20}$)(?=.*[A-Za-z]).*/.test(value);
        }
        case TypesChecked.PASSWORD: {
            return /(?=^.{8,40}$)(?=.*\d)(?=.*[A-Z]).*/.test(value);
        }
        case TypesChecked.NAME: {
            return /^[A-ZА-Я][а-яa-z-]+$/.test(value);
        }
        case TypesChecked.MAIL: {
            return /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/.test(value);
        }
        case TypesChecked.TELEPHONE: {
            return /(?=^.{10,15}$)(?=\+?[0-9]+$).*/.test(value);
        }
        case TypesChecked.MESSAGE:
        default: {
            return value.length !== 0;
        }
    }
};
