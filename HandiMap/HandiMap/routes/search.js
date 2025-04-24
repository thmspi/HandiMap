const express = require('express');
const router = express.Router();
const { index, searchResults } = require('../controllers/searchController');

router.get('/', index);
router.get('/search', searchResults);

module.exports = router;

