# 0.4: Novo diagrama das notas

Na seção Carregando uma página contendo JavaScript — revisão[1], a cadeia de eventos causada pela abertura da página https://studies.cs.helsinki.fi/exampleapp/notes é retratada como um diagrama de sequência[2].

O diagrama foi feito como um arquivo GitHub Markdown usando a sintaxe Mermaid[3], como o exemplo a seguir:

sequenceDiagram
    participant browser
    participant server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML document
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the css file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server

    Note right of browser: O navegador começa a executar o código JavaScript que busca o JSON do servidor

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "HTML é fácil", "date": "2023-1-1" }, ... ]
    deactivate server

    Note right of browser: O navegador executa a função callback (função de retorno de chamada) que renderiza as notas

Crie um diagrama semelhante que retrate a situação em que o usuário cria uma nova nota na página https://studies.cs.helsinki.fi/exampleapp/notes escrevendo algo no campo de texto e clicando no botão submit.

Se necessário, mostre operações no navegador ou no servidor como comentários no diagrama.

O diagrama não precisa ser um diagrama de sequência. Qualquer maneira sensata de representar os eventos já estará de bom tamanho.

Todas as informações necessárias para fazer este e os próximos dois exercícios podem ser encontradas no texto desta parte[4]. A ideia desses exercícios é fazer você reler o texto e pensar no que está acontecendo. Não é necessário ler o código[5] da aplicação, mas não deixa de ser algo possível.

Você pode fazer os diagramas com qualquer programa, mas talvez a maneira mais fácil e melhor de se fazer diagramas seja utilizando a sintaxe Mermaid[6], agora implementada em páginas Markdown do GitHub[7]!

[1] https://fullstackopen.com/ptbr/part0/fundamentos_de_aplicacoes_web#carregando-uma-pagina-contendo-java-script-revisao

[2] https://www.geeksforgeeks.org/unified-modeling-language-uml-sequence-diagrams/

[3] https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/creating-diagrams

[4] https://fullstackopen.com/ptbr/part0/fundamentos_de_aplicacoes_web#formularios-forms-e-http-post

[5] https://github.com/mluukkai/example_app

[6] https://github.com/mermaid-js/mermaid#sequence-diagram-docs---live-editor

[7] https://github.blog/2022-02-14-include-diagrams-markdown-files-mermaid/