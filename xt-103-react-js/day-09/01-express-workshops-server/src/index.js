const path = require('path');
const express = require( 'express' );
const indexedRouter = require('./routes/index')

const app = express();

app.use(express.static(path.join(process.cwd(),'    public')))

app.use('/admin',indexedRouter);

const PORT = process.env.PORT || 3000;

app.listen( PORT, function( err ) {
    if( err ) {
        console.log( err.message );
        return;
    }

    console.log( `server running on http://localhost:${PORT}/` );
});