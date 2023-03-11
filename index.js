import { Error } from './src/pages/Error/error';

window.addEventListener('load', () => {
    document.getElementById('root').innerHTML = Error({ code: '404', text: 'Не туда попали' });
});
