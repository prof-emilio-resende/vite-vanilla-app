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
    "sourceMap": true, 
    // ...
}
```

# 2. Adicionar vite

