# Decrypto
Inspired by python decrypto lib  
https://github.com/pyGuru123/Decrypto  

Install this by command
npm i decrypto

```js
const { AffineCipher } = require('decrypto'); 

// Example usage
const cipher = new AffineCipher();

const plaintext = 'Hello';
const a = 5; // Replace with your 'a' value
const b = 7; // Replace with your 'b' value

// Encrypt
const encryptedText = AffineCipher.encrypt(plaintext, a, b);
console.log('Encrypted Text:', encryptedText);

// Decrypt
const decryptedText = AffineCipher.decrypt(encryptedText, a, b);
console.log('Decrypted Text:', decryptedText);

```
```js
const { AsciiCipher } = require('decrypto'); 
const cipher = new AsciiCipher();

const plaintext = 'Hello, world!';
const encryptedText = AsciiCipher.encrypt(plaintext);
console.log('Encrypted Text:', encryptedText);

const decryptedText = AsciiCipher.decrypt(encryptedText);
console.log('Decrypted Text:', decryptedText);
```
```js
const { AtbashCipher } = require('decrypto'); 
const cipher = new AtbashCipher();

const plaintext = 'Hello, World!';
const encryptedText = cipher.encrypt(plaintext);
console.log('Encrypted Text:', encryptedText);

const decryptedText = cipher.decrypt(encryptedText);
console.log('Decrypted Text:', decryptedText);

```
```js
const { BaconCipher } = require('decrypto'); 
// Instantiate the BaconCipher class
const cipher = new BaconCipher();

// Example usage
const plaintext = 'HELLO';
const encryptedText = cipher.encrypt(plaintext);
console.log('Encrypted Text:', encryptedText);

const decryptedText = cipher.decrypt(encryptedText);
console.log('Decrypted Text:', decryptedText);

```

```js
const { Base64Cipher } = require('decrypto'); 

// Instantiate the Base64Cipher class
const cipher = new Base64Cipher();

// Example usage
const plaintext = 'Hello, World!';
const encryptedText = Base64Cipher.encrypt(plaintext);
console.log('Encrypted Text:', encryptedText);

const decryptedText = Base64Cipher.decrypt(encryptedText);
console.log('Decrypted Text:', decryptedText);

```

```js
const { BinaryCipher } = require('decrypto'); 

// Instantiate the BinaryCipher class
const cipher = new BinaryCipher();

// Example usage
const plaintextString = 'Hello, World!';
const plaintextNumber = 12345;

// Encrypt string to binary
const encryptedTextString = BinaryCipher.encrypt(plaintextString);
console.log('Encrypted Text (String):', encryptedTextString);

// Encrypt number to binary
const encryptedTextNumber = BinaryCipher.encrypt(plaintextNumber);
console.log('Encrypted Text (Number):', encryptedTextNumber);

// Decrypt binary to string
const decryptedTextString = BinaryCipher.decrypt(encryptedTextString);
console.log('Decrypted Text (String):', decryptedTextString);

// Decrypt binary to number
const decryptedTextNumber = BinaryCipher.decrypt(encryptedTextNumber);
console.log('Decrypted Text (Number):', decryptedTextNumber);
```

```js
const { HexCipher } = require('decrypto'); 

// Instantiate the HexCipher class
const cipher = new HexCipher();

// Example usage
const plaintextString = 'Hello, World!';
const plaintextNumber = 12345;

// Encrypt string to hexadecimal
const encryptedTextString = HexCipher.encrypt(plaintextString);
console.log('Encrypted Text (String):', encryptedTextString);

// Encrypt number to hexadecimal
const encryptedTextNumber = HexCipher.encrypt(plaintextNumber);
console.log('Encrypted Text (Number):', encryptedTextNumber);

// Decrypt hexadecimal to string
const decryptedTextString = HexCipher.decrypt(encryptedTextString);
console.log('Decrypted Text (String):', decryptedTextString);

// Decrypt hexadecimal to number
const decryptedTextNumber = HexCipher.decrypt(encryptedTextNumber);
console.log('Decrypted Text (Number):', decryptedTextNumber);

```

```js
const { OctCipher } = require('decrypto'); 

// Example usage
const plaintextString = 'Hello, World!';
const plaintextNumber = 12345;

// Encrypt string to octal
const encryptedTextString = OctCipher.encrypt(plaintextString);
console.log('Encrypted Text (String):', encryptedTextString);

// Encrypt number to octal
const encryptedTextNumber = OctCipher.encrypt(plaintextNumber);
console.log('Encrypted Text (Number):', encryptedTextNumber);

// Decrypt octal to string
const decryptedTextString = OctCipher.decrypt(encryptedTextString);
console.log('Decrypted Text (String):', decryptedTextString);

// Decrypt octal to number
const decryptedTextNumber = OctCipher.decrypt(encryptedTextNumber);
console.log('Decrypted Text (Number):', decryptedTextNumber);

```

```js
const { ReverseCipher } = require('decrypto'); 

const plaintext = 'Hello, World!';
console.log('Original Text:', plaintext);

const encryptedText = ReverseCipher.encrypt(plaintext);
console.log('Encrypted Text:', encryptedText);

const decryptedText = ReverseCipher.decrypt(encryptedText);
console.log('Decrypted Text:', decryptedText);
```