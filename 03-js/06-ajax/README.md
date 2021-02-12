# Ajax
- _AJAX_ - Asynchronous JavaScript and XML
- Why Ajax? - for making HTTP (protocol) requests (header (key-value pairs, eg. 'Content-Type' : 'text/html'), body - has the data)
- How is the data formatted (content type)
    - understood and editable by us and machines (any language)
        - XML (eXtensible Markup Language)
        - JSON 
            - JavaScript Object Notation
            - number, boolean, string, plain JS object, array, null
            - Usually the top level has an object / array
            - string should be double quoted
        - We usually work with JSON - in general it is lighter than XML, and it is closer to JS object syntax
- How to use Ajax
    - XMLHttpRequest
        - old API
        - supported on all browsers
        - callbacks
    - fetch API
        - new API
        - modern browsers (needs polyfill for old browsers)
        - promise (are better than using callbacks)
- HTTP Status codes
    // misc
    // 100
    // web socket communication

    // success!
    // 200 (i have given what you asked for successfully)
    // 201 (i have created a resource - eg. added a new meeting)
    // 204 (empty response - eg. when you delete a resource)

    // redirect codes (server asks browser to check the resource at a different URL)
    // 300, 301, 304, 

    // error codes
    // 400, 401, 404 (page not found)

    // internal server errors
    // 500