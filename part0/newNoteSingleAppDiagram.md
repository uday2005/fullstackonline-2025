sequenceDiagram
    participant user
    participant browser
    participant server

    user->>browser: Types text into the form and clicks 'Save'

    Note right of browser: The JavaScript code captures the form data,<br/>prevents the default page reload, and prepares a POST request.

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    Note left of server: The server receives the new note, saves it,<br/>and sends the newly created note back in the response.
    server-->>browser: 201 Created (with the new note as JSON data)
    deactivate server

    Note right of browser: The browser receives the new note and executes<br/>the callback function, which adds the new note to the<br/>visible list on the page without reloading.