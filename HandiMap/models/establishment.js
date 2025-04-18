const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db');

class Etablissement extends Model {}
Etablissement.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nom: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  adresse: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  photo_url: DataTypes.TEXT,
  proprietaire_nom: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  proprietaire_prenom: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  type_lieu: {
    type: DataTypes.STRING(100),
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'etablissement',
  tableName: 'etablissements'
});

module.exports = Etablissement;
