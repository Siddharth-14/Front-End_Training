const http = require( 'http' );
const url = require( 'url' );

// https://nodejs.org/dist/latest-v14.x/docs/api/http.html#http_http_createserver_options_requestlistener
// we create a server and say what to do when an HTTP request is received
const server = http.createServer(function( req, res ) {
    // a string - for a request http://localhost:8080/api/teams, it is /api/teams
    
    const parsedUrl = url.parse( req.url, true );
    
    console.log( parsedUrl );
    console.log( 'pathname = ', parsedUrl.pathname )
    console.log( 'query = ', parsedUrl.query )
    console.log(parsedUrl.query["x"])
    switch(parsedUrl.query["op"]){
        case 'addition':
            res.write( "" + (parseInt(parsedUrl.query["x"]) + parseInt(parsedUrl.query["y"])) );
            break;
        case 'subtraction':
            res.write( ""+(parseInt(parsedUrl.query["x"]) - parseInt(parsedUrl.query["y"])) );
            break;
        case 'multiplication':
            res.write( ""+(parseInt(parsedUrl.query["x"]) * parseInt(parsedUrl.query["y"])) );
            break;
        default:
            res.write( 'error' );
    }
    res.end();
});

// we start the server, and it will "listen" on port 8080
server.listen( 8080 );

console.log( 'end of script' );