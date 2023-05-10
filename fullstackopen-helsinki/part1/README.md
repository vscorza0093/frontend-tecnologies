# Introdução à biblioteca React

Instalando Create React App via gerenciador de pacotes do Node.JS `npm`
`npm install -g create-react-app`
A equipe recomenda que, caso o pacote tenha sido instalado globalmente, com a flag `-g` e há muito tempo, se desisntale via `npm unistall -g create-react-app` e instale novamente para garantir que o pacote está atualizado.

### Criando um novo aplicativo

    npx create-react-app my-app

-> O comando irá criar um novo diretório chamado "my-app" e todas as suas dependências, em seguida entramos no diretório e executamos `npm start`

usaremos sempre o `http://localhost:3000/` para acessar nossa aplicação 

Quando estivermos prontos para fazer a implantação do código, rodaremos o comando `npm run build` para empacotar o aplicativo em arquivos estáticos para produção.

`npm start` para inicializar o servidor de desenvolvimento
`npm test` para inicializar o tester
`npm run eject` remove essa ferramenta e copia as dependências de build, arquivos de configuração e scripts para o diretório do aplicativo. Esse comando não tem volta.
