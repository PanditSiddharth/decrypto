"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScytaleCipher = void 0;
class ScytaleCipher {
    fixText(text, key) {
        const padding = text.length % key;
        return padding ? text + '·'.repeat(key - padding) : text;
    }
    encrypt(message, key) {
        const msg = this.fixText(message.toUpperCase(), key);
        const length = msg.length;
        const cols = Math.ceil(length / key);
        let result = '';
        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < key; j++) {
                const index = i + j * cols;
                if (index < length) {
                    result += msg[index];
                }
            }
        }
        return result;
    }
    decrypt(message, key) {
        const msg = this.fixText(message.toUpperCase(), key);
        const length = msg.length;
        const cols = Math.ceil(length / key);
        const rows = key;
        let result = '';
        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
                const index = i + j * cols;
                if (index < length) {
                    result += msg[index];
                }
            }
        }
        return result;
    }
}
exports.ScytaleCipher = ScytaleCipher;
