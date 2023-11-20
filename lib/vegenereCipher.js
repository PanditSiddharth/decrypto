"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VigenereCipher = void 0;
class VigenereCipher {
    modifyKey(msg, key) {
        const keyLength = key.length;
        let adjustedKey = key.toUpperCase();
        while (adjustedKey.length < msg.length) {
            adjustedKey += key.toUpperCase();
        }
        return adjustedKey.slice(0, msg.length);
    }
    encrypt(msg, key) {
        const adjustedKey = this.modifyKey(msg, key);
        const encryptedText = [];
        for (let i = 0; i < msg.length; i++) {
            const charCode = ((msg.charCodeAt(i) - 65 + adjustedKey.charCodeAt(i) - 65) % 26) + 65;
            encryptedText.push(String.fromCharCode(charCode));
        }
        return encryptedText.join('').toLowerCase();
    }
    decrypt(msg, key) {
        const adjustedKey = this.modifyKey(msg, key);
        const decryptedText = [];
        for (let i = 0; i < msg.length; i++) {
            const charCode = ((msg.charCodeAt(i) - adjustedKey.charCodeAt(i) + 26) % 26) + 65;
            decryptedText.push(String.fromCharCode(charCode));
        }
        return decryptedText.join('').toLowerCase();
    }
}
exports.VigenereCipher = VigenereCipher;
