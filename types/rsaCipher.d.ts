export declare class RSACipher {
    constructor();
    static getTotient(p: number, q: number): number;
    static gcd(a: number, b: number): number;
    static getE(totient: number): number;
    static modularInverse(a: number, m: number): number;
    static generateKeys(p: number, q: number): {
        public_key: [number, number];
        private_key: [number, number, number];
    };
    static encrypt(msg: number | string, publicKey: [number, number]): number | string;
    static decrypt(msg: number | string, privateKey: [number, number, number]): string;
}
//# sourceMappingURL=rsaCipher.d.ts.map