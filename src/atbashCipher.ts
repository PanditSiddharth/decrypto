export class AtbashCipher {
    lookupDict:any = {};
   
    constructor() {
      /* This is a JavaScript implementation of AtBashCipher */
      const alpha:any = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      this.lookupDict = {};
      for (let i = 0; i < 26; i++) {
        this.lookupDict[alpha[i]] = alpha.split('').reverse()[i];
      }
    }
  
    encrypt(msg:string) {
      let result = '';
      for (const ch of msg.toUpperCase()) {
        result += this.lookupDict[ch] || ch;
      }
      return result;
    }
  
    decrypt(msg:string) {
      return this.encrypt(msg); // Atbash is its own inverse, so decryption is the same as encryption
    }
  }
  