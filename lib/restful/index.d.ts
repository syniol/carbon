import { HttpResponse } from '../request';
export declare function Get(path: string, headers?: Record<string, any>): Promise<HttpResponse>;
export declare function Post(path: string, body?: string, headers?: Record<string, any>): Promise<HttpResponse>;
export declare function Put(path: string, body?: string, headers?: Record<string, any>): Promise<HttpResponse>;
export declare function Patch(path: string, body?: string, headers?: Record<string, any>): Promise<HttpResponse>;
export declare function Delete(path: string, headers?: Record<string, any>): Promise<HttpResponse>;
