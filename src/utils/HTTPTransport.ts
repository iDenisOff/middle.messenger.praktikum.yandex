const enum METHOD {
    GET = 'get',
    POST = 'post',
    PUT = 'put',
    DELETE = 'delete'
}

interface Options {
    data?: XMLHttpRequestBodyInit;
    timeout?: number;
    headers?: Record<string, string>;
}

interface RequestOptions {
    method: METHOD;
    data?: XMLHttpRequestBodyInit;
    headers?: Record<string, string>;
}

function queryStringify(data: XMLHttpRequestBodyInit): string {
    return Object.entries(data).map(([key, val]) => `${key}=${val}`).join('&');
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
class HTTPTransport {
    get = (url: string, options: Options = {}) => {
        if (options.data) {
            url += '?' + queryStringify(options.data);
        }

        return this.request(url, { ...options, method: METHOD.GET }, options.timeout);
    };

    post = (url: string, options: Options) => {
        return this.request(url, { ...options, method: METHOD.POST }, options.timeout);
    };

    put = (url: string, options: Options) => {
        return this.request(url, { ...options, method: METHOD.PUT }, options.timeout);
    };

    delete = (url: string, options: Options) => {
        return this.request(url, { ...options, method: METHOD.DELETE }, options.timeout);
    };

    request = (url: string, options: RequestOptions, timeout: number = 5000) => {
        const { method, data, headers } = options;

        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open(method, url);

            xhr.timeout = timeout;

            if (headers) {
                Object.keys(headers).forEach(header => {
                    xhr.setRequestHeader(header, headers[header]);
                });
            }

            xhr.onload = function () {
                resolve(xhr);
            };

            xhr.onabort = reject;
            xhr.onerror = reject;
            xhr.ontimeout = reject;

            if (method === METHOD.GET || !data) {
                xhr.send();
            } else {
                xhr.send(data);
            }
        });
    };
}
