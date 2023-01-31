Configuração

vamos inicializar nosso projeto Node, instalar o TypeScript, o módulo npm com a configuração base do TSConfig para o Node 16 (ou superior) e criar nosso tsconfig.json.

em uma nova pasta de projeto.

`npm init -y`

`npm install -D typescript@4.4 @tsconfig/node16@1.0`

```
// altere o conteudo de ./tsconfig.json
{
  "extends": "@tsconfig/node16/tsconfig.json",
  "compilerOptions": {
    "target": "es2016",                                 
    "module": "commonjs",
    "rootDir": "./",
    "outDir": "./dist",
    "preserveConstEnums": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  }
}

```
Por fim, vamos instalar o pacote npm com as definições de tipos para o Node.js.

`npm install -D @types/node@16.11`

Em seguida, vamos criar dois arquivos: um chamado index.ts, que usaremos para testar o nosso módulo, e um chamado exercises.ts, onde faremos a implementação do nosso módulo com algumas funções.

crie os arquivos para o codigo
`touch index.ts && touch exercises.ts`


*criação dos codigos*



Em seguida, vamos compilar o nosso programa:

`npx tsc`

Nossos arquivos JavaScript foram gerados dentro do diretório dist. Agora, basta rodar o nosso programa compilado utilizando o Node.

`node ./dist/index.js`
