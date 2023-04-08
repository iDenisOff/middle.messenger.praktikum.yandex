import { Block } from '@src/utils/Block';

import { Form } from './components/Form';

import template from 'bundle-text:./signIn.hbs';
import './signIn.pcss';

export class SignIn extends Block {
    constructor() {
        super('main', {});
    }

    init() {
        this.element.classList.add('sign-in');

        this.children.form = new Form();
    }

    render() {
        return this.compile(template, this.props);
    }
}
