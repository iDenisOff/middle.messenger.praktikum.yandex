import { Block } from '@src/utils/Block';
import back from '@static/back.svg';

import { Form } from './components/Form';

import template from 'bundle-text:./profileEdit.hbs';
import './profileEdit.pcss';

export class ProfileEdit extends Block {
    constructor() {
        super('main', {});

        this.props.back = back;
        this.props.goBack = '/profile';
    }

    init() {
        this.element.classList.add('profile-edit');

        this.children.form = new Form();
    }

    render() {
        return this.compile(template, this.props);
    }
}
