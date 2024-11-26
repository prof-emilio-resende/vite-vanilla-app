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

```bash
vite
```

## altere o package.json para criar os scripts vite

```json
// ...
"scripts": {
    "dev": "vite",
    "build": "vite build"
},
// ...
```
