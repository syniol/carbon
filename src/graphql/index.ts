import {
    HttpMethod,
    HttpRequestContext,
    HttpResponse,
    Request,
} from '../http'
import { NewConfig } from '../config'


export function Query(
    query: string,
    variables?: Record<string, any>,
    context?: HttpRequestContext,
): Promise<HttpResponse> {
    const payload: Record<string, any> = {
        query: query,
    }

    if (variables) {
        payload.variables = variables
    }

    return Request(NewConfig().baseURL, {
        ...context,
        method:
            context?.method || NewConfig().graphQLHttpMethod || HttpMethod.POST,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    })
}

export function Mutation(
    query: string,
    variables?: Record<string, any>,
    context?: HttpRequestContext,
): Promise<HttpResponse> {
    const payload: Record<string, any> = {
        query: query,
    }

    if (variables) {
        payload.variables = variables
    }

    return Request(NewConfig().baseURL, {
        ...context,
        method:
            context?.method || NewConfig().graphQLHttpMethod || HttpMethod.POST,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    })
}

export function Subscription(
    query: string,
    variables?: Record<string, any>,
    context?: HttpRequestContext,
): Promise<HttpResponse> {
    return Request(NewConfig().baseURL, {
        ...context,
        method:
            context?.method || NewConfig().graphQLHttpMethod || HttpMethod.POST,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query,
            variables,
        }),
    })
}
