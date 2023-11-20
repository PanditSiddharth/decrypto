export class Base64Cipher {
    constructor() {
      /* This is a JavaScript implementation of Base64 Cipher */
    }
  
    static encrypt(msg:string) {
      const base64Encoded = Buffer.from(msg, 'ascii').toString('base64');
      return base64Encoded;
    }
  
    static decrypt(msg:string) {
      const base64Decoded = Buffer.from(msg, 'base64').toString('ascii');
      return base64Decoded;
    }
  }
  