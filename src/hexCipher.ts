export class HexCipher {
    constructor() {
      /* This is a JavaScript implementation of Hexadecimal Cipher */
    }
  
    static encrypt(msg:any) {
        
      let result:any = null;
  
      if (typeof msg === 'number') {
        const hexadecimal = msg.toString(16);
        result = hexadecimal;
      } else if (typeof msg === 'string') {
        result = '';
        for (const ele of msg) {
          const value = ele.charCodeAt(0);
          const hexValue = value.toString(16) + ' ';
          result += hexValue;
        }
        result = result.trim();
      }
  
      return result;
    }
  
    static decrypt(msg:any) {
      let result:any = null;
      function isHexadecimal(str:any) {
        const hexRegex = /^[0-9A-Fa-f]+$/g; // Regular expression to match hexadecimal characters
      
        return hexRegex.test(str);
      }
      
      if (isHexadecimal(msg)) {
        result = parseInt(msg.toString(), 16);
      } else if (typeof msg === 'string') {
        result = '';
        const hexValues = msg.split(' ');
        hexValues.forEach(hex => {
          const value = parseInt(hex, 16);
          result += String.fromCharCode(value);
        });
      }
  
      return result;
    }
  }
  