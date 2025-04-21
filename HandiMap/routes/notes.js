const express = require('express');
const router = express.Router();
const Note = require('../models/note');

router.post('/add', async (req, res) => {
  const {
    etablissement_id,
    note_global,
    note_mental,
    note_visuel,
    note_auditif,
    note_moteur,
    commentaire
  } = req.body;

  try {
    await Note.create({
      etablissement_id,
      note_global,
      note_mental,
      note_visuel,
      note_auditif,
      note_moteur,
      commentaire
    });
    res.redirect('/');
  } catch (err) {
    console.error('Erreur lors de l’ajout de la note :', err);
    res.status(500).send('Erreur serveur');
  }
});

module.exports = router;
