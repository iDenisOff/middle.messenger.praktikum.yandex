import Router from './Router';
import { expect } from 'chai';
import sinon from 'sinon';

describe('Router', () => {
    global.window.history.back = () => {
        if (typeof window.onpopstate === 'function') {
            window.onpopstate({ currentTarget: window } as unknown as PopStateEvent);
        }
    };

    global.window.history.forward = () => {
        if (typeof window.onpopstate === 'function') {
            window.onpopstate({ currentTarget: window } as unknown as PopStateEvent);
        }
    };

    const getContentFake = sinon.fake.returns(document.createElement('div'));

    const BlockMock = class {
        getContent = getContentFake;

        dispatchComponentDidMount = () => { return; };
    } as any;

    it('use() should return Router instance', () => {
        const result = Router.use('/', BlockMock);

        expect(result).to.eq(Router);
    });

    it('start() should return the start page', () => {
        Router.use('/', BlockMock).start();

        expect(getContentFake.callCount).to.eq(1);
    });

    it('back() should render a page on history back action', () => {
        Router.use('/', BlockMock).start();

        Router.back();

        expect(getContentFake.callCount).to.eq(3);
    });

    it('forward() should render a page on history forward action', () => {
        Router.use('/', BlockMock).start();

        Router.forward();

        expect(getContentFake.callCount).to.eq(5);
    });
});
