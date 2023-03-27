import Handlebars from 'handlebars';

import input from 'bundle-text:./input.hbs';

import './input.pcss';

interface InputProps {
    label: string;
    type?: 'text' | 'password' | 'email' | 'tel';
    name: string;
    value: string;
    error?: string;
}

export const Input = ({ label, type = 'text', name, value, error }: InputProps) =>
    Handlebars.compile(input)({ label, type, name, value, error });
