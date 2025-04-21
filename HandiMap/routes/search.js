const express = require('express'); 
const router = express.Router(); 
const { index, searchResults } = require('../controllers/searchController');

router.get('/', index); 
router.get('/search', searchResults); // Cette méthode doit renvoyer les résultats en format HTML

module.exports = router;