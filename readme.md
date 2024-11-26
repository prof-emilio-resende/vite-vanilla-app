# 1. Criar projeto

```bash
mkdir htmlApp
cd htmlApp
npm init -y
npm install -D typescript @types/node ts-node
npx tsc --init
```

## remova o comentário de algumas configurações do arquivo tsconfig.json

```json
{
    // ...
    "rootDir": "./src",
    "sourceMap": true
    // ...
}
```

# 2. Adicionar vite

```bash
npm install -D vite
mkdir src
touch main.ts
```

```typescript
// main.ts
function hello() {
    console.log("hello!");
}

hello();
```

```html
<!-- index.html -->
<!DOCTYPE html>
<html>
    <body>
        Ol&aacute; vite e typescript!
    </body>
    <script type="module" src="/src/main.ts"></script>
</html>
```

## execute o comando vite para testar a configuração
```bash
vite
```

> digite ctrl+C para cancelar a execução após o teste

## altere o package.json para criar os scripts vite

```json
// ...
"scripts": {
    "dev": "vite",
    "build": "vite build"
},
// ...
```

> a partir de agora vamos sempre iniciar o vite usando 
> ```bash
> npm run dev
> ```

# 3. Adicionar tailwindcss

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

## ajuste o conteúdo de tailwind.config.js
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## adicione um novo arquivo para css e insira as diretivas do tailwind css
```bash
touch src/index.css
```
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## adicione conteúdo tailwindcss no index.html
```html
<!-- ... -->
 <h1 class="text-3xl text-red-500">Ol&aacute; vite e typescript!!!</h1>
 <!-- ... -->
```

# 4. Ajustar estrutura de diretório
Mova o arquivo index.html para a pasta src e ajuste a importação do main.ts
```bash
mv index.html src/index.html
```

```html
<!-- ... -->
 <script type="module" src="./main.ts"></script>
 <!-- ... -->
```

## Crie o arquivo de configuração do vite
```bash
touch vite.config.mjs
```

```javascript
// vite.config.mjs
import { defineConfig } from "vite";

export default defineConfig({
    root: "./src"
});

```

Ajuste a configuração do tailwind para ler todos os arquivos dentro de src
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,html}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

# 4. Crie a nova página src/login/index.html e adicione o conteúdo

```bash
cd src
mkdir login
touch index.html
```
[conteudo](https://github.com/prof-emilio-resende/vite-vanilla-app/blob/main/src/login/index.html)

# 5. Crie a nova página src/signup/index.html e adicione o conteúdo

```bash
cd src
mkdir signup
touch index.html
```
[conteudo](https://github.com/prof-emilio-resende/vite-vanilla-app/blob/main/src/signup/index.html)

# 6. Adicionando navegação entre as telas

Agora que criamos duas páginas, vamos implementar a navegação entre elas:

## criando a função de navegação
```typescript
export function navegar(path: string): void {
    window.location.href=path;
}
```
> Essa função realiza a navegação conforme parâmetro de entrada (sem validação)

## fazendo a chamada da nova função no HTML
```html
<!-- ... -->
<button onclick="navegar('/signup/')" ... >
<!-- ... -->
```

> Porém é necessário fazer a associação da nova função ao objeto window, para que essa função possa ser usada
```javascript
  window.navegar = navegar;
```

Após essa chamada, o compilador do typescript vai apontar que não existe a função navegar prevista na definição do objeto window. Vamos fazer a estensão dessa interface para que o erro pare de aparecer:

## Crie um novo arquivo global.d.ts
```bash
touch global.d.ts
```

```typescript
// global.d.ts
export {};

declare global {
    interface Window {
        navegar: (path: string) => void;
    }
}
```

# 7. Crie a nova página src/todo/index.html e adicione o conteúdo

```bash
cd src
mkdir todo
touch index.html
```
[conteudo](https://github.com/prof-emilio-resende/vite-vanilla-app/blob/main/src/todo/index.html)

# 8. Crie a nova página src/todo/create/index.html e adicione o conteúdo

```bash
cd src/todo
mkdir create
touch index.html
```
[conteudo](https://github.com/prof-emilio-resende/vite-vanilla-app/blob/main/src/todo/create/index.html)

# 9. Carregando listagem de tarefas de uma API

Para prover um comportamento especializado para a página de TODO, vamos criar um novo arquivo .ts (todo.ts) e vincular ao carregamento de scripts da página todo/index.html

```bash
touch todo.ts
```

[conteudo](https://github.com/prof-emilio-resende/vite-vanilla-app/blob/main/src/todo.ts)

> Altere o index.html para carregar o novo script
```html
<!-- ... -->
<div id="todoList" class="flex flex-col justify-center align-middle items-center space-y-5 w-full"></div>
<!-- ... -->
```