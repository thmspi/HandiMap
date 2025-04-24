const { Etablissement, Note } = require('../models');
const { Op } = require('sequelize');

exports.index = (req, res) => {
  res.render('index');
};

exports.searchResults = async (req, res) => {
  const { query } = req.query;
  const items = await Etablissement.findAll({
    where: { nom: { [Op.like]: `%${query}%` } },
    include: Note
  });
  res.render('search_results', { items, query });
};
