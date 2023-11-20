"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RSACipher = void 0;
class RSACipher {
    constructor() {
        /* This is a TypeScript implementation of RSA Cipher */
    }
    static getTotient(p, q) {
        return (p - 1) * (q - 1);
    }
    static gcd(a, b) {
        if (b === 0) {
            return a;
        }
        else {
            return RSACipher.gcd(b, a % b);
        }
    }
    static getE(totient) {
        let e = Math.floor(Math.random() * (totient - 1)) + 2;
        while (RSACipher.gcd(e, totient) !== 1) {
            e = Math.floor(Math.random() * (totient - 1)) + 2;
        }
        return e;
    }
    static modularInverse(a, m) {
        for (let x = 1; x < m; x++) {
            if (((a % m) * (x % m)) % m === 1) {
                return x;
            }
        }
        return -1;
    }
    static generateKeys(p, q) {
        const n = p * q;
        const totient = RSACipher.getTotient(p, q);
        const e = RSACipher.getE(totient);
        const d = RSACipher.modularInverse(e, totient);
        const keys = {
            public_key: [n, e],
            private_key: [p, q, d]
        };
        return keys;
    }
    static encrypt(msg, publicKey) {
        const [n, e] = publicKey;
        if (typeof msg === 'number') {
            return (msg ** e) % n;
        }
        else if (typeof msg === 'string') {
            let result = '';
            for (const ch of msg) {
                result += String.fromCharCode((ch.charCodeAt(0) ** e) % n);
            }
            return result;
        }
        return '';
    }
    static decrypt(msg, privateKey) {
        const [p, q, d] = privateKey;
        const n = p * q;
        if (typeof msg === 'number') {
            return String.fromCharCode((msg ** d) % n);
        }
        else if (typeof msg === 'string') {
            let result = '';
            const codes = msg.split(' ');
            for (const code of codes) {
                const decryptedCharCode = (parseInt(code) ** d) % n;
                result += String.fromCharCode(decryptedCharCode);
            }
            return result;
        }
        return '';
    }
}
exports.RSACipher = RSACipher;
