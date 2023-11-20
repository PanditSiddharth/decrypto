export class BaconCipher {
    baconDict: {[key:string]: string}  = {}
    reverseBacon: any  = {}

    constructor() {
      /* This is a JavaScript implementation of Bacon Cipher */
      this.baconDict = {
        'A': 'aaaaa', 'B': 'aaaab', 'C': 'aaaba',
        'D': 'aaabb', 'E': 'aabaa', 'F': 'aabab',
        'G': 'aabba', 'H': 'aabbb', 'I': 'abaaa',
        'J': 'abaab', 'K': 'ababa', 'L': 'ababb',
        'M': 'abbaa', 'N': 'abbab', 'O': 'abbba',
        'P': 'abbbb', 'Q': 'baaaa', 'R': 'baaab',
        'S': 'baaba', 'T': 'baabb', 'U': 'babaa',
        'V': 'babab', 'W': 'babba', 'X': 'babbb',
        'Y': 'bbaaa', 'Z': 'bbaab'
      };
  
      this.reverseBacon = {};
      for (const key in this.baconDict) {
        this.reverseBacon[this.baconDict[key] as any] = key;
      }
    }
  
    encrypt(message:string) {
      let result = '';
      for (const ch of message.toUpperCase()) {
        result += this.baconDict[ch] || '';
        result += ' ';
      }
      return result.trim();
    }
  
    decrypt(message:string) {
      let result = '';
      const encodedChars = message.split(' ');
      for (const encoded of encodedChars) {
        result += this.reverseBacon[encoded] || ' ';
      }
      return result;
    }
  }
  