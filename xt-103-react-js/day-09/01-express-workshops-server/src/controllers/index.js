const path = require( 'path' );

function getHome( req, res ) {
    // res.send( 'Hello, Express' );
    // process.cwd() -> folder where Node proceds was started (project root folder)
    res.sendFile( path.join( process.cwd(), 'src/views/index.html' ) );
}

// EXERCISE: Do the same for about (create and serve about.html)
function getAbout( req, res ) {
    res.sendFile( 
        path.join( process.cwd(), 'src/views/about.html' ) );
}

module.exports = {
    getHome,
    getAbout
};