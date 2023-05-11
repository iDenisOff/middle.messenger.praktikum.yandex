import { Block } from '@src/utils/Block';
import { BackButton } from '@src/components/BackButton';
import router from '@src/utils/Router';
import { withStore } from '@src/store/store';

import { Form } from './components/Form';

import template from './passwdEdit.hbs';
import './PasswdEdit.pcss';

export class PasswdEdit extends Block {
    constructor() {
        super('main', {});
    }

    init() {
        this.element.classList.add('passwd-edit');
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

export const PasswdEditPage = withUser(PasswdEdit);
