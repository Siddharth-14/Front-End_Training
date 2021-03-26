const workshops = require( '../../data/workshops.json' );

function getWorkshops( req, res ) {
    res.render( 'workshops', {
        title: 'Workshops List | Workshops App',
        workshops
    });
}

module.exports = {
    getWorkshops
};