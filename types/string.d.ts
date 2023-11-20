export declare function len(this: string): number;
export declare function str(this: string): string;
export declare function add(this: string, ...strings: string[]): string;
export declare function sb(this: string, start: number, end: number): string;
export declare function ind(this: string, substring: string): number;
export declare function lstInd(this: string, substring: string): number;
export declare function inString(this: string, substring: string): boolean;
export declare function start(this: string, substring: string): boolean;
export declare function end(this: string, substring: string): boolean;
export declare function upr(this: string): string;
export declare function lwr(this: string): string;
export declare function trS(this: string): string;
export declare function trE(this: string): string;
export declare function rpc(this: string, stringOrRegex: string, newSubstring: string): string;
export declare function rpcA(this: string, stringOrRegex: string | RegExp, newSubstring: string): string;
export declare function at(this: string, index: number): string;
export declare function chCdAt(this: string, index: number): number;
export declare function locCmp(this: string, compareString: string): number;
declare global {
    interface String {
        len(): number;
        str(): string;
        add(...strings: string[]): string;
        sb(start: number, end: number): string;
        ind(substring: string): number;
        lstInd(substring: string): number;
        inString(substring: string): boolean;
        start(substring: string): boolean;
        end(substring: string): boolean;
        upr(): string;
        lwr(): string;
        trS(): string;
        trE(): string;
        rpc(oldSubstring: string, newSubstring: string): string;
        rpcA(oldSubstring: string, newSubstring: string): string;
        at(index: number): string;
        chCdAt(index: number): number;
        locCmp(compareString: string): number;
    }
}
//# sourceMappingURL=string.d.ts.map