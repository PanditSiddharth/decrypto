"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffineCipher = void 0;
class AffineCipher {
    constructor() {
        /* This is a TypeScript implementation of Affine Cipher */
    }
    static modinv(a, m) {
        for (let x = 1; x < m; x++) {
            if (((a % m) * (x % m)) % m === 1) {
                return x;
            }
        }
        return -1;
    }
    static encrypt(msg, a, b) {
        let result = '';
        for (const ch of msg.toUpperCase()) {
            if (/[A-Z]/.test(ch)) {
                result += String.fromCharCode(((a * (ch.charCodeAt(0) - 65) + b) % 26) + 65);
            }
            else {
                result += ch;
            }
        }
        return result;
    }
    static decrypt(msg, a, b) {
        let result = '';
        for (const ch of msg.toUpperCase()) {
            if (/[A-Z]/.test(ch)) {
                const inv = AffineCipher.modinv(a, 26);
                const decryptedCharCode = ((inv * (ch.charCodeAt(0) - 65 - b)) % 26 + 26) % 26;
                result += String.fromCharCode(decryptedCharCode + 65);
            }
            else {
                result += ch;
            }
        }
        return result;
    }
}
exports.AffineCipher = AffineCipher;
