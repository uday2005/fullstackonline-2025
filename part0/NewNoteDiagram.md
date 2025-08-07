sequenceDiagram
    participant browser
    participant server
 
    Note over browser, server: 1. Initial Page Load (HTML)
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML document
    deactivate server

    Note over browser, server: 2. Load CSS
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: The CSS file
    deactivate server

    Note over browser, server: 3. Load JS and then get previous notes
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: The JavaScript file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: All previous notes (JSON)
    deactivate server
    Note right of browser: Browser renders the list of notes

    Note over browser, server: 4. User submits a new note
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    Note left of server: Server saves the new note
    server-->>browser: Confirmation (e.g., HTTP 201 Created)
    deactivate server

    Note over browser, server: 5. (Your Step 6) Get the updated list
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: All notes INCLUDING the new one (JSON)
    deactivate server
    Note right of browser: Browser re-renders the page with the complete list