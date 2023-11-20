"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReverseCipher = void 0;
class ReverseCipher {
    constructor() {
        /* This is a JavaScript implementation of Reverse Cipher */
    }
    static encrypt(msg) {
        return (msg + "").split('').reverse().join('');
    }
    static decrypt(msg) {
        return (msg + "").split('').reverse().join('');
    }
}
exports.ReverseCipher = ReverseCipher;
