import { Block } from '@src/utils/Block';
import { withStore } from '@src/store/store';
import authController from '@src/controllers/AuthController';
import router from '@src/utils/Router';
import { Button } from '@src/components/Button';
import { BackButton } from '@src/components/BackButton';
import { Overlay } from '@src/components/Overlay';
import {
    EMAIL,
    USER_NAME,
    FIRST_NAME,
    SECOND_NAME,
    PHONE,
    DISPLAY_NAME,
    EXIT,
    EDIT_DATA,
    EDIT_PASSWD,
    UPLOAD_FILE,
    CHANGE
} from '@src/constants';
import userController from '@src/controllers/UserController';

import { Avatar } from './components/Avatar';
import { Row } from './components/Row';
import { RowWithButton } from './components/RowWithButton';
import { Modal } from './components/Modal';

import template from './profile.hbs';
import './profile.pcss';

class Profile extends Block {
    constructor() {
        super('main', {});
    }

    componentDidMount() {
        this.children.avatar.setProps({
            events: {
                click: () => {
                    this.children.modal.element.classList.add('active');
                    this.children.overlay.element.classList.add('active');
                }
            }
        });

        this.children.overlay.setProps({
            events: {
                click: () => {
                    this.children.modal.element.classList.remove('active');
                    this.children.overlay.element.classList.remove('active');

                    const error = this.element.getElementsByClassName('modal-form_error')[0];
                    (error as HTMLDivElement).innerText = '';
                }
            }
        });
    }

    init() {
        this.element.classList.add('profile');
        this.children.back = new BackButton({
            events: {
                click: () => router.go('/messenger')
            }
        });
        this.children.avatar = new Avatar({});
        this.children.email = new Row({ title: EMAIL });
        this.children.login = new Row({ title: USER_NAME });
        this.children.firstName = new Row({ title: FIRST_NAME });
        this.children.secondName = new Row({ title: SECOND_NAME });
        this.children.displayName = new Row({ title: DISPLAY_NAME });
        this.children.phone = new Row({ title: PHONE });
        this.children.editProfile = new RowWithButton({
            button: new Button({
                text: EDIT_DATA,
                className: 'transparent',
                events: {
                    click: () => router.go('/settings')
                }
            })
        });
        this.children.editPasswd = new RowWithButton({
            button: new Button({
                text: EDIT_PASSWD,
                className: 'transparent',
                events: {
                    click: () => router.go('/passwd-edit')
                }
            })
        });
        this.children.exit = new RowWithButton({
            button: new Button({
                text: EXIT,
                className: 'transparent',
                events: {
                    click: () => authController.logout()
                }
            })
        });
        this.children.modal = new Modal({
            title: UPLOAD_FILE,
            buttonText: CHANGE,
            onSubmit: () => {
                const input = this.children.modal.children.form.element.getElementsByClassName('file-input_input')[0];
                const files = (input as HTMLInputElement).files;

                if (files) {
                    const formData = new FormData();
                    formData.append('avatar', files[0]);

                    userController.changeUserAvatar(formData)
                        .then(() => {
                            this.children.overlay.element.dispatchEvent(new Event('click'));
                            authController.fetchUser();
                        })
                        .catch((err) => {
                            const errorEl = this.children.modal.element.getElementsByClassName('modal-form_error')[0];
                            (errorEl as HTMLDivElement).innerText = err.reason;
                        });
                }
            }
        });
        this.children.overlay = new Overlay({});
    }

    render() {
        if (this.props.isLoading === false) {
            const { data } = this.props;

            this.children.avatar.setProps({ avatar: data.avatar });
            this.children.email.setProps({ value: data.email });
            this.children.login.setProps({ value: data.login });
            this.children.firstName.setProps({ value: data.first_name });
            this.children.secondName.setProps({ value: data.second_name });
            this.children.displayName.setProps({ value: data.display_name });
            this.children.phone.setProps({ value: data.phone });
        }

        return this.compile(template, this.props);
    }
}

const withUser = withStore((state) => ({ ...state.user }));

export const ProfilePage = withUser(Profile);
