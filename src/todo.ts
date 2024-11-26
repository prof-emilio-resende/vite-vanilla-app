import './index.css';

interface TodoEntity {
    id: number;
    title: string;
    description: string;
    status: string;
}

async function getAll() {
    const res = await fetch("http://localhost:3000/api/todo");
    const data = res.json();
    console.log(data);
    return data;
}

async function feedTodoList() {
    const rawTodoList = await getAll();
    const todoList = rawTodoList as Array<TodoEntity>;
    console.log(JSON.stringify(todoList));
    document.querySelector("#todoList")!.innerHTML = todoList.map(t => createCard(t)).join(" ");
}

function createTag(status: string) {
    const styleClasses = {
        "Pendente": "bg-gray-800 text-white",
        "Em andamento": "bg-yellow-500 text-black",
        "Finalizado": "bg-green-500 text-white"
    } as Record<string, string>;

    return `
    <div class="flex flex-row justify-end">
        <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-light transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${styleClasses[status]}">
            ${status}
        </div>
    </div>
    `;
}

function createCard(todo: TodoEntity) {
    return `
    <div class="rounded-lg border bg-card text-card-foreground shadow-sm w-11/12">
            <div class="flex flex-col space-y-1.5 p-5">
                <div class="flex flex-row justify-between align-middle">
                    <h1>${todo.title}</h1>
                    <svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 1C5.22386 1 5 1.22386 5 1.5C5 1.77614 5.22386 2 5.5 2H9.5C9.77614 2 10 1.77614 10 1.5C10 1.22386 9.77614 1 9.5 1H5.5ZM3 3.5C3 3.22386 3.22386 3 3.5 3H5H10H11.5C11.7761 3 12 3.22386 12 3.5C12 3.77614 11.7761 4 11.5 4H11V12C11 12.5523 10.5523 13 10 13H5C4.44772 13 4 12.5523 4 12V4L3.5 4C3.22386 4 3 3.77614 3 3.5ZM5 4H10V12H5V4Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                </div>
                <div>
                    <p class="text-slate-500 font-medium">${todo.description}</p>
                </div>
                ${createTag(todo.status)}
            </div>
        </div>
    `;
}

window.onload = function() {
    feedTodoList();
}