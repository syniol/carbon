import { request as InSecureRequest } from 'http';
import { request as SecureRequest } from 'https';
import { URL } from 'url';
import { TextEncoder } from 'util';

import { HttpStatusCodes } from './codes'


export enum HttpMethod {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE',
    PATCH = 'PATCH',
}

export interface HttpRequestContext {
    [key: string]: any;

    headers?: any;
    method?: HttpMethod;
    body?: string;
    port?: number;
}

export interface HttpResponse {
    status: HttpStatusCodes;
    text(): string;
    json(): any;
}

function NewHttpResponse(dataBlocks: Uint8Array[], status: number): HttpResponse {
    const result = Buffer
        .concat(dataBlocks)
        .toString()
    ;

    return {
        status: status,
        json(): any {
            return JSON.parse(result);
        },
        text(): string {
            return result;
        }
    };
}

export async function Request(
    url: string,
    context?: HttpRequestContext,
): Promise<HttpResponse> {
    const urlObject = new URL(url);
    const opt = {
        method: context?.method || HttpMethod.GET,
        headers: context?.headers,
        path: `${urlObject.pathname}${urlObject.search || ''}`,
        body: new TextEncoder().encode(context?.body),
        port: urlObject.port,
    };

    let client = InSecureRequest;
    if (urlObject?.protocol === 'https:') {
        client = SecureRequest;

        Object.assign(opt, { hostname: urlObject.hostname });
    } else {
        Object.assign(opt, { host: urlObject.host });
    }

    return new Promise((resolve, reject) => {
        const req = client(opt, res => {
            const dataCollection: Uint8Array[] = [];
            res.on('data', data => {
                dataCollection.push(data);
            });

            res.on('error', err => {
                reject(err);
            });

            res.on('end', () => {
                resolve(NewHttpResponse(dataCollection, res?.statusCode));
            });
        });

        if (
            ![
                HttpMethod.GET,
                HttpMethod.DELETE,
            ].includes(context?.method)
        ) {
            req.write(context?.body || '');
        }

        req.end();
    });
}
