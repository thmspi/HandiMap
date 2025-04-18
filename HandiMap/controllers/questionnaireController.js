const { Etablissement, Question, Reponse, Note } = require('../models');

exports.showQuestionnaire = async (req, res) => {
  const est = await Etablissement.findByPk(req.params.estId);
  const questions = await Question.findAll({ order: [['id','ASC']] });
  const answers = await Reponse.findAll({ where: { etablissement_id: est.id } });
  res.render('questionnaire', {
    est,
    questions,
    answers: answers.map(a => a.reponse)
  });
};

exports.submitAnswer = async (req, res) => {
  const estId = req.params.estId;
  const respArray = req.body.responses.split(',');

  await Reponse.destroy({ where: { etablissement_id: estId } });
  await Note.destroy({ where: { etablissement_id: estId } });

  const total = respArray.length;
  let yesCount = 0;
  const cats = { mental:[], visuel:[], auditif:[], moteur:[] };
  const questions = await Question.findAll({ order: [['id','ASC']] });

  for (let i = 0; i < questions.length; i++) {
    const q = questions[i];
    const val = respArray[i] === 'yes';
    if (val) yesCount++;
    cats[q.categorie].push(val);
    await Reponse.create({
      etablissement_id: estId,
      question_id: q.id,
      reponse: val
    });
  }

  const overall = (yesCount / total) * 100;
  const calc = {};
  for (let c in cats) {
    calc[c] = (cats[c].filter(v => v).length / cats[c].length) * 100;
  }

  await Note.create({
    etablissement_id: estId,
    note_global: overall,
    note_mental: calc.mental,
    note_visuel: calc.visuel,
    note_auditif: calc.auditif,
    note_moteur: calc.moteur
  });

  res.redirect(`/search?query=`);
};
