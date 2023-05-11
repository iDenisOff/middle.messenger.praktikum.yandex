import { Block } from '@src/utils/Block';
import { BackButton } from '@src/components/BackButton';
import router from '@src/utils/Router';
import { withStore } from '@src/store/store';

import { Form } from './components/Form';

import template from './profileEdit.hbs';
import './profileEdit.pcss';

export class ProfileEdit extends Block {
    constructor() {
        super('main', {});
    }

    init() {
        this.element.classList.add('profile-edit');
        this.children.back = new BackButton({
            events: {
                click: () => router.go('/profile')
            }
        });
        this.children.form = new Form();
    }

    render() {
        return this.compile(template, this.props);
    }
}

const withUser = withStore((state) => ({ ...state.user }));

export const ProfileEditPage = withUser(ProfileEdit);
