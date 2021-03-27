const workshops = require( '../../../data/workshops.json' );

function getWorkshops( req, res ) {
    res.json( workshops );
}

function getWorkshopById( req, res ) {
    const id = parseInt( req.params.id, 10 );
    const start = req.query.start;
    const end = req.query.end;
    
    const workshop = workshops.filter( workshop => {
        if(workshop.id>=start && workshop.id<=end){
            return workshop;
        };
    })
    
    if( workshop.length>0 ) {
        
        const workskhopWithFields = {};
            for( let key in workshop ) {
                    workskhopWithFields[key] = workshop[key];
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