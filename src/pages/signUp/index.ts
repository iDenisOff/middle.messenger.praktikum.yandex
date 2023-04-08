import { Block } from '@src/utils/Block';

import { Form } from './components/Form';

import template from 'bundle-text:./signUp.hbs';
import './signUp.pcss';

export class SignUp extends Block {
    constructor() {
        super('main', {});
    }

    init() {
        this.element.classList.add('sign-up');

        this.children.form = new Form();
    }

    render() {
        return this.compile(template, this.props);
    }
}
