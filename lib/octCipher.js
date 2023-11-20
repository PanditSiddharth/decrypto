"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OctCipher = void 0;
class OctCipher {
    constructor() {
        /* This is a JavaScript implementation of Octal Cipher */
    }
    static encrypt(msg) {
        let result = null;
        if (typeof msg === 'number') {
            const octal = msg.toString(8);
            result = parseInt(octal.toString());
        }
        else if (typeof msg === 'string') {
            result = '';
            for (const ele of msg) {
                const value = ele.charCodeAt(0);
                const octalValue = value.toString(8) + ' ';
                result += octalValue;
            }
            result = result.trim();
        }
        return result;
    }
    static decrypt(msg) {
        let result = null;
        if (typeof msg === 'number') {
            result = parseInt(msg.toString(), 8);
        }
        else if (typeof msg === 'string') {
            result = '';
            const octalValues = msg.split(' ');
            octalValues.forEach(octal => {
                const value = parseInt(octal, 8);
                result += String.fromCharCode(value);
            });
        }
        return result;
    }
}
exports.OctCipher = OctCipher;
