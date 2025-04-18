const sequelize = require('../config/db');
const Etablissement = require('./establishment');
const Question = require('./question');
const Reponse = require('./response');
const Note = require('./note');

// Associations
Etablissement.hasMany(Reponse, { foreignKey: 'etablissement_id' });
Reponse.belongsTo(Etablissement, { foreignKey: 'etablissement_id' });
Question.hasMany(Reponse, { foreignKey: 'question_id' });
Reponse.belongsTo(Question, { foreignKey: 'question_id' });
Etablissement.hasOne(Note, { foreignKey: 'etablissement_id' });
Note.belongsTo(Etablissement, { foreignKey: 'etablissement_id' });

module.exports = { sequelize, Etablissement, Question, Reponse, Note };
