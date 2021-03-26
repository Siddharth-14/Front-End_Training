const express = require( 'express' );
const indexRouter = require( './routes/index' );

const app = express();

app.use( indexRouter );

const PORT = process.env.PORT || 3000;

app.listen( PORT, function( err ) {
    if( err ) {
        console.log( err.message );
        return;
    }

    console.log( `server running on http://localhost:${PORT}/` );
});