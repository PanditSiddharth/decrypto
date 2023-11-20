"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RomanNumCipher = void 0;
class RomanNumCipher {
    constructor() {
        /* This is a TypeScript implementation of RomanNumeral Cipher */
        this.val = [
            1000, 900, 500, 400,
            100, 90, 50, 40,
            10, 9, 5, 4,
            1
        ];
        this.syb = [
            "M", "CM", "D", "CD",
            "C", "XC", "L", "XL",
            "X", "IX", "V", "IV",
            "I"
        ];
    }
    encrypt(num) {
        let result = '';
        if (!Number.isInteger(num)) {
            return 'Cannot cast to Roman cipher';
        }
        let i = 0;
        while (num > 0) {
            for (let _ = 0; _ < Math.floor(num / this.val[i]); _++) {
                result += this.syb[i];
                num -= this.val[i];
            }
            i++;
        }
        return result;
    }
    decrypt(msg) {
        const list_ = ['CM', 'CD', 'XC', 'XL', 'IX', 'IV'];
        let num = 0;
        for (const ele of list_) {
            if (msg.includes(ele)) {
                msg = msg.replace(ele, '');
                num += this.val[this.syb.indexOf(ele)];
            }
        }
        for (const ele of msg) {
            num += this.val[this.syb.indexOf(ele)];
        }
        return num;
    }
}
exports.RomanNumCipher = RomanNumCipher;
