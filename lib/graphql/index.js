"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subscription = exports.Mutation = exports.Query = void 0;
const request_1 = require("../request");
function Query(query, variables, context) {
    const payload = {
        query: query,
    };
    if (variables) {
        payload.variables = variables;
    }
    return (0, request_1.Request)('https://directions-graphql.herokuapp.com/graphql', Object.assign(Object.assign({}, context), { method: (context === null || context === void 0 ? void 0 : context.method) || request_1.HttpMethod.POST, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) }));
}
exports.Query = Query;
function Mutation(query, variables, context) {
    const payload = {
        query: query,
    };
    if (variables) {
        payload.variables = variables;
    }
    return (0, request_1.Request)('https://directions-graphql.herokuapp.com/graphql', Object.assign(Object.assign({}, context), { method: (context === null || context === void 0 ? void 0 : context.method) || request_1.HttpMethod.POST, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) }));
}
exports.Mutation = Mutation;
function Subscription(query, variables, context) {
    return (0, request_1.Request)('https://directions-graphql.herokuapp.com/graphql', Object.assign(Object.assign({}, context), { method: (context === null || context === void 0 ? void 0 : context.method) || request_1.HttpMethod.POST, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({
            query,
            variables,
        }) }));
}
exports.Subscription = Subscription;
