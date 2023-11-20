export class ReverseCipher {
    constructor() {
      /* This is a JavaScript implementation of Reverse Cipher */
    }
  
    static encrypt(msg:any) {
      return (msg + "").split('').reverse().join('');
    }
  
    static decrypt(msg:any) {
      return (msg + "").split('').reverse().join('');
    }
  }
  