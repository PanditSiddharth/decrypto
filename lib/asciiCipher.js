"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsciiCipher = void 0;
class AsciiCipher {
    constructor() {
        /* This is a JavaScript implementation of Ascii Cipher */
    }
    static encrypt(msg) {
        let result = '';
        for (const ele of msg) {
            const value = ele.charCodeAt(0);
            result += `${value} `;
        }
        return result.trim();
    }
    static decrypt(msg) {
        let result = '';
        const elements = msg.split(' ');
        for (const ele of elements) {
            const value = String.fromCharCode(parseInt(ele));
            result += value;
        }
        return result;
    }
}
exports.AsciiCipher = AsciiCipher;
