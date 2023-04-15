import { EventBus } from '@src/utils/EventBus';
import { User } from '@src/api/AuthAPI';
import { Block } from '@src/utils/Block';
import { Chat } from '@src/api/ChatsAPI';
import set from '@src/utils/helpers';

export enum StoreEvents {
    Updated = 'Updated'
}

type State = {
    user: {
        data: null | User;
        isLoading: boolean;
        hasError: boolean;
    }
    chats: {
        data: null | Chat[]
        isLoading: boolean;
        hasError: boolean;
    }
};

const initialState: State = {
    user: {
        data: null,
        isLoading: true,
        hasError: false
    },
    chats: {
        data: null,
        isLoading: true,
        hasError: false
    }
};

class Store extends EventBus {
    private state = initialState;

    public set(keypath: string, value: unknown) {
        set(this.state, keypath, value);

        this.emit(StoreEvents.Updated, this.state);
    }

    public getState() {
        return this.state;
    }
}

const store = new Store();

export const withStore = (mapStateToProps: (state: State) => any) => {
    //TODO: Сделать проверку isEqual
    return (Component: typeof Block) => {
        return class WithStore extends Component {
            constructor(props: any) {
                const mappedState = mapStateToProps(store.getState());

                super('div', { ...props, ...mappedState });

                store.on(StoreEvents.Updated, (newState) => {
                    const newMappedState = mapStateToProps(newState);
                    this.setProps(newMappedState);
                });
            }
        };
    };
};

export { store };
