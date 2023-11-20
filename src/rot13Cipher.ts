export class ROT13Cipher {
    constructor() {
      /* This is a TypeScript implementation of ROT13 Cipher */
    }
  
    encrypt(message: string): string {
      let result = '';
      for (const ch of message.toUpperCase()) {
        if (ch.match(/[A-Z]/)) {
          const encoded = String.fromCharCode(((ch.charCodeAt(0) - 65 + 13) % 26) + 65);
          result += encoded;
        } else {
          result += ch;
        }
      }
      return result;
    }
  
    decrypt(message: string): string {
      return this.encrypt(message);
    }
  }
  