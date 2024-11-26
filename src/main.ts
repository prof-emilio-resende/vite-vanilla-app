import './index.css';

function hello() {
    console.log('hello!');
}

export function navegar(path: string): void {
    window.location.href=path;
}

function main () {
    hello();
    window.navegar = navegar;
}
main();