# Aula 1 - Fundamentos de aplicação web

## HTTP GET

Com base na página de exemplo do conteúdo da faculdade de Helsinki

```js
const data = JSON.parse(this.responseText)
console.log(data)

var ul = document.createElement('ul')
ul.setAttribute('class', 'notes')

data.forEach(function(note) {
  var li = document.createElement('li')

  ul.appendChild(li)
  li.appendChild(document.createTextNode(note.content))
})

document.getElementById('notes').appendChild(ul)
```

O código, em primeiro lugar, cria uma lista não ordenada com a tag `ul`
```js
var ul = document.createElement('ul')
ul.setAttribute('class', 'notes')
```

Em seguida, adiciona uma tag `li` para cada nota recebida na entrada
```js
data.forEach(function(note) {
  var li = document.createElement('li')

  ul.appendChild(li)
  li.appendChild(document.createTextNode(note.content))
})
```
Somente o campo content de cada nota se torna o conteúdo da tag li. Os "timestamps" (registros de data/hora) encontrados nos dados JSON não são utilizados para nada neste caso.

A constante data é responsável por receber e tratar todo conteúdo JSON que foi carregado
e console.log() é a função que exibe essa informação no nosso console do navegador
```js
const data = JSON.parse(this.responseText)
console.log(data)
```

## Event Handler e Callback function

Ao analisar o código a baixo, podemos notar um comportamento estranho
```js
var xhttp = new XMLHttpRequest()

xhttp.onreadystatechange = function() {
  // código que lida com a resposta do servidor
}

xhttp.open('GET', '/data.json', true)
xhttp.send()
```

A requisição ao servidor é feita na última linha, mas o código que lida com a resposta é encontrado mais acima. 

Na linha 54 do documento `xhttp.onreadystatechange = function()` um Event Handler para o evento onreadystatechange é definido para o objeto xhttp que está fazendo a requisição. 

Quando o estado do objeto muda, o navegador chama a função gerenciadora de evento. O código da função verifica que o readyState é igual a 4 (o que representa o estado "DONE" que exibe a descrição A operação está completa) e que o código de status HTTP da resposta é 200.

```js
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    // código que gerencia a resposta do servidor
  }
}
```
O mecanismo de chamada de gerenciadores de eventos é muito comum em JavaScript. As funções de gerência de eventos são chamadas de funções callback (funções de retorno de chamada). O código da aplicação não chama as funções em si, mas o "runtime environment" (ambiente de tempo de execução) — isto é, o navegador, que chama a função no tempo correto quando o evento acontece.

(en) Callback function
https://developer.mozilla.org/en-US/docs/Glossary/Callback_function

## DOM (Document Object Model)

Podemos pensar em HTML como estruturas implícitas de uma árvore

Essa estrutura de um site pode ser vista na aba elements do console

O funcionamento do navegador baseia-se na ideia de representar os elementos HTML como uma árvore.

O Modelo de Documento por Objetos, ou DOM, é uma API (Application Programming Interface), que possibilita a modificação programática das árvores de elementos correspondentes às páginas web.

O código a seguir cria um novo nó (node) na variável ul e adiciona alguns nós-filho a ele:
```js
var ul = document.createElement('ul')

data.forEach(function(note) {
  var li = document.createElement('li')

  ul.appendChild(li)
  li.appendChild(document.createTextNode(note.content))
})
```
Por fim, a ramificação da árvore da variável ul é conectada ao seu lugar previsto na árvore HTML da página:
```js
document.getElementsByClassName('notes').appendChild(ul)
```

## Gerenciando o objeto "Document" por meio do console

O nó de nível mais alto da árvore DOM de um documento HTML é o objeto document. Podemos realizar várias operações em uma página web usando a API DOM. Conseguimos acessar o objeto document digitando document na guia Console

Vamos adicionar uma nova nota à página a partir do console.

Primeiro, vamos pegar a lista de notas da página. A lista está no primeiro elemento "ul" da página:
```js
list = document.getElementsByTagName('ul')[0]
```
Em seguida, criamos um novo elemento "li" e adicionamos algum conteúdo de texto a ele:
```js
newElement = document.createElement('li')
newElement.textContent = 'Page manipulation from console is easy'
```

E adicionamos o novo elemento "li" à lista:
```js
list.appendChild(newElement)
```

Mesmo que a página seja atualizada no seu navegador, as mudanças não são permanentes. Se a página for recarregada, a nova nota desaparecerá, pois as mudanças não foram enviadas ao servidor.

*** IMG client-server-connection-flux *** 

*** IMG http-post ***

Trata-se de uma requisição HTTP POST para o endereço do servidor newnote. O servidor responde com o código de status HTTP 302. Isso é um [redirecionamento de URL](https://en.wikipedia.org/wiki/URLredirection), no qual o servidor pede ao navegador para fazer uma nova requisição HTTP GET para o endereço definido no cabeçalho Localização (Location) — o endereço notes.

Então, o navegador recarrega a página de Notas (Notes). O recarregamento faz mais três requisições HTTP: busca o arquivo CSS (main.css), o arquivo de JavaScript (main.js) e os dados das notas (data.json).

A guia de Rede também mostra os dados enviados com o formulário:

Obs.: Na versão mais recente do Chrome, o menu drop-down (lista suspensa) "Form Data" está dentro da nova guia "Payload", localizada à direita da guia "Cabeçalhos".

*** IMG http-post2 ***

A tag Form tem os atributos action e method, que definem que o envio do formulário é feito como uma requisição HTTP POST para o endereço new_note.

*** IMG http-post3 ***

O código no servidor responsável pela requisição POST é bastante simples (Obs.: este código está no servidor, e não no código JavaScript baixado pelo navegador):
```js
app.post('/new_note', (req, res) => {
  notes.push({
    content: req.body.note,
    date: new Date(),
  })

  return res.redirect('/notes')
})
```

Os dados são enviados como o body da requisição POST.

O servidor consegue acessar os dados acessando o campo req.body do objeto de requisição req.

O servidor cria um novo objeto nota e adiciona-o a um array chamado notes.

Os objetos de "Notes" têm dois campos: content, contendo o conteúdo real da nota; e date, contendo a data e hora em que a nota foi criada.

O servidor não salva as novas notas em um banco de dados, então elas desaparecem quando o servidor é reiniciado.


## AJAX (Asynchronous JavaScript and XML)

É um termo que foi introduzido em fevereiro de 2005 com base em avanços na tecnologia do navegador para descrever uma nova abordagem revolucionária que permitia o carregamento de conteúdo em páginas web usando JavaScript embutido dentro do HTML, sem a necessidade de re-renderizar a página.

Hoje em dia, URLs com AJAX não seriam consideradas aceitáveis, pois não seguem as convenções geralmente reconhecidas de APIs RESTful (Representational State Transfer (REST).

O conceito por detrás do termo AJAX agora é tão cotidiano e básico que não se verifica nele nenhuma novidade para os dias atuais. O termo caiu no esquecimento e a nova geração nem sequer ouviu falar dele.


## Single Page Application (SPA)

Em nossa aplicação de exemplo, a página inicial funciona como uma página web tradicional: toda a lógica está no servidor e o navegador só renderiza o HTML conforme instruído.

A página "Notes" transfere algumas dessas responsabilidades para o navegador, gerando o código HTML para notas que já existem. O navegador realiza essa tarefa executando o código JavaScript que ele baixou do servidor. O código baixa as notas do servidor como dados JSON e adiciona elementos HTML para exibir as notas na página usando a API DOM.

Nos últimos anos, o estilo SPA (Single Page Aplication) de criação de aplicações web surgiu. Os sites de estilo SPA não baixam todas as suas páginas separadamente do servidor como o nosso exemplo de aplicação faz, mas incluem apenas uma página HTML baixada do servidor, cujo conteúdo é manipulado com o código JavaScript que é executado no navegador.

A página "Notes" da nossa aplicação tem alguma semelhança com as aplicações de estilo SPA, mas ainda não está bem lá. Mesmo que a lógica para renderizar as notas seja executada no navegador, a página ainda usa o mecanismo tradicional de adição de novas notas. Os dados são enviados para o servidor através do envio do formulário e o servidor instrui o navegador a recarregar a página "Notes" com um redirect.

Uma versão SPA da aplicação que estamos utilizando de exemplo pode ser encontrada em https://studies.cs.helsinki.fi/exampleapp/spa. À primeira vista, a aplicação parece igual à anterior. O código HTML é quase idêntico, mas o arquivo JavaScript é diferente (spa.js), e há uma pequena mudança na maneira como a tag "form" é definida:

A versão SPA da nossa aplicação não envia de forma tradicional os dados do formulário, mas usa o código JavaScript que recuperou do servidor. Vamos analisar um pouco esse código, embora entender todos os detalhes dele não seja importante ainda nesta etapa.
```js
var form = document.getElementById('notes_form')
form.onsubmit = function(e) {
  e.preventDefault()

  var note = {
    content: e.target.elements[0].value,
    date: new Date(),
  }

  notes.push(note)
  e.target.elements[0].value = ''
  redrawNotes()
  sendToServer(note)
}
```
O comando document.getElementById('notes_form') instrui o código a buscar o elemento de formulário da página e a registrar um gerenciador de evento para lidar com o evento de envio do formulário. O gerenciador de evento chama imediatamente o método e.preventDefault() para evitar o tratamento padrão do envio do formulário. O método padrão enviaria os dados para o servidor e causaria uma nova requisição GET, o que não queremos que aconteça.

Em seguida, o gerenciador de evento cria uma nova nota, adiciona-a à lista de notas com o comando notes.push(note), redesenha a lista de notas na página e envia a nova nota ao servidor.

O código para enviar a nota ao servidor é o seguinte:
```js
var sendToServer = function(note) {
  var xhttpForPost = new XMLHttpRequest()
  // ...

  xhttpForPost.open('POST', '/new_note_spa', true)
  xhttpForPost.setRequestHeader('Content-type', 'application/json')
  xhttpForPost.send(JSON.stringify(note))
}
```
O código determina que os dados devem ser enviados com uma requisição HTTP POST e o tipo de dados deve ser JSON. O tipo de dados é determinado com um cabeçalho Content-type. Em seguida, os dados são enviados como uma string JSON.

O código da aplicação está disponível em https://github.com/mluukkai/example_app. Vale ressaltar que a aplicação serve apenas para demonstrar os conceitos do curso. O código segue um estilo ruim de desenvolvimento em algumas partes e não deve ser usado como exemplo ao criar suas próprias aplicações. O mesmo se aplica às URLs usadas. A URL newnotespa para a qual as novas notas são enviadas, não segue as melhores práticas usadas atualmente.

Fadiga JavaScript
O desenvolvimento de aplicações web Full Stack é de muitas maneiras desafiador. Várias coisas estão acontecendo em vários lugares ao mesmo tempo, e a depuração (debug) é um pouco mais difícil se comparada com a depuração de softwares de desktop comuns. JavaScript nem sempre funciona da maneira que você espera que funcione (em comparação com muitas outras linguagens), e a forma assíncrona que seus ambientes de tempo de execução (runtime environments) funcionam cria todos os tipos de desafios. Comunicação na web exige conhecimento do protocolo HTTP. Também é preciso lidar com bancos de dados e administração e configuração de servidores. Também seria bom saber o suficiente de CSS para tornar as aplicações pelo menos apresentáveis.

O mundo JavaScript se desenvolve rápido, o que traz seus próprios desafios. Ferramentas, bibliotecas e a própria linguagem estão em constante desenvolvimento. Algumas pessoas começam a ficar cansadas das constantes mudanças e deram um nome para isso: fadiga JavaScript.

How to Manage JavaScript Fatigue
https://auth0.com/blog/how-to-manage-javascript-fatigue/

Javascript Fatigue
https://medium.com/@ericclemmons/javascript-fatigue-48d4011b6fc4