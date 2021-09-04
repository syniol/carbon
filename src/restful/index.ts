import {
    HttpMethod,
    HttpRequestContext,
    HttpResponse,
    Request,
} from '../http'
import { NewConfig } from '../config'


/**
 * @param path      e.g. /user/profile/2
 * @param headers   e.g. { headers: { 'X-Authentication': "test" } }
 */
export function Get(
    path: string,
    headers?: Record<string, any>,
): Promise<HttpResponse> {
    return Request(
        NewConfig().baseURL + path,
        headers
            ? {
                  headers: headers,
              }
            : undefined,
    )
}

/**
 * @param path      e.g. /user/profile/2
 * @param body      e.g. AnyString or JSON in string format
 * @param headers   e.g. { headers: { 'X-Authentication': "test" } }
 */
export function Post(
    path: string,
    body?: string,
    headers?: Record<string, any>,
): Promise<HttpResponse> {
    const context: HttpRequestContext = {
        method: HttpMethod.PUT,
    }

    if (body) {
        context.body = body
    }

    if (headers) {
        context.headers = headers
    }

    return Request(NewConfig().baseURL + path, context)
}

/**
 * @param path      e.g. /user/profile/2
 * @param body      e.g. AnyString or JSON in string format
 * @param headers   e.g. { headers: { 'X-Authentication': "test" } }
 */
export function Put(
    path: string,
    body?: string,
    headers?: Record<string, any>,
): Promise<HttpResponse> {
    const context: HttpRequestContext = {
        method: HttpMethod.PUT,
    }

    if (body) {
        context.body = body
    }

    if (headers) {
        context.headers = headers
    }

    return Request(NewConfig().baseURL + path, context)
}

/**
 * @param path      e.g. /user/profile/2
 * @param body      e.g. AnyString or JSON in string format
 * @param headers   e.g. { headers: { 'X-Authentication': "test" } }
 */
export function Patch(
    path: string,
    body?: string,
    headers?: Record<string, any>,
): Promise<HttpResponse> {
    const context: HttpRequestContext = {
        method: HttpMethod.PATCH,
    }

    if (body) {
        context.body = body
    }

    if (headers) {
        context.headers = headers
    }

    return Request(NewConfig().baseURL + path, context)
}

/**
 * @param path      e.g. /user/profile/2
 * @param headers   e.g. { headers: { 'X-Authentication': "test" } }
 */
export function Delete(
    path: string,
    headers?: Record<string, any>,
): Promise<HttpResponse> {
    const context: HttpRequestContext = {
        method: HttpMethod.PATCH,
    }

    if (headers) {
        context.headers = headers
    }

    return Request(NewConfig().baseURL + path, context)
}
