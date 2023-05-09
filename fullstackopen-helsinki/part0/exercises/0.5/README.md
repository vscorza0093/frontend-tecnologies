# 0.5: Diagrama de SPA

Crie um diagrama que retrate o contexto em que o usuário utilize a versão de aplicação de página única das notas em https://studies.cs.helsinki.fi/exampleapp/spa.



```mermaid
---
Helsinki Fullstack Open - part 0 exercise 4
new_note_spa
---
flowchart TD
    A[Browser] --> B{POST}
    B --> |open server connection| C
    C[Server] --> D{Status Code}
    D -->|close server connection| E[201]
    E --> F{content type}
    F --> |application/json| A
```

General
    Request URL: https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    Request Method: POST
    Status Code: 201 

Response Headers
    content-type: application/json;