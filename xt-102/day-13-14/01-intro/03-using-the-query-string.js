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
    
    switch( parsedUrl.pathname ) {
        case '/api/teams':
            res.write( 'CSR Team, Fun Friday Team, NASA Project, Group A, Group B, Group C, Group D' );
            break;
        case '/api/meetings':
            res.write( 'Milestone 3 meeting, Project party' );
            break;
        case '/api/calendar':
            res.write( 'Milestone 3 presentation' );
            break;
        default:
            res.write( 'hello world' );
    }
    
    res.end();
});

// we start the server, and it will "listen" on port 8080
server.listen( 8080 );

console.log( 'end of script' );