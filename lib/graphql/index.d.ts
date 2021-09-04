import { HttpRequestContext, HttpResponse } from '../request';
export declare function Query(query: string, variables?: Record<string, any>, context?: HttpRequestContext): Promise<HttpResponse>;
export declare function Mutation(query: string, variables?: Record<string, any>, context?: HttpRequestContext): Promise<HttpResponse>;
export declare function Subscription(query: string, variables?: Record<string, any>, context?: HttpRequestContext): Promise<HttpResponse>;
