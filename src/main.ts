import './index.css';
import { TodoEntity } from './todo.entity';

function hello() {
    console.log('hello!');
}

export function navegar(path: string): void {
    window.location.href = path;
}

export function criarItem(event: FormDataEvent) {
    event.preventDefault();
    
    const titleElement = document.querySelector("#title") as HTMLInputElement;
    const descriptionElement = document.querySelector("#description") as HTMLTextAreaElement;
    const entity = {
        title: titleElement.value,
        description: descriptionElement.value,
        status: "Pendente"
    } as TodoEntity;
    console.log('enviando todo:');
    console.log(entity);
    fetch(
        new Request("http://localhost:3000/api/todo/", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(entity)
    }))
        .then(_ => navegar("/todo/"));
    
    return false;
}

function main() {
    hello();
    window.navegar = navegar;
    window.criarItem = criarItem;
}
main();