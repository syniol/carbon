export declare enum HttpMethod {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE",
    PATCH = "PATCH"
}
export interface HttpRequestContext {
    [key: string]: any;
    headers?: any;
    method?: HttpMethod;
    body?: string;
}
export interface HttpResponse {
    status: number;
    text(): string;
    json(): any;
}
export declare function Request(url: string, context?: HttpRequestContext): Promise<HttpResponse>;
