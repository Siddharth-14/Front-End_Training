const workshops = require( '../../data/workshops.json' );

function getWorkshops( req, res ) {
    res.render( 'workshops', {
        title: 'Workshops List | Workshops App',
        workshops
    });
}

function getAddWorkshop( req, res ) {
    res.render( 'add-workshop', {
        title: 'Add Workshop | Workshops App'
    });
}

function postAddWorkshop( req, res ) {
    const formData = req.body;
    formData.location = {
        "address":formData.address,
        "city":formData.city,
        "state":formData.state,
    }
    delete formData.address;
    delete formData.city;
    delete formData.state;
    res.json( formData );
}

module.exports = {
    getWorkshops,
    getAddWorkshop,
    postAddWorkshop
};
