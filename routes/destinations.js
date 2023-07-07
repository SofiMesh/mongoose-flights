const express = require('express')
const router = express.Router();

const destinationsCtrl = require('../controllers/destiantions')

router.post('/flights/:id/destinations, destinationsCtrl.create');
router.delete('/destination/:id', destinationsCtrl.delete);

module.exports = router;