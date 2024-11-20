const router = require('express').Router()
const passport = require('passport')

const loan= require('../controllers/loan');
const shipment = require('../controllers/shipment');

router.post('/createLoan',loan.createLoan);

router.post('/createShipment', shipment.createShipment );

router.put('/shipmentStatus', shipment.updateShipment);

router.get('/shipmentStatus', shipment.getShipment);


module.exports = router