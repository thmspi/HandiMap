const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db');

class Question extends Model {}
Question.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  categorie: {
    type: DataTypes.ENUM('mental','visuel','auditif','moteur'),
    allowNull: false
  },
  texte: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'question',
  tableName: 'questions'
});

module.exports = Question;
