const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db');

class Note extends Model {}

Note.init({
  etablissement_id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  note_global: DataTypes.FLOAT,
  note_mental: DataTypes.FLOAT,
  note_visuel: DataTypes.FLOAT,
  note_auditif: DataTypes.FLOAT,
  note_moteur: DataTypes.FLOAT,
  commentaire: {
    type: DataTypes.TEXT,
    allowNull: true
  }
}, {
  sequelize,
  modelName: 'note',
  tableName: 'notes'
});

module.exports = Note;
