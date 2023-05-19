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

Objetos também podem ser definidos usando funções construtoras, o que resulta em um mecanismo semelhante a muitas outras linguagens de programação, como Java. Apesar desta semelhança, o JavaScript não tem classes tal qual outras linguagens de programação orientadas a objetos. No entanto, a partir da versão ES6, foi adicionada a sintaxe para classes, o que em alguns casos ajuda a estruturar classes orientadas a objetos.

## Funções

Funções podem adotar sintaxes bastante versáteis em JavaScript graças às arrow functions.

Se uma arrow function possuir apenas um parâmetro, podemos excluir os parênteses, na hora de defini-la
```js
const quadrado = p => {
  console.log(p)
  return p * p
}
```
Se a função contiver apenas uma expressão, então as chaves não são necessárias. Neste caso, a função retorna apenas o resultado de sua única expressão.
```js
const quadrado = p => 
  return p * p
```
Mas podemos fazer uma maneira ainda mais sofisticada
```js
const quadrado = p => p * p
```

Este formato é particularmente útil ao manipular arrays, como quando usamos o método "map":
```js
const t = [1, 2, 3]
const tAoQuadrado = t.map(p => p * p)
// tAoQuadrado agora é [1, 4, 9]
```
A funcionalidade da arrow function foi adicionada ao JavaScript há apenas alguns anos, com a versão ES6. Antes disso, a única maneira de definir funções era usando a palavra-chave function.

Existem duas maneiras de se referenciar uma função; uma é atribuir um nome em uma declaração de função (function declaration).
```js
function produto(a, b) {
  return a * b
}

const resultado = produto(2, 6)
// resultado agora é 12
```
Outra maneira de definir uma função é usando uma expressão de função (function expression). Neste caso, não é necessário atribuir um nome à função, e a definição pode residir dentro do restante do código:
```js
const media = function(a, b) { // *média
  return (a + b) / 2
}

const resultado = media(2, 5)
// resultado agora é 3.5
```
Durante este curso, todas as funções serão definidas usando a sintaxe de seta.


## Métodos de objetos e "this"

Como este curso usa uma versão de React que contém React Hooks, não é necessário definir objetos com métodos. O conteúdo deste capítulo não é relevante para o curso, mas certamente é bom conhecer. Em particular, ao usar versões antigas de React, é necessário compreender os tópicos deste capítulo.

Arrow functions e funções definidas usando a palavra-chave function variam substancialmente em relação ao comportamento da palavra-chave this, que se refere ao próprio objeto.

Podemos atribuir métodos a um objeto definindo propriedades que são funções:
```js
const arto = {
  nome: 'Arto Hellas',
  idade: 35,
  educacao: 'PhD', // *educação
  cumprimentar: function() { // *saudação
    console.log('olá, meu nome é ' + this.nome)
  },
}

arto.cumprimentar()  // "olá, meu nome é Arto Hellas" é impresso
```
Métodos podem ser atribuídos a objetos mesmo após a criação do objeto:
```js
const arto = {
  nome: 'Arto Hellas',
  idade: 35,
  educacao: 'PhD',
  cumprimentar: function() {
    console.log('olá, meu nome é ' + this.nome)
  },
}

arto.envelhecer = function() {
  this.idade += 1
}

console.log(arto.idade)   // 35 é impresso
arto.envelhecer()
console.log(arto.idade)   // 36 é impresso
```
Vamos modificar um pouco o objeto:
```js
const arto = {
  nome: 'Arto Hellas',
  idade: 35,
  educacao: 'PhD',
  cumprimentar: function() {
    console.log('olá, meu nome é ' + this.nome)
  },
  fazerAdicao: function(a, b) { // *fazerAdição
    console.log(a + b)
  },
}

arto.fazerAdicao(1, 4)        // 5 é impresso

const referenciaParaAdicao = arto.fazerAdicao
referenciaParaAdicao(10, 15)   // 25 é impresso
```
Agora, o objeto tem o método fazerAdicao, que calcula a soma dos números dados a ele como parâmetros. O método é chamado da maneira tradicional, usando o objeto arto.fazerAdicao(1, 4) ou armazenando uma referência ao método em uma variável e chamando o método através da variável: referenciaParaAdicao(10, 15).

Se tentarmos fazer o mesmo com o método cumprimentar, deparamo-nos com um problema:
```js
arto.cumprimentar()       // "olá, meu nome é Arto Hellas" é impresso

const referenciaParaCumprimentar = arto.cumprimentar
referenciaParCumprimentar() // "olá, meu nome é undefined" é impresso
```

Ao chamar o método através de uma referência, o método perde o conhecimento do que era o this original. Ao contrário de outras linguagens, em JavaScript, o valor de this é definido com base em como o método é chamado. Ao chamar o método através de uma referência, o valor de this se torna o chamado objeto global (global object) e o resultado final sai geralmente diferente do que o desenvolvedor originalmente pretendeu.

Perder o rastro do this ao escrever código JavaScript traz alguns problemas eventuais. Algumas situações frequentemente surgem onde React ou o Node (ou mais especificamente o motor JavaScript do navegador) precisa chamar algum método em um objeto que o desenvolvedor tenha definido. No entanto, neste curso, evitamos esses problemas usando o JavaScript "sem this".

Uma situação que leva ao "desaparecimento" do this ocorre quando definimos um tempo limite para chamar a função cumprimentar no objeto arto, usando a função setTimeout.
```js
const arto = {
  nome: 'Arto Hellas',
  cumprimentar: function() {
    console.log('olá, meu nome é ' + this.nome)
  },
}

setTimeout(arto.cumprimentar, 1000)
```
Como mencionado, o valor de this em JavaScript é definido com base na forma como o método é chamado. Quando o setTimeout está chamando o método, é o motor JavaScript que realmente chama o método e, nesse ponto, this se refere ao objeto global.

Existem vários mecanismos pelos quais o this original pode ser preservado. Um desses é usando um método chamado bind (significa amarrar ou atar):
```js
setTimeout(arto.cumprimentar.bind(arto), 1000)
```
Chamar arto.cumprimentar.bind(arto) cria uma nova função onde this é obrigado a apontar para Arto, independentemente de onde e como o método está sendo chamado.

Usando Arrow functions é possível resolver alguns dos problemas relacionados ao this. No entanto, eles não devem ser usados como métodos para objetos, pois o this não funciona de forma alguma. Mais tarde, voltaremos a discutir o comportamento da palavra-chave this em relação às arrow functions.

Se deseja compreender de fato como this funciona em JavaScript, a Internet está cheia de material sobre o assunto como, por exemplo, a série screencast Understand JavaScript's this Keyword in Depth por egghead.io, que é extremamente recomendada!


## Classes

Como mencionado anteriormente, não há um "mecanismo" de classes em JavaScript como os de linguagens de programação orientadas a objetos. No entanto, há funcionalidades para tornar possível a "simulação" de classes orientadas a objetos.

Vamos dar uma olhada na sintaxe para classes que foi introduzida ao JavaScript com o ES6, o que simplifica substancialmente a definição de classes (ou estruturas semelhantes a classes) em JavaScript.

No exemplo a seguir, definimos uma "classe" chamada Pessoa e dois objetos Pessoa:
```js
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome
    this.idade = idade
  }
  cumprimentar() {
    console.log('olá, meu nome é ' + this.nome)
  }
}

const adam = new Pessoa('Adam Ondra', 29)
adam.cumprimentar()

const janja = new Pessoa('Janja Garnbret', 23)
janja.cumprimentar()
```

Quanto à sintaxe, as classes e os objetos criados a partir delas são muito semelhantes às classes e objetos Java. Seu comportamento também é bastante semelhante aos objetos Java. Mas em seu mecanismo interno, ainda são objetos baseados na herança prototipal [9] de JavaScript. O tipo de ambos os objetos é, na verdade, Object, uma vez que o JavaScript essencialmente define apenas os tipos Boolean, Null, Undefined, Number, String, Symbol, BigInt e Object.

A inserção da sintaxe para classes foi uma adição controversa. Confira Not Awesome: ES6 Classes [10] ou Is “Class” In ES6 The New “Bad” Part? on Medium [11] para mais detalhes.

A sintaxe para classe ES6 é muito utilizada no "antigo" React e também no Node.js, portanto, é benéfico ter compreensão dela mesmo neste curso. Entretanto, como estaremos usando a nova funcionalidade Hooks do React ao longo deste curso, não teremos uso concreto da sintaxe para classes de JavaScript.


## Materiais de JavaScript

Existem guias bons e ruins para JavaScript na Internet. A maioria dos links nesta página relacionados às funcionalidades de JavaScript referem-se ao Guia JavaScript da Mozilla.

É recomendado ler imediatamente o artigo A re-introduction to JavaScript (JS tutorial) [12] no site da Mozilla .

Se deseja conhecer profundamente JavaScript, há uma ótima série de livros gratuitos na Internet chamada You-Dont-Know-JS [13].

Outra ótima fonte para aprender JavaScript é javascript.info.

O extremamente cativante e gratuito Eloquent JavaScript [14] te leva rapidamente dos conceitos básicos à construção de aplicações muito interessantes. É uma mistura de teoria, projetos e exercícios, e cobre tanto a teoria geral de programação quanto a linguagem JavaScript.

egghead.io possui muitos screencasts de qualidade sobre JavaScript, React e outros tópicos interessantes. Infelizmente, alguns dos materiais só são acessíveis na versão paga.


## Funções auxiliares de componentes

Vamos expandir nosso componente Hello para que ele adivinhe o ano de nascimento da pessoa que está sendo saudada:
```js
const Hello = (props) => {
  const anoDeNascimento = () => {
    const anoDeHoje = new Date().getFullYear()
    return anoDeHoje - props.idade
  }

  return (
    <div>
      <p>
        Olá {props.nome}, você tem {props.idade} anos.
      </p>
      <p>Então, você nasceu provavelmente em {anoDeNascimento()}.</p>
    </div>
  )
}
```
A lógica para achar o ano de nascimento é separada em uma função que é chamada quando o componente é renderizado.

A idade da pessoa não precisa ser passada como parâmetro para a função, já que ela pode acessar diretamente todas as propriedades que são passadas para o componente.

Se examinarmos nosso código atual de perto, vamos perceber que a função "auxiliadora" é definida dentro de outra função que define o comportamento de nosso componente. Em Java, definir uma função dentro de outra é algo complexo e incômodo, portanto, não é algo muito comum. Em JavaScript, entretanto, definir funções dentro de funções é uma técnica amplamente usada.


## Desestruturação (Destructuring)

Antes de avançarmos, vamos dar uma olhada em uma pequena, porém útil, funcionalidade da linguagem JavaScript que foi adicionada na especificação ES6, que nos permite desestruturar (destructuring assignment [atribuição via desestruturação]) valores de objetos e arrays por atribuição.

Em nosso código anterior, tivemos que referenciar os dados passados para nosso componente como props.nome e props.idade. Dessas duas expressões, tivemos que repetir props.idade duas vezes em nosso código.

Já que props é um objeto...
```js
props = {
  nome: 'Arto Hellas',
  idade: 35,
}
```
... podemos simplificar nosso componente atribuindo os valores das propriedades diretamente em duas variáveis nome e idade que podemos utilizar em nosso código:
```js
const Hello = (props) => {
  const nome = props.nome
  const idade = props.idade

  const anoDeNascimento = () => new Date().getFullYear() - idade

  return (
    <div>
      <p>Olá {nome}, você tem {idade} anos</p>
      <p>Então, você nasceu provavelmente em {anoDeNascimento()}.</p>
    </div>
  )
}
```

A desestruturação torna a atribuição de variáveis ainda mais fácil, já que podemos usá-la para extrair e reunir os valores das propriedades de um objeto em variáveis separadas:
```js
const Hello = (props) => {
  const { nome, idade } = props
  const anoDeNascimento = () => new Date().getFullYear() - idade

  return (
    <div>
      <p>Olá {nome}, você tem {idade} anos.</p>
      <p>Então, você provavelmente nasceu em {anoDeNascimento()}.</p>
    </div>
  )
}
```
Se o objeto que estamos desestruturando tem os valores...
```js
props = {
  nome: 'Arto Hellas',
  idade: 35,
}
```
... a expressão `const { nome, idade } = props` atribui os valores 'Arto Hellas' para nome e 35 para idade.

Podemos levar a desestruturação um passo adiante:
```js
const Hello = ({ nome, idade }) => {
  const anoDeNascimento = () => new Date().getFullYear() - idade

  return (
    <div>
      <p>
        Olá {nome}, você tem {idade} anos.
      </p>
      <p>Então, você provavelmente nasceu em {anoDeNascimento()}.</p>
    </div>
  )
}
```
As props que são passadas para o componente agora são diretamente desestruturadas nas variáveis nome e idade.

Isso significa que, em vez de atribuir o objeto props inteiro a uma variável chamada props e, em seguida, atribuir suas propriedades às variáveis nome e idade, nós atribuímos os valores das propriedades diretamente para variáveis ​​por meio da desestruturação do objeto props que é passado como parâmetro à função do componente:
```js
const Hello = ({ nome, idade }) => {}
```

## Re-renderização da página

Até agora, todas as nossas aplicações foram escritas de tal forma que sua aparência permanece a mesma após a renderização inicial. E se quiséssemos criar um contador onde o valor aumentasse em função do tempo ou com um clique em um botão?

Vamos começar com o seguinte. O arquivo App.js fica assim:
```js
const App = (props) => {
  const {contador} = props
  return (
    <div>{contador}</div>
  )
}

export default App
```

E o arquivo index.js fica desta forma:

```js
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

let contador = 1

ReactDOM.createRoot(document.getElementById('root')).render(
  <App contador={contador} />
)
```

É dado ao componente "App" o valor do contador via a prop contador. Este componente renderiza o valor na tela. O que acontece quando o valor de contador muda? Mesmo se adicionarmos o seguinte...
```js
contador += 1
```
... o componente não será re-renderizado. Podemos fazer com que o componente seja re-renderizado chamando o método render uma segunda vez, por exemplo, da seguinte maneira:
```js
let contador = 1

const recarregar = () => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <App contador={contador} />
  )
}

recarregar()
contador += 1
recarregar()
contador += 1
recarregar()
```

O comando de re-renderização foi embalado dentro da função recarregar para diminuir a quantidade de código copiado e colado.

Agora, o componente renderiza três vezes: primeiro com o valor 1; depois 2 e finalmente 3. Porém, os valores 1 e 2 são exibidos na tela por um período tão curto de tempo que não podem nem ser notados.

Podemos implementar uma funcionalidade um pouco mais interessante re-renderizando e incrementando o contador a cada segundo usando setInterval ("definir intervalo"):
```js
setInterval(() => {
  recarregar()
  contador += 1
}, 1000)
```
Fazer repetidas chamadas ao método render não é a forma recomendada de re-renderização de componentes.

## Componente "Stateful" (ou Componente com Estado)

Todos os nossos componentes até agora foram simples no sentido de que não continham nenhum estado que pudesse mudar durante o ciclo de vida do componente.

Então, vamos adicionar um "estado" ao componente App com a ajuda do state hook (Grosso modo, "gancho de estado", isto é, são funções que permitem a você “ligar-se” aos recursos de estado (state) e ciclo de vida do React a partir de componentes funcionais) do React.

A aplicação será alterada da seguinte forma. O código de index.js retorna para:
```js
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
```
E o código de App.js muda para o seguinte:
```js
import { useState } from 'react'

const App = () => {
  const [ contador, setContador ] = useState(0)

  setTimeout(
    () => setContador(contador + 1),
    1000
  )

  return (
    <div>{contador}</div>
  )
}

export default App
```

Na primeira linha, o arquivo importa a função useState
O corpo da função que define o componente começa com a chamada da função:
```js
const [ contador, setContador ] = useState(0)
```
A chamada da função adiciona estado (state) ao componente e o renderiza inicializado com o valor 0 (zero). A função sempre retorna um array que contém dois itens. Atribuímos os itens às variáveis contador e setContador usando a sintaxe de atribuição via desestruturação mostrada anteriormente.

A variável contador é atribuída ao valor inicial de estado, que é zero. A variável setContador é atribuída a uma função que será usada para modificar o estado.

A aplicação chama a função setTimeout ("definir intervalo") e passa dois parâmetros: uma função para incrementar o estado do contador e um tempo de espera de 1000 milissegundos, que é o mesmo que 1 segundo:
```js
setTimeout(
  () => setContador(contador + 1),
  1000
)
```
Artigo sobre State, o funcionamento do estado atual de um elemento numa página com código React https://react.dev/learn/state-a-components-memory

Ótimo para entender um pouco mais sobre o State Hook.

O useState Hook provém uma variável de estado que retém o valor entre as renderizações e uma função para setar um estado, que atualiza o valor da variável de estado e aciona o React para renderizar o componente de novo.

Usar a sintaxe de desestruturação de array é ideal para armazenar os valores contidos em useState() já que a função sempre retornará um array de tamanho 2 (array[2])

Uma função set funciona como `setSomething(nextState)` e deve estar dentro de algum event handler como setTimeout() ou handleClick para funcionar adequadamente. 
A cada nova renderização, `setSomething(nextState)` irá agir, realizando a tarefa necessária.



## Gerenciamento de eventos (Event handling)

Na Parte 0, falamos rapidamente sobre os gerenciadores de eventos, que são registrados para serem chamados quando eventos específicos ocorrem várias vezes. A interação de um usuário com os diferentes elementos de uma página web pode causar uma coleção de vários tipos de eventos a serem acionados.

Vamos mudar a aplicação para que o aumento do contador aconteça quando um usuário clicar em um botão, que é implementado com o elemento button (botão).

Os elementos de botão suportam os chamados mouse events (Eventos de Mouse), dos quais click é o evento mais comum. O evento click em um botão também pode ser acionado com o teclado ou com uma tela touch screen, apesar de serem "evento de mouse".

Em React, registra-se uma event handler function (função gerenciadora de eventos) para o evento click desta forma:
```js
const App = () => {
  const [ contador, setContador ] = useState(0)
  
  const handleClique = () => {
    console.log('clicado')
  }

  return (
    <div>
      <div>{contador}</div>
      <button onClick={handleClique}>
        mais+
      </button>
    </div>
  )
}
```
Definimos o valor do atributo onClick do botão como uma referência à função handleClique definida no código.

A cada clique no botão mais+, a função handleClique é chamada, o que significa que a cada evento de clique uma mensagem clicado será registrada no console do navegador.

A função gerenciadora de eventos também pode ser definida diretamente na atribuição de valor do atributo "onClick":
```js
const App = () => {
  const [ contador, setContador ] = useState(0)

  return (
    <div>
      <div>{contador}</div>
      <button onClick={() => console.log('clicado')}>
        mais+
      </button>
    </div>
  )
}
```
Ao mudar a função gerenciadora de eventos para a seguinte forma:
```js
<button onClick={() => setContador(contador + 1)}>
  mais+
</button>
```
atingimos o comportamento desejado, ou seja, o valor de contador é incrementado em 1 e o componente é re-renderizado.

Vamos também adicionar um botão para redefinir o contador:
```js
const App = () => {
  const [ contador, setContador ] = useState(0)

  return (
    <div>
      <div>{contador}</div>
      <button onClick={() => setContador(contador + 1)}>
        mais+
      </button>
      <button onClick={() => setContador(0)}> 
        zerar
      </button>
    </div>
  )
}
```
Um gerenciador de evento é uma função
Definimos os gerenciadores de eventos para os nossos botões, onde declaramos seus atributos onClick:
```js
<button onClick={() => setContador(contador + 1)}> 
  mais+
</button>
```
Quebraria completamente nossa aplicação

O que está acontecendo? Um gerenciador de evento deve ser uma função ou uma referência de função. Quando escrevemos:
```js
<button onClick={setContador(contador + 1)}>
```
O gerenciador de evento é, neste caso, uma chamada de função (function call). Em muitos casos isso pode até estar ok, mas não nesta situação específica. No começo, o valor da variável contador é 0. Quando React renderiza o componente pela primeira vez, ele executa a chamada de função setContador(0+1), e muda o valor do estado do componente para 1. Isso fará com que o componente seja re-renderizado, React executará a chamada da função setContador novamente e o estado mudará levando a outra re-renderização...

Vamos definir os gerenciadores de eventos como fizemos antes:
```js
<button onClick={() => setContador(contador + 1)}> 
  mais+
</button>
```
Agora, o atributo do botão que define o que acontece quando o botão é clicado — onClick — tem o valor () => setContador(contador + 1). A função setContador é chamada somente quando um usuário clica no botão.

Em geral, definir gerenciadores de eventos dentro de templates JSX não é uma boa ideia. Aqui está ok, porque nossos gerenciadores de eventos são bem simples.

De qualquer jeito, vamos colocar os gerenciadores de eventos em funções separadas:
```js
const App = () => {
  const [ contador, setContador ] = useState(0)

  const aumentarEmUm = () => setContador(contador + 1)
  
  const zerarContador = () => setContador(0)

  return (
    <div>
      <div>{contador}</div>
      <button onClick={aumentarEmUm}>
        mais+
      </button>
      <button onClick={zerarContador}>
        zerar
      </button>
    </div>
  )
}
```
Aqui, os gerenciadores de eventos foram definidos corretamente. O valor do atributo onClick é uma variável que contém referência a uma função:
```js
<button onClick={aumentarEmUm}> 
  mais+
</button>
```

## Passagem de Estado para Componentes-filho

Recomenda-se escrever componentes React pequenos e reutilizáveis ​​em toda a aplicação, e até mesmo em projetos. Vamos refatorar nossa aplicação para que seja composta por três componentes menores: um componente para exibir o contador e dois componentes para os botões.

Vamos implementar primeiro um componente Exibir, que é responsável pela exibição do valor do contador.

Uma boa prática em React é elevar o estado (lift the state up)[15] na hierarquia de componentes. A documentação diz:

Com frequência, a modificação de um dado tem que ser refletida em vários componentes. Recomendamos elevar o estado compartilhado ao elemento pai comum mais próximo.

Vamos colocar o estado da aplicação no componente App e passá-lo para o componente Exibir através de props:
```js
const Exibir = (props) => {
  return (
    <div>{props.contador}</div>
  )
}
```
O uso do componente é direto, objetivo, já que precisamos apenas passar o estado do contador para ele:
```js
const App = () => {
  const [ contador, setContador ] = useState(0)

  const aumentarEmUm = () => setContador(contador + 1)
  const zerarContador = () => setContador(0)

  return (
    <div>
      <Exibir contador={contador}/>
      <button onClick={aumentarEmUm}>
        mais+
      </button>
      <button onClick={zerarContador}> 
        zerar
      </button>
    </div>
  )
}
```
Tudo ainda está funcionando. Quando os botões são clicados e o App é re-renderizado, todos os seus filhos, incluindo o componente Exibir, também são re-renderizados.

Agora, vamos criar um componente Botao para os botões da nossa aplicação. Temos que passar o gerenciador de evento, bem como o título do botão, através das props do componente:
```js
const Botao = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.texto}
    </button>
  )
}
```
O nosso componente App fica assim:
```js
const App = () => {
  const [ contador, setContador ] = useState(0)

  const aumentarEmUm = () => setContador(contador + 1)
  const diminuirEmUm = () => setContador(contador - 1) 
  const zerarContador = () => setContador(0)

  return (
    <div>
      <Exibir contador={contador}/>
      <Botao
        onClick={aumentarEmUm}
        texto='mais+'
      />
      <Botao
        onClick={zerarContador}
        texto='zerar'
      />     
      <Botao
        onClick={diminuirEmUm}
        texto='menos-'
      />
    </div>
  )
}
```
Por conta de agora termos disponível um componente Botao facilmente reutilizável, também implementamos uma nova funcionalidade em nossa aplicação, adicionando um botão que pode ser usado para decrementar o contador.

O gerenciador de evento é passado para o componente Botao através da prop onClick. O nome da prop em si não é algo tão significativo, mas a escolha do nome que colocamos não foi de todo aleatória. O próprio tutorial oficial do React[16] sugere essa convenção.


## Alterações no estado causam re-renderização

Vamos revisar, mais uma vez, os princípios mais importantes de como uma aplicação funciona.

Quando a aplicação inicia, o código em App é executado. Este código usa um hook useState para criar o estado da aplicação, definindo um valor inicial da variável contador. Este componente contém o componente Exibir — que exibe o valor do contador, 0 — e três componentes Botao. Os botões possuem gerenciadores de eventos, que são usados para mudar o estado do contador.

Quando um dos botões é clicado, o gerenciador de evento é executado. O gerenciador de evento muda o estado do componente App com a função setContador. Chamar uma função que muda o estado faz com que o componente seja re-renderizado.

Então, se um usuário clicar no botão mais+, o gerenciador de evento do botão muda o valor de contador para 1, e o componente App é re-renderizado. Isso faz com que seus subcomponentes Exibir e Botao também sejam re-renderizados. Exibir recebe o novo valor do contador, 1, como props. Os componentes Botao recebem gerenciadores de eventos que podem ser usados para mudar o estado do contador.

Para ter certeza de que você entendeu como o programa funciona, vamos adicionar algumas declarações console.log a ele:
```js
const App = () => {
  const [ contador, setContador ] = useState(0)
  console.log('renderizando com o valor do contador em', contador)

  const aumentarEmUm = () => {
    console.log('aumentando, valor anterior', contador)
    setContador(contador + 1)
  }

  const diminuirEmUm = () => { 
    console.log('diminuindo, valor anterior', contador)
    setContador(contador - 1)
  }

  const zerarContador = () => {
    console.log('zerando, valor anterior', contador)
    setContador(0)
  }

  return (
    <div>
      <Exibir contador={contador} />
      <Botao handleClique={aumentarEmUm} texto="mais+" />
      <Botao handleClique={zerarContador} texto="zerar" />
      <Botao handleClique={diminuirEmUm} texto="menos-" />
    </div>
  )
} 
```
Vejamos agora o que é renderizado no console quando os botões "mais+", "zerar" e "menos-" são clicados:

navegador mostrando o console com a renderização de valores em destaque
Nunca tente adivinhar o que o seu código faz. É melhor usar console.log e ver com seus próprios olhos o que ele faz.

Refatorando os Componentes
O componente que exibe o valor do contador é o seguinte:
```js
const Exibir = (props) => {
  return (
    <div>{props.contador}</div>
  )
}
```
O componente só usa o campo contador de suas props. Isso significa que podemos simplificar o componente usando desestruturação, desta forma:
```js
const Exibir = ({ contador }) => {
  return (
    <div>{contador}</div>
  )
}
```
A função que define o componente contém apenas a instrução de retorno, então podemos definir a função usando a forma mais compacta das arrow functions:
```js
const Exibir = ({ contador }) => <div>{contador}</div>
```
Também podemos simplificar o componente Botao:
```js
const Botao = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.texto}
    </button>
  )
}
```
Podemos usar a desestruturação para obter apenas os campos necessários de props e usar a forma mais compacta de arrow functions:
```js
const Botao = ({ onClick, texto }) => (
  <button onClick={onClick}>
    {texto}
  </button>
)
```
Podemos simplificar ainda mais o componente Botao, fazendo com que a declaração de retorno caiba em apenas uma linha:
```js
const Botao = ({ onClick, texto }) => <button onClick={onClick}>{texto}</button>
```
Porém, tenha cuidado para não simplificar demais seus componentes, porque pode ficar mais difícil lidar com a complexidade do código à medida em que ele for crescendo em tamanho.

Código final desse sub-módulo
```js
import { useState } from 'react'
import axios from 'axios'

const App = () => {
  let [ contador, setContador ] = useState(0)

  const sumOne = () => {
    console.log("somou 1, resultado: ", contador)
    setContador(contador + 1)
  }
  const reduceOne = () => setContador(contador - 1)
  const resetCounter = () => setContador(0)
  const sumTwo = () => setContador(contador + 2)
  const alertMsg = () => alert("ALERTAAAA!!!")
  const powerOfTwo = () => setContador(contador * contador)
  console.log(contador)
  if (contador == 0){
    console.log("limpei o console", console.clear())
  }
  if (contador == 'Infinity'){
    console.log("infinitamente louco")
  }

  return (
    <div>
      <ul>
        {
          axios({
            method: 'get',
            url: 'https://dog.ceo/api/breeds/image/random',
            responseType: 'stream'
          }).then(function (response){
            response.data.pipe(fs.createWriteStream('abc'))
          })
        }
      </ul>
      <Show contador={contador} />
      <Button 
        onClick={sumOne} 
        text="sum one" 
      />
      <Button
        onClick={reduceOne}
        text="minus one"
      />
      <Button
        onClick={resetCounter}
        text="reset"
      />
      <Button
        onClick={sumTwo}
        text="sum two"
      />
      <Button
        onClick={alertMsg}
        text="alert message"
      />
      <Button
        onClick={powerOfTwo}
        text="power of two"
      />
    </div>
  )
}

const Show = ({ contador }) => <div>{contador}</div>

const Button = ({ onClick, text }) => <button onClick={onClick}> {text} </button>

export default App
```

## Um estado mais complexo e depuração de aplicações React

Em nosso exemplo anterior, o estado da aplicação era simples, pois consistia em apenas um número inteiro. E se a nossa aplicação precisar de um estado mais complexo?

Na maioria dos casos, a maneira mais fácil e melhor de fazer isso é usando a função useState múltiplas vezes para criar "pedaços" separados de estado.

No código a seguir, criamos dois pedaços de estado para a aplicação, chamados esquerda e direita, ambos com o valor inicial 0:
```js
const App = () => {
  const [esquerda, setEsquerda] = useState(0) 
  const [direita, setDireita] = useState(0) 

  return (
    <div>
      {esquerda}
      <button onClick={() => setEsquerda(esquerda + 1)}>
        Esquerda
      </button>
      <button onClick={() => setDireita(direita + 1)}>
        Direita
      </button>
      {direita}
    </div>
  )
}
```

O componente têm acesso às funções setEsquerda e setDireita, que podem ser usadas para atualizar os dois pedaços de estado.

O estado ou um pedaço de estado do componente pode ser de qualquer tipo. Poderíamos implementar a mesma funcionalidade salvando a contagem de cliques tanto dos botões "esquerda" quanto "direita" em um único objeto:
```js
{
  esquerda: 0,
  direita: 0
}
```
Nesse caso, a aplicação ficaria assim:
```js
const App = () => {
  const [cliques, setCliques] = useState({ 
    esquerda: 0, direita: 0
  })

  const handleCliqueEsquerda = () => {
    const novosCliques = { 
      esquerda: cliques.esquerda + 1, 
      direita: cliques.direita 
    }
    setCliques(novosCliques)
  }

  const handleCliqueDireita = () => {
    const novosCliques = { 
      esquerda: cliques.esquerda, 
      direita: cliques.direita + 1 
    }
    setCliques(novosCliques)
  }

  return (
    <div>
      {cliques.esquerda}
      <button onClick={handleCliqueEsquerda}>Esquerda</button>
      <button onClick={handleCliqueDireita}>Direita</button>
    </div>
  )
}
```
Agora, o componente tem apenas um único pedaço de estado, e os gerenciadores de eventos precisam cuidar da mudança do estado inteiro da aplicação.

O formato do gerenciador de evento parece confuso aqui. Quando o botão da esquerda é clicado, a seguinte função é chamada:
```js
const handleCliqueEsquerda = () => {
  const novosCliques = { 
    esquerda: cliques.esquerda + 1, 
    direita: cliques.direita 
  }
  setCliques(novosCliques)
}
```
O objeto a seguir é definido como o novo estado da aplicação:
```js
{
  esquerda: cliques.esquerda + 1,
  direita: cliques.direita
}
```

O novo valor da propriedade esquerda agora é o mesmo que o valor de esquerda + 1 do estado anterior, e o valor da propriedade direita é o mesmo que o valor da propriedade direita do estado anterior.

Podemos definir mais claramente o novo objeto de estado usando a (sintaxe de espalhamento) (Spread syntax (...)[17]) que foi adicionada à especificação da linguagem no verão de 2018:
```js
const handleCliqueEsquerda = () => {
  const novosCliques = { 
    ...cliques, 
    esquerda: cliques.esquerda + 1 
  }
  setCliques(novosCliques)
}

const handleCliqueDireita = () => {
    ...cliques, 
    direita: cliques.direita + 1 
  }
  setCliques(novosCliques)
}
```

A sintaxe pode parecer um tanto estranha no começo. Na prática, { ...cliques } cria um novo objeto que tem cópias de todas as propriedades do objeto cliques. Quando discriminamos uma propriedade específica — por exemplo, direita em { ...cliques, direita: 1 }, o valor da propriedade direita no novo objeto será 1.

No exemplo acima, este trecho:
```js
{ ...cliques, direita: cliques.direita + 1 }
```

cria uma cópia do objeto cliques, onde o valor da propriedade direita é aumentado em 1.

Não é necessário atribuir o objeto a uma variável nos gerenciadores de eventos, e podemos simplificar as funções da seguinte maneira:
```js
const handleCliqueEsquerda = () =>
  setCliques({ ...cliques, esquerda: cliques.esquerda + 1 })

const handleCliqueDireita = () =>
```
Alguns leitores podem estar se perguntando o motivo de não termos atualizado o estado diretamente, desta forma:
```js
const handleCliqueEsquerda = () => {
  cliques.esquerda++
  setCliques(cliques)
}
```
A aplicação parece funcionar. Entretanto, em React, é proibido mudar (mutate) diretamente o estado, já que pode resultar em efeitos colaterais inesperados[18]. A mudança de estado sempre tem que ser feita pela definição/atribuição do estado a um novo objeto. Se as propriedades do objeto de estado anterior não forem alteradas, podem simplesmente ser copiadas, o que se faz copiando essas propriedades em um novo objeto e definindo-o como o novo estado.

Armazenar todo o estado em um único objeto de estado é uma má escolha para esta aplicação, especificamente; não há qualquer benefício aparente, e a aplicação resultante fica muito mais complexa. Neste caso, armazenar os contadores de cliques em pedaços separados de estado é uma escolha muito mais adequada.

Há situações em que pode ser benéfico armazenar um pedaço de estado da aplicação em uma estrutura de dados mais complexa. A documentação oficial de React contém algumas orientações úteis sobre o assunto.


## Gerenciando Arrays

Vamos adicionar um pedaço de estado à nossa aplicação contendo o array todosOsCliques, que lembra cada clique que ocorreu na aplicação.
```js
const App = () => {
  const [esquerda, setEsquerda] = useState(0)
  const [direita, setDireita] = useState(0)
  const [todosOsCliques, setTodos] = useState([])

  const handleCliqueEsquerda = () => {
    setTodos(todosOsCliques.concat('E'))
    setEsquerda(esquerda + 1)
  } 

  const handleCliqueDireita = () => {
    setDireita(direita + 1)
  }

  return (
    <div>
      {esquerda}
      <button onClick={handleCliqueEsquerda}>Esquerda</button>
      <button onClick={handleCliqueDireita}>Direita</button>
      <p>{todosOsCliques.join(' ')}</p>
    </div>
  )
}
```
Cada clique é armazenado em um pedaço separado de estado chamado todosOsCliques, que é inicializado como um array vazio:

const [todosOsCliques, setTodos] = useState([])
Quando o botão Esquerda é clicado, adicionamos a letra E ao array todosOsCliques:
```js
const handleCliqueEsquerda = () => {
  setTodos(todosOsCliques.concat('E'))
  setEsquerda(esquerda + 1)
}
```
O pedaço de estado armazenado em todosOsCliques agora é definido para ser um array que contém todos os itens do array anterior mais a letra E. O método concat (concatenar) adiciona o novo item ao array, que não muda o array existente, mas sim retorna uma nova cópia do array com o item adicionado a ele.

Como mencionado anteriormente, também é possível em JavaScript adicionar itens a um array com o método push (Significa, literalmente, "empurrar", "apertar", "pressionar". Porém, nestes termos, o método push() ADICIONA um ou mais elementos ao final de um array e retorna o novo comprimento desse array). Se adicionarmos o item "empurrando-o" para o array todosOsCliques e então atualizando o estado, a aplicação ainda aparentará funcionar:
```js
const handleCliqueEsquerda = () => {
  todosOsCliques.push('E')
  setTodos(todosOsCliques)
  setEsquerda(esquerda + 1)
}
```
No entanto, não faça isso. Como mencionado anteriormente, o estado dos componentes em React, tal como todosOsCliques, não devem ser mudados diretamente. Mesmo se mudando o estado parecer funcionar em alguns casos, tal decisão pode levar a erros no código muito difíceis de depurar.

Vamos olhar mais de perto em como o clique é renderizado na página:
```js
const App = () => {
  // ...

  return (
    <div>
      {esquerda}
      <button onClick={handleCliqueEsquerda}>Esquerda</button>
      <button onClick={handleCliqueDireita}>Direita</button>
      {direita}
      <p>{todosOsCliques.join(' ')}</p>
    </div>
  )
}
```
Chamamos o método join (juntar, conectar) no array todosOsCliques que une todos os itens em uma única string, separados pela string passada como parâmetro da função, que no caso é um espaço vazio.

## A atualização do estado é assíncrona

Vamos expandir a aplicação para que ela mantenha o controle do número total de cliques nos botões no estado total, cujo valor é sempre atualizado quando os botões são pressionados:
```js
const App = () => {
  const [esquerda, setEsquerda] = useState(0)
  const [direita, setDireita] = useState(0)
  const [todosOsCliques, setTodos] = useState([])
  const [total, setTotal] = useState(0)

  const handleCliqueEsquerda = () => {
    setTodos(todosOsCliques.concat('E'))
    setEsquerda(esquerda + 1)
    setTotal(esquerda + direita)
  }

  const handleCliqueDireita = () => {
    setDireita(direita + 1)
    setTotal(esquerda + direita)
  }

  return (
    <div>
      {esquerda}
      <button onClick={handleCliqueEsquerda}>Esquerda</button>
      <button onClick={handleCliqueDireita}>Direita</button>
      <p>{todosOsCliques.join(' ')}</p>
      <p>Total {total}</p>
    </div>
  )
}
```
A solução não funciona corretamente:

o navegador mostrando 2 left|right 1, RLL total 2
Por alguma razão, o total de cliques nos botões está sempre um clique atrás do valor real.

Vamos adicionar alguns comandos console.logao gerenciador de eventos:
```js
const App = () => {
  // ...
  const handleCliqueEsquerda = () => {
    setTodos(todosOsCliques.concat('E'))
    console.log('clique esquerdo anterior', esquerda)
    setEsquerda(esquerda + 1)
    console.log('clique esquerdo posterior', esquerda)
    setTotal(esquerda + direita)
  }

  // ...
}
```
O console revela o problema:

o console das ferramentas do desenvolvedor exibe left before 4 and left after 4
Embora um novo valor tenha sido definido para esquerda chamando setEsquerda(esquerda + 1), o valor antigo ainda está lá, apesar da atualização! Por causa disso, a tentativa de contar o número de cliques nos botões produz um resultado menor do que o correto:

setTotal(esquerda + direita) 
O motivo para isso é que uma atualização de estado no React acontece assincronicamente (asynchronously), ou seja, não imediatamente, mas "em algum momento" antes que o componente seja renderizado novamente.

Podemos consertar a aplicação da seguinte forma:
```js
const App = () => {
  // ...
  const handleCliqueEsquerda = () => {
    setTodos(todosOsCliques.concat('E'))
    const atualizaEsquerda = esquerda + 1
    setEsquerda(atualizaEsquerda)
    setTotal(atualizaEsquerda + direita)
  }

  // ...
}
```
Assim, o número de cliques nos botões é agora, de forma definitiva, baseado no número correto de cliques no botão esquerdo.


## Renderização Condicional

Vamos modificar nossa aplicação para que a renderização do histórico de cliques seja gerenciada por um novo componente chamado Historico:
```js
const Historico = (props) => {
  if (props.todosOsCliques.length === 0) {
    return (
      <div>
        Clique em um dos botões para usar a aplicação!
      </div>
    )
  }
  return (
    <div>
      Histórico de cliques nos botões: {props.todosOsCliques.join(' ')}
    </div>
  )
}

const App = () => {
  // ...

  return (
    <div>
      {esquerda}
      <button onClick={handleCliqueEsquerda}>Esquerda</button>
      <button onClick={handleCliqueDireita}>Direita</button>
      {direita}
      <Historico todosOsCliques={todosOsCliques} />
    </div>
  )
}
```
Agora, o comportamento do componente depende se algum dos botões foi clicado ou não. Se não, ou seja, o array todosOsCliques estando vazio, o componente renderiza um elemento "div" com algumas instruções:

<div>Clique em um dos botões para usar a aplicação!</div>
E em todos os outros casos, o componente renderiza o histórico de cliques:

<div>
  Histórico de cliques nos botões: {props.todosOsCliques.join(' ')}
</div>
O componente Historico renderiza elementos React completamente diferentes dependendo do estado da aplicação. Isso é chamado de renderização condicional (conditional rendering).

React também oferece muitas outras formas de fazer renderização condicional. Veremos isso na prática na Parte 2.

Vamos fazer mais uma modificação a nossa aplicação, refatorando-a para usar o componente Botao que definimos anteriormente:
```js
const Historico = (props) => {
  if (props.todosOsCliques.length === 0) {
    return (
      <div>
        Clique em um dos botões para usar a aplicação!
      </div>
    )
  }

  return (
    <div>
      Histórico de cliques nos botões: {props.todosOsCliques.join(' ')}
    </div>
  )
}

const Botao = ({ handleClique, texto }) => (
  <button onClick={handleClique}>
    {texto}
  </button>
)

const App = () => {
  const [esquerda, setEsquerda] = useState(0)
  const [direita, setDireita] = useState(0)
  const [todosOsCliques, setTodos] = useState([])

  const handleCliqueEsquerda = () => {
    setTodos(todosOsCliques.concat('E'))
    setEsquerda(esquerda + 1)
  }

  const handleCliqueDireita = () => {
    setDireita(direita + 1)
  }

  return (
    <div>
      {esquerda}
      <Botao handleClique={handleCliqueEsquerda} texto='Esquerda' />
      <Botao handleClique={handleCliqueDireita} texto='Direita' />
      {direita}
      <Historico todosOsCliques={todosOsCliques} />
    </div>
  )
}
```

## Depuração de aplicações React

Grande parte do tempo de um desenvolvedor é gasto na depuração e na leitura de códigos existentes. De vez em quando, conseguimos escrever uma ou duas linhas de código novo, mas grande parte do nosso tempo é gasto tentando descobrir por que algo está quebrado ou como algo funciona. Boas práticas e ferramentas de depuração são extremamente importantes por esta razão.

Felizmente para nós, React é uma biblioteca extremamente amigável para com os desenvolvedores quando se trata de depuração.

Antes de continuarmos, vamos nos lembrar de uma das regras mais importantes do desenvolvimento web.

A primeira regra do desenvolvimento web
Mantenha o Console do navegador aberto o tempo todo.

A guia Console em particular deve estar sempre aberta, a menos que haja uma razão específica para visualizar outra guia.

Mantenha tanto o seu código quanto a página web abertos juntos o tempo todo.

Se e quando seu código não compilar e seu navegador brilhar igual uma árvore de Natal:

captura de tela do código
não escreva nenhuma linha de código a mais, mas encontre e corrija imediatamente o problema. Ainda não aconteceu na história da programação de o código que não estivesse compilando começasse a funcionar após a adição de mais linhas de código. Duvido que tal evento ocorra durante este curso também.

A depuração (debug) "old-school", baseada na impressão no Console, é sempre uma das melhores opções. Se o componente
```js
const Botao = ({ handleClique, texto }) => (
  <button onClick={handleClique}>
    {texto}
  </button>
)
```
não estiver funcionando como desejado, é útil começar a imprimir suas variáveis ​​no console. Para que isso funcione, devemos transformar nossa função na forma menos compactada e receber todo o objeto "props" sem desestruturá-lo de forma imediata:
```js
const Botao = (props) => { 
  console.log(props)
  const { handleClique, texto } = props
  return (
    <button onClick={handleClique}>
      {texto}
    </button>
  )
}
```
Isso revelará imediatamente se, por exemplo, um dos atributos foi escrito incorretamente ao usar o componente.

Obs.: Quando você usar console.log para depuração, não combine objetos (objects) do jeito Java de se fazer usando o operador de adição. Em vez de escrever

console.log('o valor de props é ' + props)
separe as coisas que você deseja registrar no console com uma vírgula:

console.log('o valor de props é', props)
Se você usar o jeito Java de concatenar uma string com um objeto, aparecerá uma mensagem de log muito pouco informativa:

o valor de props é [object Object]
Registrar a saída no console não é de maneira alguma a única forma de depurar nossas aplicações. Você pode pausar a execução do código da sua aplicação no depurador (debugger) no Console do Desenvolvedor do Chrome, escrevendo o comando debugger em qualquer lugar do seu código.

A execução será pausada assim que chegar a um ponto onde o comando debugger for executado:

Ao ir para a guia Console, é fácil inspecionar o estado atual das variáveis:

captura de tela de inspeção de console
Uma vez que a causa do erro é descoberta, é possível remover o comando debugger e atualizar a página.

O depurador também nos permite executar nosso código linha por linha com os controles encontrados na parte direita da guia Fontes (Sources).

Você também pode acessar o depurador sem o comando debugger, adicionando pontos de interrupção na guia Fontes (Sources). Inspecionar os valores das variáveis do componente pode ser feito na seção Escopo (Scope):

exemplo de ponto de interrupção nas ferramentas do desenvolvedor
É extremamente recomendado adicionar a extensão React developer tools ao Chrome. Ele adiciona uma nova guia Components às ferramentas de desenvolvedor. A nova guia de ferramentas de desenvolvedor pode ser usada para inspecionar os diferentes elementos React na aplicação, juntamente com seu estado e props:

captura de tela da extensão de ferramentas de desenvolvedor React
O estado do componente App é definido assim:
```js
const [esquerda, setEsquerda] = useState(0)
const [direita, setDireita] = useState(0)
const [todosOsCliques, setTodos] = useState([])
```
As ferramentas do desenvolvedor mostram o estado dos hooks na ordem de sua definição:

estado dos hooks nas ferramentas do desenvolvedor React
O primeiro State (Estado) contém o valor do estado esquerda; o próximo contém o valor do estado direita e o último contém o valor do estado todosOsCliques.


## Regras dos Hooks

Há algumas limitações e regras que devemos seguir para garantir que a nossa aplicação use corretamente as funções de estado baseadas em hooks.

A função useState ("usarEstado", assim como a função useEffect, ou "usarEfeito", introduzida mais tarde neste curso) não deve ser chamada dentro de um loop, uma expressão condicional ou qualquer lugar que não seja uma função que define um componente. Assim deve ser para garantir que os hooks sejam sempre chamados na mesma ordem e, se isso não acontecer, a aplicação se apresentará erros.

Resumindo, hooks só podem ser chamados de dentro do corpo de uma função que define um componente React:
```js
const App = () => {
  // Desta forma funciona!
  const [idade, setIdade] = useState(0)
  const [nome, setNome] = useState('Juha Tauriainen')

  if ( idade > 10 ) {
    // Desta forma não funciona!
    const [foobar, setFoobar] = useState(null)
  }

  for ( let i = 0; i < idade; i++ ) {
    // Não faça deste jeito também!
    const [formaCorreta, setFormaCorreta] = useState(false)
  }

  const bemRuim = () => {
    // Isso também não é permitido!
    const [x, setX] = useState(-1000)
  }

  return (
    //...
  )
}
```

Código até aqui
```js
import React from "react"
import { useState } from "react"

const Historico = (props) => {
  console.log(props)
  if (props.todosOsCliques.length === 0){
    return(
      <div>
        Clique em um dos botões para usar a aplicação.
      </div>
    )
  }
  return (
    <div>
      Histórico de cliques: {props.todosOsCliques.join(' ')}
    </div>
  )
}

const Botao = ({ handleClique, texto }) => (
  <button onClick={handleClique}>
    {texto}
  </button>
)

const App = () => {
  const [esquerda, setEsquerda] = useState(0)
  const [centro, setCentro] = useState(0)
  const [direita, setDireita] = useState(0)
  const [total, setTotal] = useState(0)
  const [todosOsCliques, setTodos] = useState([])

  const handleCliqueEsquerda = () => {
    setTodos(todosOsCliques.concat('E'))
    const atualizarEsquerda = esquerda + 1
    setEsquerda(atualizarEsquerda)
    setTotal(atualizarEsquerda + direita + centro)
  }
  
  const handleCliqueCentro = () =>{
    setTodos(todosOsCliques.concat('C'))
    const atualizarCentro = centro + 1
    setCentro(atualizarCentro)
    setTotal(atualizarCentro + direita + esquerda)
  } 

  const handleCliqueDireita = () => {
    setTodos(todosOsCliques.concat('D'))
    const atualizarDireita = direita + 1
    setDireita(atualizarDireita)
    setTotal(esquerda + atualizarDireita + centro)
  }
  console.log(total)

    return(
    <div>
      {esquerda}
      <Botao handleClique={handleCliqueEsquerda} texto='Esquerda'/>
      <br></br>
      {centro}
      <Botao handleClique={handleCliqueCentro} texto='Centro'/>
      <br></br>
      {direita}
      <Botao handleClique={handleCliqueDireita}texto='Direita'/>
      <p>Total {total}</p>
      <Historico todosOsCliques={todosOsCliques} />
    </div>
  )
}

export default App
```

## Revisão sobre Gerenciamento de Eventos (Event Handling)

O gerenciamento de eventos se mostrou um tópico difícil em iterações anteriores neste curso.

Por essa razão, revisaremos o tópico.

Vamos supor que estejamos desenvolvendo essa aplicação simples com o seguinte componente App:


















[1] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
[2] http://es6-features.org/#Constants
[3] https://legacy.reactjs.org/docs/introducing-jsx.html
[4] https://babeljs.io/repl/
[5] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
[6] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
[7] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
[8] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Object_literals
[9] https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Classes_in_JavaScript
[10] https://github.com/petsel/not-awesome-es6-classes
[11] https://rajaraodv.medium.com/is-class-in-es6-the-new-bad-part-6c4e6fe1ee65
[12] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Language_Overview
[13] https://github.com/getify/You-Dont-Know-JS
[14] https://eloquentjavascript.net/
[15] https://legacy.reactjs.org/docs/lifting-state-up.html
[16] https://react.dev/learn/tutorial-tic-tac-toe
[17] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
[18] https://stackoverflow.com/questions/37755997/why-cant-i-directly-modify-a-components-state-really/40309023#40309023