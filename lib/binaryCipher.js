"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinaryCipher = void 0;
class BinaryCipher {
    constructor() {
        /* This is a JavaScript implementation of Binary Cipher */
    }
    static encrypt(msg) {
        let result = null;
        if (typeof msg === 'number') {
            result = parseInt(msg.toString(2));
        }
        else if (typeof msg === 'string') {
            result = '';
            for (const ele of msg) {
                const value = ele.charCodeAt(0);
                const binaryValue = value.toString(2).padStart(8, '0') + ' ';
                result += binaryValue;
            }
        }
        return result;
    }
    static decrypt(msg) {
        let result = null;
        if (typeof msg === 'number') {
            result = parseInt(msg.toString(), 2);
        }
        else if (typeof msg === 'string') {
            result = '';
            if (typeof msg === 'string') {
                const binaries = msg.split(' ');
                binaries.forEach(binary => {
                    const value = parseInt(binary, 2);
                    result += String.fromCharCode(value);
                });
            }
        }
        return result;
    }
}
exports.BinaryCipher = BinaryCipher;
