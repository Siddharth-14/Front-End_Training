const workshops = require( '../../../data/workshops.json' );

function getWorkshops( req, res ) {
    res.json( workshops );
}

function getWorkshopById( req, res ) {
    const id = parseInt( req.params.id, 10 );
    const fieldsStr = req.query.fields;
    let fields;

    if( fieldsStr ) {
        fields = fieldsStr.split( ',' );
    }

    const workshop = workshops.find( workshop => workshop.id === id );

    if( workshop ) {
        const workskhopWithFields = {};

        if( fields ) {
            for( let key in workshop ) {
                if( fields.includes( key ) ) {
                    workskhopWithFields[key] = workshop[key];
                }
            }
        } else {
            workskhopWithFields = workshop;
        }

        res.json( workskhopWithFields );
    } else {
        res.status( 404 );
        res.json({
            message: 'The workshop you are looking for does not exist'
        });
    }
}

// function getAddWorkshop( req, res ) {
//     res.render( 'add-workshop', {
//         title: 'Add Workshop | Workshops App'
//     });
// }

// function postAddWorkshop( req, res ) {
//     const formData = req.body;

//     res.json( formData );
// }

module.exports = {
    getWorkshops,
    getWorkshopById
    // getAddWorkshop,
    // postAddWorkshop
};