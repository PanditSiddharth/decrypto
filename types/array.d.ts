export declare function add<T>(this: T[]): T[];
export declare function ind<T>(this: T[], item: T): number;
export declare function lstInd<T>(this: T[], item: T): number;
export declare function inArray<T>(this: T[], item: T): boolean;
export declare function forE<T>(this: T[], callback: (value: T, index: number, array: T[]) => void): void;
export declare function rdc<T>(this: T[], callback: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue?: T): T;
export declare function rdcR<T>(this: T[], callback: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue?: T): T;
export declare function fndInd<T>(this: T[], callback: (value: T, index: number, array: T[]) => boolean): number;
declare global {
    interface Array<T> {
        add(): T[];
        ind(item: T): number;
        lstInd(item: T): number;
        inArray(item: T): boolean;
        forE(callback: (value: T, index: number, array: T[]) => void): void;
        rdc(callback: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue?: T): T;
        rdcR(callback: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue?: T): T;
        fndInd(callback: (value: T, index: number, array: T[]) => boolean): number;
    }
}
//# sourceMappingURL=array.d.ts.map