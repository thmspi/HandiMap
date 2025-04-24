const { Etablissement, Note } = require("../models");
const { Op } = require("sequelize");

exports.index = async (req, res) => {
  const items = await Etablissement.findAll({ include: Note });
  res.render("index", { items });
};

exports.searchResults = async (req, res) => {
  const { query } = req.query;
  const items = await Etablissement.findAll({
    where: { nom: { [Op.like]: `%${query}%` } },
    include: Note,
  });
  res.render("search_result", { items });
};
