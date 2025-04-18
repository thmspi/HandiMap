const express = require('express');
const router = express.Router();
const { showQuestionnaire, submitAnswer } = require('../controllers/questionnaireController');

router.get('/:estId', showQuestionnaire);
router.post('/:estId', submitAnswer);

module.exports = router;
