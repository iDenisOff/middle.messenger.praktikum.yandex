const enum METHOD {
    GET = 'get',
    POST = 'post',
    PUT = 'put',
    PATCH = 'patch',
    DELETE = 'delete'
}

interface Options {
    data?: any;
    timeout?: number;
    headers?: Record<string, string>;
}

interface RequestOptions {
    method: METHOD;
    data?: any;
    headers?: Record<string, string>;
}

function queryStringify(data: XMLHttpRequestBodyInit): string {
    return Object.entries(data).map(([key, val]) => `${key}=${val}`).join('&');
}

export default class HTTPTransport {
    static API_URL = 'https://ya-praktikum.tech/api/v2';

    protected endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = `${HTTPTransport.API_URL}${endpoint}`;
    }

    public get<Response>(path: string, options: Options = {}): Promise<Response> {
        if (options.data) {
            path += '?' + queryStringify(options.data);
        }

        return this.request(this.endpoint + path, { ...options, method: METHOD.GET }, options?.timeout);
    }

    public post<Response = void>(path: string, options: Options = {}): Promise<Response> {
        return this.request(this.endpoint + path, { ...options, method: METHOD.POST }, options?.timeout);
    }

    public put<Response = void>(path: string, options: Options = {}): Promise<Response> {
        return this.request(this.endpoint + path, { ...options, method: METHOD.PUT }, options?.timeout);
    }

    public patch<Response = void>(path: string, options: Options = {}): Promise<Response> {
        return this.request(this.endpoint + path, { ...options, method: METHOD.PATCH }, options?.timeout);
    }

    public delete<Response>(path: string, options: Options = {}): Promise<Response> {
        return this.request(this.endpoint + path, { ...options, method: METHOD.DELETE }, options?.timeout);
    }

    private request<Response>(url: string, options: RequestOptions, timeout: number = 5000): Promise<Response> {
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

            xhr.onreadystatechange = () => {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    if (xhr.status < 400) {
                        resolve(xhr.response);
                    } else {
                        reject(xhr.response);
                    }
                }
            };

            xhr.onabort = () => reject({ reason: 'abort' });
            xhr.onerror = () => reject({ reason: 'network error' });
            xhr.ontimeout = () => reject({ reason: 'timeout' });

            xhr.setRequestHeader('Content-Type', 'application/json');

            xhr.withCredentials = true;
            xhr.responseType = 'json';

            if (method === METHOD.GET || !data) {
                xhr.send();
            } else {
                xhr.send(JSON.stringify(data));
            }
        });
    }
}
