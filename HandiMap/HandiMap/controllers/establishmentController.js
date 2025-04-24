const { Etablissement } = require('../models');

exports.showNewForm = (req, res) => {
  res.render('new_establishment');
};

exports.createEst = async (req, res) => {
  try {
    // req.body should have nom, adresse, photo_url, proprietaire_nom, proprietaire_prenom, type_lieu
    await Etablissement.create(req.body);
    res.redirect('/');
  } catch (err) {
    console.error('Error creating établissement:', err);
    res.status(500).send('Internal Server Error');
  }
};
