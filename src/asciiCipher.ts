export class AsciiCipher {
    constructor() {
      /* This is a JavaScript implementation of Ascii Cipher */
    }
  
    static encrypt(msg:string) {
      let result = '';
      for (const ele of msg) {
        const value = ele.charCodeAt(0);
        result += `${value} `;
      }
      return result.trim();
    }
  
    static decrypt(msg:string) {
      let result = '';
      const elements = msg.split(' ');
      for (const ele of elements) {
        const value = String.fromCharCode(parseInt(ele));
        result += value;
      }
      return result;
    }
  }
  