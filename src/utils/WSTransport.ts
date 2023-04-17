import { URLs } from '@src/constants';

import { EventBus } from './EventBus';

export enum WSTransportEvents {
    Connected = 'Connected',
    Message = 'Message',
    Error = 'Error',
    Close = 'Close'
}

export default class WSTransport extends EventBus {
    static API_URL = URLs.WS;

    protected url: string;

    private socket: WebSocket | null = null;

    constructor(endpoint: string) {
        super();
        this.url = `${WSTransport.API_URL}${endpoint}`;
    }

    public send(data: any) {
        if (!this.socket) {
            throw new Error('Нет подключения');
        }

        this.socket.send(JSON.stringify(data));
    }

    public connect(): Promise<void> {
        this.socket = new WebSocket(this.url);

        this.subscribe(this.socket);

        return new Promise((resolve) => {
            this.on(WSTransportEvents.Connected, () => {
                resolve();
            });
        });
    }

    public close() {
        this.socket?.close();
    }

    private subscribe(socket: WebSocket) {
        socket.addEventListener('open', () => {
            this.emit(WSTransportEvents.Connected);
        });

        socket.addEventListener('close', () => {
            this.emit(WSTransportEvents.Close);
        });

        socket.addEventListener('message', (message) => {
            this.emit(WSTransportEvents.Message, JSON.parse(message.data));
        });

        socket.addEventListener('error', (e) => {
            this.emit(WSTransportEvents.Error, e);
        });
    }
}
