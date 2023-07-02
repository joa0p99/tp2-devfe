# Trabalho prático 2 - Angular

Integrantes
- João Paulo do Nascimento (0056161)
- Vinícius Rodrigues Ferreira (0026332)
- Eduardo Fernandes Silva (0026654)

## Como rodar este projeto?

1. Na pasta raiz abra o terminal e digite `npm start`feito isso o projeto angular estará em execução.
2. agora você deve subir o servidor para na pasta raiz do projeto execute `json-server --watch db.json --port 4201`, passe esse número de porta pois provalavelmente ela estará apta a ser usada, caso outro número de porta seja passado a aplicação não irá funcionar pois a porta deverá ser mudada no código, mais especificamente em `detalhes.component.ts` na linha 31 e `nomes.component.ts` na linha 10.

IMPORTANTE: Se ao tentar subir o servidor (etapa 2) e a porta 3000 já estiver em uso por alguma outra aplicação você receberá um erro do tipo `Error: listen EADDRINUSE: address already in use :::PORT`, para resolver este problema você deve parar a aplicação que roda nesta porta executanto `fuser -k 3000/tcp` no Linux.


## Bibliotecas/módulos/pacotes utilizados
Para criar o servidor foi preciso instalar o pacote json-server com o comando `npm install -g json-server`. Json-server é um módulo npm, usado para criar uma API REST, com isso foi possível criar o dados do banco de dados fictício `db.json` no formato JSON.
Para que o front-end comunique com o servidor pelo protocolo HTTP foi necessário também adicionar ao projeto o módulo HttpClient do Angular.
