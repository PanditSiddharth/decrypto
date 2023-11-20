"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MorseCodeCipher = void 0;
class MorseCodeCipher {
    constructor() {
        // This is a TypeScript implementation of MorseCode Cipher
        this.morse_dict = {
            'A': '.-', 'B': '-...',
            'C': '-.-.', 'D': '-..', 'E': '.',
            'F': '..-.', 'G': '--.', 'H': '....',
            'I': '..', 'J': '.---', 'K': '-.-',
            'L': '.-..', 'M': '--', 'N': '-.',
            'O': '---', 'P': '.--.', 'Q': '--.-',
            'R': '.-.', 'S': '...', 'T': '-',
            'U': '..-', 'V': '...-', 'W': '.--',
            'X': '-..-', 'Y': '-.--', 'Z': '--..',
            '1': '.----', '2': '..---', '3': '...--',
            '4': '....-', '5': '.....', '6': '-....',
            '7': '--...', '8': '---..', '9': '----.',
            '0': '-----', ',': '--..--', '.': '.-.-.-',
            '?': '..--..', ' ': '/', '-': '-....-',
            '(': '-.--.', ')': '-.--.-'
        };
        this.reverse_morse = {};
        for (const [key, value] of Object.entries(this.morse_dict)) {
            this.reverse_morse[value] = key;
        }
    }
    encrypt(text) {
        let result = '';
        for (const ch of text.toUpperCase()) {
            result += this.morse_dict[ch] || ch;
            result += ' ';
        }
        return result.trim();
    }
    decrypt(text) {
        let result = '';
        for (const code of text.split(' ')) {
            result += this.reverse_morse[code] || code;
        }
        return result;
    }
}
exports.MorseCodeCipher = MorseCodeCipher;
