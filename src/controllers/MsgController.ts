import WSTransport, { WSTransportEvents } from '@src/utils/WSTransport';
import { store } from '@src/store/store';

export interface Message {
    'chat_id': number,
    'time': string,
    'type': string,
    'user_id': number,
    'content': string,
    'file'?: {
        'id': number,
        'user_id': number,
        'path': string,
        'filename': string,
        'content_type': string,
        'content_size': number,
        'upload_date': string,
    }
}

class MsgController {
    private sockets: Map<number, WSTransport> = new Map();

    async connect(id: number, token: string) {
        if (this.sockets.has(id)) {
            return;
        }

        const userId = store.getState().user.data?.id;

        const wsTransport = new WSTransport(`${userId}/${id}/${token}`);

        this.sockets.set(id, wsTransport);

        await wsTransport.connect();

        this.subscribe(wsTransport, id);
        this.fetchOldMessages(id);
    }

    sendMessage(id: number, message: string) {
        const socket = this.sockets.get(id);

        if (!socket) {
            throw new Error(`Chat ${id} is not connected`);
        }

        socket.send({
            type: 'message',
            content: message
        });
    }

    fetchOldMessages(id: number) {
        const socket = this.sockets.get(id);

        if (!socket) {
            throw new Error(`Chat ${id} is not connected`);
        }

        socket.send({ type: 'get old', content: '0' });
    }

    closeAll() {
        Array.from(this.sockets.values()).forEach(socket => socket.close());
    }

    private onMessage(id: number, messages: Message | Message[]) {
        let messagesToAdd: Message[] = [];

        if (Array.isArray(messages)) {
            messagesToAdd = messages.reverse();
        } else {
            messagesToAdd.push(messages);
        }

        const currentMessages = (store.getState().messages || {})[id] || [];

        messagesToAdd = [...currentMessages, ...messagesToAdd];
        messagesToAdd = messagesToAdd.filter(message => message.type === 'message');
        store.set(`messages.${id}`, messagesToAdd);
    }

    private onClose(id: number) {
        this.sockets.delete(id);
    }

    private subscribe(transport: WSTransport, id: number) {
        transport.on(WSTransportEvents.Message, (message: Message | Message[]) => this.onMessage(id, message));
        transport.on(WSTransportEvents.Close, () => this.onClose(id));
    }
}

export default new MsgController();
