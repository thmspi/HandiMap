const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db');

class Reponse extends Model {}
Reponse.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  etablissement_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  question_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  reponse: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'reponse',
  tableName: 'reponses'
});

module.exports = Reponse;

