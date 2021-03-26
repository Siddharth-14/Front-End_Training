function getHome( req, res ) {
    res.send( 'Hello, Express' );
}

function getAbout( req, res ) {
    res.send( 
        `
            <h1>About</h1>
        `
    );
}

module.exports = {
    getHome,
    getAbout
};