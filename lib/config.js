"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = void 0;
const fs_1 = require("fs");
function Config() {
    return JSON.parse((0, fs_1.readFileSync)(`${__dirname}/../../../.carbon.json`)
        .toString('utf8'));
}
exports.Config = Config;
