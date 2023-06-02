import sinon, { SinonFakeXMLHttpRequest, SinonFakeXMLHttpRequestStatic } from 'sinon';
import HTTPTransport, { METHOD } from './HTTPTransport';
import { expect } from 'chai';

describe('HTTPTransport', () => {
    let xhr: SinonFakeXMLHttpRequestStatic;
    let instance: HTTPTransport;
    const requests: SinonFakeXMLHttpRequest[] = [];

    beforeEach(() => {
        xhr = sinon.useFakeXMLHttpRequest();

        // @ts-ignore
        global.XMLHttpRequest = xhr;

        xhr.onCreate = ((request: SinonFakeXMLHttpRequest) => {
            requests.push(request);
        });

        instance = new HTTPTransport('/auth');
    });

    afterEach(() => {
        requests.length = 0;
    });

    it('get() send GET request', () => {
        instance.get('/user');
        const [request] = requests;
        expect(request.method).to.eq(METHOD.GET);
    });

    it('put() send PUT request', () => {
        instance.put('/user');
        const [request] = requests;
        expect(request.method).to.eq(METHOD.PUT);
    });

    it('post() send POST request', () => {
        instance.post('/user');
        const [request] = requests;
        expect(request.method).to.eq(METHOD.POST);
    });

    it('delete() send DELETE request', () => {
        instance.delete('/user');
        const [request] = requests;
        expect(request.method).to.eq(METHOD.DELETE);
    });
});
