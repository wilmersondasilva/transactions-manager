# Transactions Manager

## Sobre minhas decisões

Inicialmente, iria usar React.js mas tive imprevistos pessoais que me reduziram bastante o tempo disponível para trabalhar no teste. Então, como não uso React.js  há 1 ano e o framework JavaScript que me sinto mais confortável atualmente é o Vue.js, escolhi usá-lo.

Criei o projecto usando o Vue-CLI. Estou usando VueX para gerenciamento de estado e Vue-Router para roteamento.

Para testes unitários escolhi Jest e para testes e2e, Cypress. Contudo, não tive tempo hábil para escrever os testes e2e. Configurei um git hook para rodar os testes unitários antes de cada git push.

Para CSS, decidi não usar nenhum framework e utilizei o Stylus como prepocessador.

Estou seguindo o style guide oficial do Vue.js: https://vuejs.org/v2/style-guide/

Gostaria muito de ter tido mais tempo para trabalhar nesse projeto. Deixei para fazer os testes no final e fiquei sem tempo para alcançar uma boa cobertura de testes.

## Setup do projeto
```
npm install
```

### Compila e serve a aplicação com hot-reload para ambiente de desenvolvimento
```
npm run serve
```

### Compila e minifica para produção
```
npm run build
```

### Executa os testes unitários
```
npm run test:unit
```

### Lints
```
npm run lint
```
