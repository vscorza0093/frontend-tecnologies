## Resolution: 

requesting change in html page
```mermaid
---
Helsinki Fullstack Open - part 0 exercise 4
new_note
---
flowchart TD
    A[Browser] --> B{POST}
    B --> |open server connection| C
    C[Server] --> D{Status Code}
    D -->|close server connection| E[302]
    E -->|content-type| F[text/html]
    F --> A
```

requesting html page
```mermaid
---
Helsinki Fullstack Open - part 0 exercise 4
note
---
flowchart TD
    A[Browser] --> B{GET}
    B --> |open server connection| C
    C[Server] --> D{Status Code}
    D -->|close server connection| E[200] 
    E -->|content-type| F[text/html]
    F --> A
```

requesting css file
```mermaid
---
Helsinki Fullstack Open - part 0 exercise 4
main.css
---
flowchart TD
    A[Browser] --> B{GET}
    B --> |open server connection| C
    C[Server] --> D{Status Code}
    D -->|close server connection| E[200]
    E -->|content-type| F[text/css]
    F --> A
```

requesting javascript file
```mermaid
---
Helsinki Fullstack Open - part 0 exercise 4
main.js
---
flowchart TD
    A[Browser] --> B{GET}
    B --> |open server connection| C
    C[Server] --> D{Status Code}
    D -->|close server connection| E[200]
    E --> F{content type}
    F --> |application/javascript| A
```

requesting json file
```mermaid
---
Helsinki Fullstack Open - part 0 exercise 4
data.json
---
flowchart TD
    A[Browser] --> B{GET}
    B --> |open server connection| C
    C[Server] --> D{Status Code}
    D -->|close server connection| E[200]
    E --> F{content type}
    F --> |application/json| A
```

Rascunho
    new_note
        General
            Request URL: https://studies.cs.helsinki.fi/exampleapp/new_note
            Request Method: POST
            Status Code: 302 


        Response Header
            content-type: text/html; charset=utf-8

    notes
        General
            Request URL: https://studies.cs.helsinki.fi/exampleapp/notes
            Request Method: GET
            Status Code: 200 

        Response Header
            content-type: text/html; charset=utf-8

    main.css
        General
            Request URL: https://studies.cs.helsinki.fi/exampleapp/main.css
            Request Method: GET
            Status Code: 200 


        Response Header
            content-type: text/css; charset=UTF-8


    main.js
        General
            Request URL: https://studies.cs.helsinki.fi/exampleapp/main.js
            Request Method: GET
            Status Code: 200 

        
        Response Header
            content-type: application/javascript; charset=UTF-8


    data.json
        General
            Request URL: https://studies.cs.helsinki.fi/exampleapp/data.json
            Request Method: GET
            Status Code: 200 


        Response Header
            content-type: application/json; charset=utf-8




        {"content":"ascariasisband","date":"2023-05-09T21:20:01.893Z"}