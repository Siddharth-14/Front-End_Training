const express = require( 'express' );
const { getWorkshops, getWorkshopById } = require( '../controllers/workshops' );

const router = express.Router();

router.get( '/workshops', getWorkshops );
router.get( '/workshops/:id', getWorkshopById );
// router.get( '/workshops/add', getAddWorkshop );
// router.post( '/workshops/save', postAddWorkshop );

module.exports = router;