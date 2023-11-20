"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Base64Cipher = void 0;
class Base64Cipher {
    constructor() {
        /* This is a JavaScript implementation of Base64 Cipher */
    }
    static encrypt(msg) {
        const base64Encoded = Buffer.from(msg, 'ascii').toString('base64');
        return base64Encoded;
    }
    static decrypt(msg) {
        const base64Decoded = Buffer.from(msg, 'base64').toString('ascii');
        return base64Decoded;
    }
}
exports.Base64Cipher = Base64Cipher;
