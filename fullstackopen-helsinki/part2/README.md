Arrays em JavaScript
A partir daqui, usaremos os operadores de programação funcional do array (matriz) JavaScript, como find, filter e map o tempo todo.

Se operar arrays com operadores funcionais parecer estranho para você, vale a pena assistir pelo menos os primeiros três vídeos da série Programação Funcional em JavaScript no YouTube:

Funções de ordem superior
Map
Básico do método Reduce
Revisão sobre Gerenciadores de Evento
Baseado no curso do ano passado, o gerenciamento de eventos provou ser algo difícil.

Vale a pena ler o capítulo de revisão no final da parte anterior — Revisão sobre Gerenciamento de Eventos — caso ainda ache que precise estudar mais sobre o assunto.

A passagem de gerenciadores de eventos para os componentes-filho do componente App levantou algumas questões. Uma pequena revisão sobre o tópico pode ser encontrada aqui.

Renderização de Coleções
Nota dos tradutores: A partir deste momento, os códigos utilizados como exemplo permanecerão no idioma original (inglês), visto que é disponibilizado ao final de cada sessão o repositório onde o código-exemplo pode ser encontrado na íntegra. É muito provável que o estudante se confunda caso os nomes de variáveis, funções, componentes, etc estejam em português, dado que estaria diferente do código disponibilizado no repositório do GitHub, que está em inglês.

Faremos neste momento a lógica da aplicação do lado do cliente (navegador), ou o "front-end", em React, para uma aplicação semelhante à aplicação de exemplo da Parte 0.

Comecemos com o seguinte (arquivo App.js):

const App = (props) => {
  const { notes } = props

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        <li>{notes[0].content}</li>
        <li>{notes[1].content}</li>
        <li>{notes[2].content}</li>
      </ul>
    </div>
  )
}

export default App
O arquivo index.js fica assim:

import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

const notes = [


  {
    id: 1,
    content: 'HTML é fácil',
    important: true
  },
  {
    id: 2,
    content: 'O navegador só pode executar JavaScript',
    important: false
  },
  {
    id: 3,
    content: 'GET e POST são os métodos mais importantes do protocolo HTTP',
    important: true
  }
]

ReactDOM.createRoot(document.getElementById('root')).render(
  <App notes={notes} />
)
Cada nota contém seu conteúdo textual, um valor booleano para marcar se a nota foi categorizada como importante ou não e também um id (identificador) único.

O exemplo acima funciona devido ao fato de haver exatamente três notas no array.

Uma única nota é renderizada acessando os objetos no array, referindo-se a um número de índice no "código de teste":

<li>{notes[1].content}</li>
Isso, obviamente, não é algo prático. Podemos melhorar nosso código gerando elementos React a partir dos objetos do array usando a função map (mapear).

notes.map(note => <li>{note.content}</li>)
O resultado é um array de elementos li...

[
  <li>HTML é fácil</li>,
  <li>O navegador só pode executar JavaScript</li>,
  <li>GET e POST são os métodos mais importantes do protocolo HTTP</li>,
]
... que então podem ser colocados dentro de tags ul:

const App = (props) => {
  const { notes } = props

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => <li>{note.content}</li>)}
      </ul>
    </div>
  )
}
Como o código que gera as tags li é JavaScript, ele deve ser envolto em chaves no modelo JSX, assim como todo código JavaScript.

Também faremos com que o código fique mais legível separando a declaração da função de seta em várias linhas:

const App = (props) => {
  const { notes } = props

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => 
          <li>
            {note.content}
          </li>
        )}
      </ul>
    </div>
  )
}
O atributo "key" (chave)
Mesmo que a aplicação pareça estar funcionando, há um aviso no console:

erro da propriedade de chave única no console
Como sugere a página React vinculada na mensagem de erro, os itens da lista, ou seja, os elementos gerados pelo método map, devem ter cada qual um valor único que os permite serem identificados: um atributo chamado key (chave).

Vamos adicionar as keys:

const App = (props) => {
  const { notes } = props

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => 
          <li key={note.id}>
            {note.content}
          </li>
        )}
      </ul>
    </div>
  )
}
E então, a mensagem de erro desaparece.

React usa os atributos "key" (ou atributos-chave) dos objetos em um array para determinar como atualizar a visualização gerada por um componente quando o componente é re-renderizado. Leia mais sobre esse assunto na documentação React.

Map
Entender como funciona o método de array mapé crucial para fazer o restante do curso.

A aplicação contém um array chamado notes:

const notes = [
  {
    id: 1,
    content: 'HTML is easy',
    important: true
  },
  {
    id: 2,
    content: 'Browser can execute only JavaScript',
    important: false
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    important: true
  }
]
Vamos parar por um momento e examinar como o map funciona.

Se o código a seguir for adicionado, digamos, ao final do arquivo:

const result = notes.map(note => note.id)
console.log(result)
[1, 2, 3] será impresso no console. O método map sempre cria um array novo, cujos elementos foram criados a partir dos elementos do array original por meio do mapping (mapeamento): usa-se a função fornecida como um parâmetro para o método map.

A função é esta:

note => note.id
Que, neste caso, é uma arrow function escrita de forma compacta. A forma completa seria:

(note) => {
  return note.id
}
A função recebe um objeto "note" como parâmetro e retorna o valor de seu campo id.

Se mudarmos a instrução para:

const result = notes.map(note => note.content)
o resultado será um array contendo as notas.

Essa forma está bem parecida com o código React que usamos:

notes.map(note =>
  <li key={note.id}>
    {note.content}
  </li>
)
o qual gera uma tag li contendo o conteúdo da nota de cada objeto de nota.

Por conta do parâmetro da função passado para o método map —

note => <li key={note.id}>{note.content}</li>
 — ser usado para criar elementos de visualização, o valor da variável deve ser renderizado dentro de chaves. Tente ver o que acontece se as chaves forem removidas.

O uso constante de chaves pode gerar algum desconforto no início, mas você se acostumará rapidamente com elas. O feedback visual em React é imediato.

Antipadrão: Índices de Array como Keys
Poderíamos ter feito a mensagem de erro em nosso console desaparecer usando os índices do array como keys. Os índices podem ser recuperados passando um segundo parâmetro para a função de retorno do método map:

notes.map((note, i) => ...)
Quando chamado desta forma, é atribuído ao i o valor do índice da posição no array onde a nota reside.

Como tal, uma forma de definir a criação de linhas (row) sem gerar erros é esta:

<ul>
  {notes.map((note, i) => 
    <li key={i}>
      {note.content}
    </li>
  )}
</ul>
Entretanto, isso não é recomendado visto que pode criar problemas indesejados mesmo se parecer estar funcionando bem.