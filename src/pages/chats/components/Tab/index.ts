import { Block } from '@src/utils/Block';

import template from './tab.hbs';
import './tab.pcss';

interface TabProps {
    id: number;
    activeChatId: null | number;
    name: string;
    text?: string;
    time?: string;
    count?: number;
    events?: {
        click: (e: any) => void;
    }
}

export class Tab extends Block<TabProps> {
    constructor(props: TabProps) {
        super('div', props);
    }

    init() {
        this.element.classList.add('tab');
        this.element.id = this.props.id.toString();
    }

    render() {
        if (this.props.activeChatId === this.props.id) {
            this.element.classList.add('tab-active');
        } else {
            this.element.classList.remove('tab-active');
        }

        return this.compile(template, this.props);
    }
}
