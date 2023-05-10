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


## Iniciando com React

Componente
O arquivo App.js agora define um componente React com o nome App. 
```js
const ReactApp= () => (
    <h1>Olá, React!</h1>
    <div>
        <p>Eu sempre te odiei...</p>
        <p>Quem sabe agora eu não mudo de ideia?</p>
    </div>
)

export default ReactApp
```

O comando na linha final do arquivo index.js renderiza seu conteúdo dentro do elemento div, definido no arquivo public/index.html, com o valor de id 'root'.
```js
ReactDOM.createRoot(document.getElementById('root')).render(<App />)
```
_O nome "App" do componente React pode possuir qualquer nome, mas devemos ficar atentos aos locais onde ele está sendo chamado e definido._

Por padrão, o arquivo public/index.html não contém nenhum marcador HTML que seja visível para nós no navegador:
Você pode até tentar adicionar algum HTML ao arquivo, no entanto, ao usar React, todo o conteúdo que precisa ser renderizado é geralmente definido como "componentes React".

```js
const App = () => (
  <div>
    <p>Olá, mundo!</p>
  </div>
)
```
Neste bloco de código, uma função que não recebe parâmetros está sendo definida e aplicada a uma (variável) constante chamada App

Existem algumas maneiras de definir funções em JavaScript. Aqui usaremos as funções de seta (arrow functions)[1], que são descritas em uma versão mais recente de JavaScript conhecida como ECMAScript 6[2], também chamada de ES6.

Por conta da função consistir em apenas uma única expressão, usamos uma notação abreviada, que representa este trecho de código:
```js
const App = () => {
  return (
    <div>
      <p>Olá, mundo!</p>
    </div>
  )
}
```
Em outras palavras, a função retorna o valor da expressão.


## JSX

Apesar de parecer, os componentes React não estão retornando marcações HTML, a maior parte da estrutura de componentes é escrita usando JSX[3] (JavaScript Syntax Extension). Essa é uma sintaxe JavaScript idêntica ao HTML. Por baixo dos panos, o JSX retornado por componentes React é compilado em JavaScript.

Depois de compilada, a aplicação terá o formato a baixo
```js
const App = () => {
  const hoje = new Date()
  const a = 10
  const b = 20
  return React.createElement(
    'div',
    null,
    React.createElement(
      'p', null, 'Olá, mundo! Hoje é ', hoje.toString()
    ),
    React.createElement(
      'p', null, a, ' mais ', b, ' é ', a + b
    )
  )
}
```
A compilação é gerenciada pelo Babel[4]. Projetos criados com create-react-app são configurados para compilar automaticamente.

É possível escrever React como "JavaScript puro", conhecido como Vanilla, sem usar JSX, embora não seja recomendável.

Na prática, o JSX é muito parecido com HTML com a diferença de que, com o JSX, é possível inserir facilmente conteúdo dinâmico escrevendo código JavaScript dentro de chaves. A ideia do JSX é bastante semelhante a muitas linguagens de modelos, como Thymeleaf usado junto ao Java Spring, que são usadas em servidores.

JSX é "semelhante a XML" (Extensible Markup Language), o que significa que todas as tags precisam ser fechadas. Por exemplo, uma nova linha é um elemento vazio, que em HTML pode ser escrito da seguinte maneira:
```html
<br>
```
Mas ao escrever em JSX, a tag precisa ser fechada:
```jsx
<br />
```

Definimos um novo componente Hello (no caso Crazyness) e o usamos dentro do componente ReactApp. Naturalmente, um componente pode ser usado várias vezes:

Escrever componentes em React é fácil, e utilizando combinação de componentes mesmo uma aplicação mais complexa pode ser mantida de forma organizada. 

* De fato, uma das filosofias fundamentais do React é criar aplicações a partir de muitos componentes que são especializados e reutilizáveis.

Outra forte convenção é a ideia de um componente root chamado `App` no topo da árvore de componentes da aplicação. No entanto, há situações em que o componente `App` não é exatamente a raiz (root), mas é envolto em um componente utilitário apropriado.


## props: passando dados para componentes

É possível passar dados para componentes usando as chamadas props (properties).

```js
const Hello = (props) => {
  return (
    <div>
      <p>Olá {props.nome}</p>
    </div>
  )
}
``` 

Agora, a função que define o componente tem um parâmetro "props". Como argumento, o parâmetro recebe um objeto, que possui campos correspondentes a todas as "props" que o usuário do componente define.

As props são definidas da seguinte forma:
```js
const App = () => {
  return (
    <div>
      <h1>Olá a todos!</h1>
      <Hello nome='George' />
      <Hello nome='Daisy' />
    </div>
  )
}
```

É possível haver um número arbitrário de props e seus valores podem ser strings "hard-coded" (dados ou estruturas em um código que não podem ser alterados sem modificar manualmente o programa) ou resultados de expressões JavaScript. Se o valor da prop é obtido usando JavaScript, ele deve ser envolvido em chaves.
```jsx
//Chamada da função
<Crazyness js='JavaScript' jsx='JSX' react='React'/>

//Utilização dos parâmetros na função Crazyness
<p>
Essa coisa de {props.js} e {props.jsx}, {props.react}... loucura
</p>
```

tenha em mente que os nomes de componentes React devem estar com a primeira letra em maiúsculo. Se você tentar definir um componente da seguinte forma:

const footer = () => {
  return (
    <div>
      Aplicação de Saudações criado por <a href='https://github.com/mluukkai'>mluukkai</a>
    </div>
  )
}
E usá-lo desta forma:

const App = () => {
  return (
    <div>
      <h1>Olá a todos!</h1>
      <Hello nome='Maya' idade={26 + 10} />
      <footer />
    </div>
  )
}
A página não vai exibir o conteúdo definido dentro do componente Footer e, em vez disso, React cria apenas um elemento footer vazio, ou seja, o elemento HTML incorporado em vez do elemento React personalizado com o mesmo nome. Se você mudar a primeira letra do nome do componente para maiúsculo, o React cria um elemento div definido no componente Footer, que é renderizado na página.

Note que o conteúdo de um componente React (normalmente) precisa conter um elemento raiz (root). Se, por exemplo, tentarmos definir o componente App sem o elemento div externo:
```js
const App = () => {
  return (
    <h1>Olá a todos!</h1>
    <Hello nome='Maya' idade={26 + 10} />
    <Footer />
  )
}
```
o resultado é uma mensagem de erro. 

_(IMG error1.png)_

```js
const App = () => {
  return [
    <h1>Olá a todos!</h1>,
    <Hello nome='Maya' idade={26 + 10} />,
    <Footer />
  ]
}
```

Porém, definir o componente raiz da aplicação não é algo particularmente sábio a se fazer, e deixa o código com uma aparência um pouco feia.

Por conta do elemento raiz ser compulsório, temos elementos div "extras" na árvore DOM. Isso pode ser evitado usando fragmentos, ou seja, envolvendo os elementos a serem retornados pelo componente com um elemento vazio:
```js
const App = () => {
  const nome = 'Peter'
  const idade = 10

  return (
    <>
      <h1>Olá a todos!</h1>
      <Hello nome='Maya' idade={26 + 10} />
      <Hello nome={nome} idade={idade} />
      <Footer />
    </>
  )
}
```
* Agora, a aplicação compila com sucesso, e a DOM gerada pelo React não contém mais o elemento `div` extra.


### Não renderize objetos

Considere uma aplicação que imprime os nomes e idades de nossos amigos na tela:
```js
const App = () => {
  const amigos = [ 
      { nome: 'Peter', idade: 4 },
      { nome: 'Maya', idade: 10 },
    ]

  return (
    <div>
      <p>{amigos[0]}</p>
      <p>{amigos[1]}</p>
    </div>
  )
}

export default App
```

No entanto, nada aparece na tela e o console grita em vermelho.
*Objects are not valid as a React child*

O núcleo do problema é que: Objetos não são válidos como elementos-filho React, isto é, a aplicação tenta renderizar objetos e falha novamente.

O código tenta renderizar as informações de um amigo da seguinte maneira:
```jsx
<p>{amigos[0]}</p>
```

E isso causa um problema, porque o item a ser renderizado dentro das chaves é um objeto.
```jsx
{ nome: 'Peter', idade: 4 }
```

Em React, elementos individuais renderizadas dentro das chaves devem ser valores primitivos, como números ou strings.

A solução é a seguinte:
```jsx
const App = () => {
  const amigos = [ 
      { nome: 'Peter', idade: 4 },
      { nome: 'Maya', idade: 10 },
    ]

  return (
    <div>
      <p>{amigos[0].nome} {amigos[0].idade}</p>
      <p>{amigos[1].nome} {amigos[1].idade}</p>
    </div>
  )
}

export default App
```
O nome do amigo é renderizado separadamente dentro das chaves

Uma adição ao lembrete anterior: React também permite que arrays sejam renderizados se contiverem valores elegíveis para renderização (como números ou strings). Então, o seguinte programa funcionaria, embora o resultado não seja o que desejamos:
```jsx
const App = () => {
  const amigos = [ 'Peter', 'Maya']

  return (
    <div>
      <p>{amigos}</p>
    </div>
  )
}
```




[1] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
[2] http://es6-features.org/#Constants
[3] https://legacy.reactjs.org/docs/introducing-jsx.html
[4] https://babeljs.io/repl/