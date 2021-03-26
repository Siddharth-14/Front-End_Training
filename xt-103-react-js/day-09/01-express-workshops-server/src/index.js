const path = require( 'path' );
const express = require( 'express' );
const indexRouter = require( './routes/index' );

const app = express();

// npm i ejs
app.set( 'view engine', 'ejs' );
app.set( 'views', path.join( process.cwd(), 'src/views' ) );

// we set up the static file server middleware (to serve CSS, JS, images, font files etc.)
// you can set up multiple folders by calling express.static() multiple times
app.use( express.static( path.join( process.cwd(), 'public' ) ) )

// A router can be "mounted" on a path
app.use( indexRouter );

const PORT = process.env.PORT || 3000;

app.listen( PORT, function( err ) {
    if( err ) {
        console.log( err.message );
        return;
    }

    console.log( `server running on http://localhost:${PORT}/` );
});