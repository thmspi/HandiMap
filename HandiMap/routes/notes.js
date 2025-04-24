const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");
const Note = require("../models/note");

// Chemin pour stocker les avis
const avisFilePath = path.join(__dirname, "../data/avis.json");

// Créer le dossier data s'il n'existe pas
const dataDir = path.join(__dirname, "../data");
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir);
}

// Créer le fichier avis.json s'il n'existe pas
if (!fs.existsSync(avisFilePath)) {
  fs.writeFileSync(avisFilePath, JSON.stringify([]));
}

// Fonctions utilitaires
function readAvis() {
  const data = fs.readFileSync(avisFilePath, "utf8");
  return JSON.parse(data);
}

function writeAvis(avis) {
  fs.writeFileSync(avisFilePath, JSON.stringify(avis, null, 2));
}

// Route pour ajouter un nouvel avis
router.post("/notes/add", (req, res) => {
  try {
    console.log("Nouveau avis reçu:", req.body);

    const {
      etablissement_id,
      note_global,
      note_mental,
      note_visuel,
      note_auditif,
      note_moteur,
      commentaire,
    } = req.body;

    // Vérifications de base
    if (!etablissement_id || !note_global) {
      return res.status(400).send("Informations manquantes");
    }

    // Lire les avis existants
    const avis = readAvis();

    // Créer un nouvel avis
    const nouvelAvis = {
      id: Date.now().toString(),
      etablissement_id,
      note_global,
      note_mental: note_mental || null,
      note_visuel: note_visuel || null,
      note_auditif: note_auditif || null,
      note_moteur: note_moteur || null,
      commentaire: commentaire || "",
      createdAt: new Date().toISOString(),
    };

    // Ajouter l'avis
    avis.push(nouvelAvis);
    writeAvis(avis);

    console.log("Avis enregistré avec succès");

    // Rediriger vers la page des avis
    res.redirect(`/avis/etablissement/${etablissement_id}`);
  } catch (error) {
    console.error("Erreur lors de l'enregistrement de l'avis:", error);
    res.status(500).send("Une erreur est survenue");
  }
});

// Route pour voir les avis d'un établissement
router.get("/avis/etablissement/:id", (req, res) => {
  try {
    const etablissementId = req.params.id;
    console.log(
      `Consultation des avis pour l'établissement ${etablissementId}`
    );

    // Lire tous les avis
    const allAvis = readAvis();

    // Filtrer pour cet établissement
    const avisEtablissement = allAvis.filter(
      (avis) => avis.etablissement_id === etablissementId
    );

    console.log(`${avisEtablissement.length} avis trouvés`);

    // Récupérer les infos de l'établissement (à adapter selon votre structure)
    // Exemple simplifié - remplacer par une requête à votre base de données
    const getEtablissement = async (id) => {
      // Simuler une requête à la base de données
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            id,
            nom: `Établissement #${id}`,
            type_lieu: "Non spécifié",
            proprietaire_nom: "",
            proprietaire_prenom: "",
          });
        }, 100);
      });
    };

    // Obtenir les infos et afficher la page
    getEtablissement(etablissementId).then((etablissement) => {
      res.render("avis_etablissement", {
        etablissement,
        avis: avisEtablissement,
      });
    });
  } catch (error) {
    console.error("Erreur lors de la récupération des avis:", error);
    res.status(500).send("Une erreur est survenue");
  }
});

module.exports = router;
