const express = require('express');
const router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
const flightsCtrl = require('../controllers/flights');

router.get('/', flightsCtrl.index);

router.get('/new', flightsCtrl.new);

router.get('/:id', flightsCtrl.show);

router.post('/', flightsCtrl.create);

//post rout 
// router.post('/', flightsCtrl.create)
module.exports = router;
