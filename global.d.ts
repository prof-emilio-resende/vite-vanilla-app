// global.d.ts
export {};

declare global {
    interface Window {
        navegar: (path: string) => void;
        criarItem: (event: FormDataEvent) => boolean;
        remover: (id: number) => void;
    }
}