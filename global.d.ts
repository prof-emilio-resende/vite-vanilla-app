// global.d.ts
export {};

declare global {
    interface Window {
        navegar: (path: string) => void;
    }
}