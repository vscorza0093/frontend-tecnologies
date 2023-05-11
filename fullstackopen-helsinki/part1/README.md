# Todo conteúdo contido aqui é provido do material do curso fullstackopen da Universidade de Helsinki, mas podem conter anotações feitas por mim

## Material completo:
https://fullstackopen.com/


## Introdução à biblioteca React

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

JavaScript evoluiu rapidamente nos últimos anos e, neste curso, usamos as funcionalidades das versões mais recentes. O nome oficial do padrão de JavaScript é ECMAScript. Atualmente, a versão mais recente é a lançada em junho de 2022 com o nome de ECMAScript®2022, também conhecido como ES13.

Os navegadores ainda não suportam todas as funcionalidades mais recentes de JavaScript e devido a esse fato, muito código executado em navegadores é transpilado de uma versão mais recente de JavaScript para uma versão mais antiga e compatível.

Hoje em dia, a maneira mais popular de fazer a transpilação é usando o transcompilador Babel. A transpilação é configurada automaticamente em aplicações React criadas com create-react-app. Vamos olhar mais de perto a configuração de transpilação na Parte 7 deste curso.

Node.js é um ambiente de tempo de execução JavaScript baseado no motor JavaScript Chrome V8 da Google e funciona praticamente em qualquer lugar, desde servidores até telefones celulares. Vamos praticar a escrita de código JavaScript usando Node. As versões mais recentes do Node são compatíveis com as versões mais recentes de JavaScript, então o código não precisa ser transpilado.

O código é escrito em arquivos com extensão .js que são executados ao emitir o comando node nome_do_arquivo.js

Também é possível escrever código JavaScript na console do Node.js, que pode ser aberta digitando "node" na linha de comando, bem como na aba Console nas Ferramentas do Desenvolvedor do navegador. As revisões mais recentes do Chrome lidam bem com as novas funcionalidades de JavaScript sem precisar transpilar o código. Alternativamente, você pode usar uma ferramenta como JS Bin.


## Arrays

Um array e alguns exemplos de seu uso:
```js
const t = [1, -1, 3]

t.push(5)

console.log(t.length) // 4 é impresso
console.log(t[1])     // -1 é impresso

t.forEach(value => {
  console.log(value)  // os números 1, -1, 3, 5 são impressos, cada um em sua própria linha
}) 
```

O importante neste exemplo é o fato de que o conteúdo do array pode ser modificado mesmo que seja definido como uma const. Por conta do array ser um objeto, a variável sempre aponta para o mesmo objeto. No entanto, o conteúdo do array muda à medida que novos itens são adicionados a ele.

Uma forma de iterar através dos itens do array é usando forEach, como visto no exemplo. forEach recebe uma função definida usando a sintaxe de seta como parâmetro.
```js
value => {
  console.log(value)
}
```
forEach chama a função para cada um dos itens no array, sempre passando o item individual como argumento. A função como argumento de forEach também pode receber outros argumentos[5].

No exemplo anterior, um novo item foi adicionado ao array usando o método push. Quando se usa React, técnicas de programação funcional são comumente usadas. Uma característica do paradigma de programação funcional é o uso de estruturas de dados imutáveis. No código React, é preferível usar o método concat, que não adiciona o item ao array, mas cria um array novo no qual o conteúdo do antigo array e o novo item são ambos incluídos.
```js
const t = [1, -1, 3]

const t2 = t.concat(5)

console.log(t)  // [1, -1, 3] é impresso
console.log(t2) // [1, -1, 3, 5] é impresso
```

Há muitos métodos úteis definidos para arrays. Vamos dar uma olhada em um pequeno exemplo de uso do método map[6].
```js
const t = [1, 2, 3]

const m1 = t.map(valor => valor * 2) // *Espécie de compreensão de lista (?)*
console.log(m1)   // [2, 4, 6] é impresso
```
Com base no array antigo, o map cria um array novo, para o qual a função dada como parâmetro é usada para criar os itens. No caso deste exemplo, o valor original é multiplicado por dois.

O map também pode transformar o array em algo completamente diferente:
```js
const m2 = t.map(valor => '<li>' + valor + '</li>')
console.log(m2)  
// [ '<li>1</li>', '<li>2</li>', '<li>3</li>' ] é impresso
```
Aqui, um array preenchido com valores inteiros é transformado em um array contendo strings de HTML usando o método map.

Itens individuais de um array são fáceis de atribuir a variáveis com a ajuda da atribuição via desestruturação (destructuring assignment) [7].
```js
const t = [1, 2, 3, 4, 5]

const [primeiro, segundo, ...resto] = t

console.log(primeiro, segundo)  // 1, 2 é impresso
console.log(resto)          // [3, 4, 5] é impresso
```

Graças à atribuição, as variáveis primeiro e segundo receberão os dois primeiros inteiros do array como seus valores. Os inteiros restantes são "coletados" em um array próprio que é então atribuído à variável resto.

Objetos
Existem algumas formas diferentes de se definir objetos em JavaScript. Um método muito comum é usar objetos literais (object literals)[8], que ocorre listando suas propriedades dentro de chaves:
```js
const objeto1 = {
  nome: 'Arto Hellas',
  idade: 35,
  educacao: 'PhD',
}

const objeto2 = {
  nome: 'Desenvolvimento de aplicações web Full Stack',
  nivel: 'Estudos intermediários',
  tamanho: 5,
}

const objeto3 = {
  nome: {
    primeiro: 'Dan',
    ultimo: 'Abramov',
  },
  notas: [2, 3, 5, 3],
  departamento: 'Universidade Stanford',
}
```
Os valores das propriedades podem ser de qualquer tipo, como inteiros, strings, arrays, objetos...

As propriedades de um objeto são referenciadas usando a notação de "ponto", ou usando colchetes:
```js
console.log(objeto1.nome)         // Arto Hellas é impresso
const nomePropriedade = 'idade' 
console.log(objeto1[nomePropriedade])    // 35 é impresso
```

Você também pode adicionar propriedades a um objeto em tempo de execução usando a notação de ponto ou colchetes:
```js
objeto1.endereco = 'Helsinque' // *endereço
objeto1['numero secreto'] = 12341
```
* A última adição representada acima tem que ser feita usando colchetes porque, quando se usa a notação de ponto, numero secreto não é um nome de propriedade válido devido ao caractere de espaço separando as duas palavras.









[1] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
[2] http://es6-features.org/#Constants
[3] https://legacy.reactjs.org/docs/introducing-jsx.html
[4] https://babeljs.io/repl/
[5] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
[6] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
[7] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
[8] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Object_literals