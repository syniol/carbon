"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Delete = exports.Patch = exports.Put = exports.Post = exports.Get = void 0;
const request_1 = require("../request");
function Get(path, headers) {
    return (0, request_1.Request)(path, headers
        ? {
            headers: headers,
        }
        : undefined);
}
exports.Get = Get;
function Post(path, body, headers) {
    const context = {
        method: request_1.HttpMethod.PUT,
    };
    if (body) {
        context.body = body;
    }
    if (headers) {
        context.headers = headers;
    }
    return (0, request_1.Request)(path, context);
}
exports.Post = Post;
function Put(path, body, headers) {
    const context = {
        method: request_1.HttpMethod.PUT,
    };
    if (body) {
        context.body = body;
    }
    if (headers) {
        context.headers = headers;
    }
    return (0, request_1.Request)(path, context);
}
exports.Put = Put;
function Patch(path, body, headers) {
    const context = {
        method: request_1.HttpMethod.PATCH,
    };
    if (body) {
        context.body = body;
    }
    if (headers) {
        context.headers = headers;
    }
    return (0, request_1.Request)(path, context);
}
exports.Patch = Patch;
function Delete(path, headers) {
    const context = {
        method: request_1.HttpMethod.PATCH,
    };
    if (headers) {
        context.headers = headers;
    }
    return (0, request_1.Request)(path, context);
}
exports.Delete = Delete;
