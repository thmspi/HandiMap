const express = require('express');
const router = express.Router();

// Destructure the handlers from the controller
// Make sure the filename and export names match exactly!
const { showNewForm, createEst } = require('../controllers/establishmentController');

router.get('/new', showNewForm);
router.post('/',    createEst);

module.exports = router;
