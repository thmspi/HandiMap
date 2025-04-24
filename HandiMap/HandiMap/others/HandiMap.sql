CREATE DATABASE HandiMap CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE HandiMap;


-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : ven. 18 avr. 2025 à 22:32
-- Version du serveur : 10.4.28-MariaDB
-- Version de PHP : 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `HandiMap`
--

-- --------------------------------------------------------

--
-- Structure de la table `etablissements`
--

CREATE TABLE `etablissements` (
  `id` int(11) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `adresse` text NOT NULL,
  `photo_url` text DEFAULT NULL,
  `proprietaire_nom` varchar(100) NOT NULL,
  `proprietaire_prenom` varchar(100) NOT NULL,
  `type_lieu` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `etablissements`
--

INSERT INTO `etablissements` (`id`, `nom`, `adresse`, `photo_url`, `proprietaire_nom`, `proprietaire_prenom`, `type_lieu`) VALUES
(1, 'Shop_1', '1 rue République', 'f', 'Thomas', 'Picou', 'Magasin');

-- --------------------------------------------------------

--
-- Structure de la table `notes`
--

CREATE TABLE `notes` (
  `etablissement_id` int(11) NOT NULL,
  `note_global` float DEFAULT NULL,
  `note_mental` float DEFAULT NULL,
  `note_visuel` float DEFAULT NULL,
  `note_auditif` float DEFAULT NULL,
  `note_moteur` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `notes`
--

INSERT INTO `notes` (`etablissement_id`, `note_global`, `note_mental`, `note_visuel`, `note_auditif`, `note_moteur`) VALUES
(1, 40, 40, 30, 30, 50);

-- --------------------------------------------------------

--
-- Structure de la table `questions`
--

CREATE TABLE `questions` (
  `id` int(11) NOT NULL,
  `categorie` enum('mental','visuel','auditif','moteur') NOT NULL,
  `texte` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `questions`
--

INSERT INTO `questions` (`id`, `categorie`, `texte`) VALUES
(1, 'mental', 'Les panneaux sont-ils illustrés avec des pictogrammes simples ?'),
(2, 'mental', 'Le personnel est-il formé à accueillir des personnes ayant une déficience intellectuelle ?'),
(3, 'mental', 'Y a-t-il des repères visuels clairs pour s’orienter dans le lieu ?'),
(4, 'mental', 'Les consignes de sécurité sont-elles expliquées de manière simplifiée ?'),
(5, 'mental', 'Le lieu est-il calme, sans surcharge sonore ou visuelle ?'),
(6, 'mental', 'Y a-t-il des espaces de repos facilement accessibles ?'),
(7, 'mental', 'Le personnel peut-il expliquer les règles de manière simple et adaptée ?'),
(8, 'mental', 'Les informations sont-elles disponibles sous forme facile à lire et à comprendre (FALC) ?'),
(9, 'mental', 'Les couleurs sont-elles utilisées pour différencier les zones ?'),
(10, 'mental', 'Des accompagnateurs sont-ils autorisés gratuitement ou à tarif réduit ?'),
(11, 'visuel', 'Les cheminements sont-ils libres d’obstacles au sol ?'),
(12, 'visuel', 'Y a-t-il des bandes podotactiles à l’entrée ou aux croisements ?'),
(13, 'visuel', 'Les ascenseurs disposent-ils de signaux sonores et de boutons en braille ?'),
(14, 'visuel', 'Y a-t-il une signalétique en braille ou en gros caractères ?'),
(15, 'visuel', 'Les escaliers sont-ils munis de contremarches et de bandes contrastées ?'),
(16, 'visuel', 'L’éclairage est-il suffisant et homogène dans les circulations ?'),
(17, 'visuel', 'Les portes vitrées sont-elles signalées par des bandes contrastées ?'),
(18, 'visuel', 'Le personnel est-il sensibilisé à l’assistance des personnes aveugles ou malvoyantes ?'),
(19, 'visuel', 'Y a-t-il un service d’accompagnement ou d’audiodescription proposé ?'),
(20, 'visuel', 'Les menus ou documents sont-ils disponibles en braille ou en version audio ?'),
(21, 'auditif', 'Y a-t-il une boucle magnétique dans les zones d’accueil ?'),
(22, 'auditif', 'Le personnel est-il formé à la langue des signes ou à la communication écrite ?'),
(23, 'auditif', 'Les alarmes sont-elles visuelles (flash lumineux) en plus d’être sonores ?'),
(24, 'auditif', 'Des écrans d’affichage permettent-ils de suivre les annonces sonores ?'),
(25, 'auditif', 'Le lieu propose-t-il un service d’interprétariat en LSF ?'),
(26, 'auditif', 'Les vidéos sont-elles sous-titrées ?'),
(27, 'auditif', 'Le personnel sait-il utiliser des moyens de communication alternatifs (papier, SMS, tablette) ?'),
(28, 'auditif', 'Y a-t-il un chat ou système de contact en ligne pour les réservations ?'),
(29, 'auditif', 'Les consignes de sécurité sont-elles disponibles à l’écrit ?'),
(30, 'auditif', 'Les files d’attente disposent-elles d’un affichage visuel d’appel ?'),
(31, 'moteur', 'L’entrée principale est-elle de plain-pied ou équipée d’une rampe ?'),
(32, 'moteur', 'Les portes ont-elles une largeur suffisante pour un fauteuil roulant ?'),
(33, 'moteur', 'Y a-t-il des places de parking réservées proches de l’entrée ?'),
(34, 'moteur', 'Les sanitaires sont-ils accessibles aux personnes en fauteuil ?'),
(35, 'moteur', 'Les comptoirs d’accueil ont-ils une partie abaissée ?'),
(36, 'moteur', 'Les ascenseurs sont-ils assez larges pour un fauteuil roulant ?'),
(37, 'moteur', 'Les boutons d’ascenseur sont-ils à une hauteur accessible ?'),
(38, 'moteur', 'Y a-t-il une rampe d’accès avec une pente réglementaire ?'),
(39, 'moteur', 'Les revêtements de sol sont-ils adaptés (non glissants, sans obstacles) ?'),
(40, 'moteur', 'Les escaliers disposent-ils de mains courantes des deux côtés ?'),
(41, 'moteur', 'L’entrée secondaire est-elle également accessible ?'),
(42, 'moteur', 'Les chemins extérieurs sont-ils praticables en fauteuil roulant ?'),
(43, 'moteur', 'Les portes sont-elles automatiques ou faciles à ouvrir ?'),
(44, 'moteur', 'Les tables sont-elles accessibles en fauteuil roulant ?'),
(45, 'moteur', 'Y a-t-il des espaces de manœuvre pour les fauteuils (virage, demi-tour) ?'),
(46, 'moteur', 'Les interrupteurs et dispositifs de commande sont-ils à hauteur accessible ?'),
(47, 'moteur', 'Y a-t-il un ascenseur pour accéder à tous les étages ?'),
(48, 'moteur', 'Les obstacles (poteaux, mobilier) sont-ils bien signalés ?'),
(49, 'moteur', 'Le personnel peut-il apporter une assistance physique si nécessaire ?'),
(50, 'moteur', 'Le lieu respecte-t-il la norme d’accessibilité ERP pour les personnes à mobilité réduite ?');

-- --------------------------------------------------------

--
-- Structure de la table `reponses`
--

CREATE TABLE `reponses` (
  `id` int(11) NOT NULL,
  `etablissement_id` int(11) NOT NULL,
  `question_id` int(11) NOT NULL,
  `reponse` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `reponses`
--

INSERT INTO `reponses` (`id`, `etablissement_id`, `question_id`, `reponse`) VALUES
(1, 1, 1, 1),
(2, 1, 2, 1),
(3, 1, 3, 1),
(4, 1, 4, 1),
(5, 1, 5, 0),
(6, 1, 6, 0),
(7, 1, 7, 0),
(8, 1, 8, 0),
(9, 1, 9, 0),
(10, 1, 10, 0),
(11, 1, 11, 0),
(12, 1, 12, 1),
(13, 1, 13, 1),
(14, 1, 14, 0),
(15, 1, 15, 0),
(16, 1, 16, 0),
(17, 1, 17, 0),
(18, 1, 18, 0),
(19, 1, 19, 0),
(20, 1, 20, 1),
(21, 1, 21, 1),
(22, 1, 22, 1),
(23, 1, 23, 0),
(24, 1, 24, 0),
(25, 1, 25, 0),
(26, 1, 26, 0),
(27, 1, 27, 0),
(28, 1, 28, 0),
(29, 1, 29, 0),
(30, 1, 30, 1),
(31, 1, 31, 1),
(32, 1, 32, 1),
(33, 1, 33, 0),
(34, 1, 34, 1),
(35, 1, 35, 0),
(36, 1, 36, 0),
(37, 1, 37, 0),
(38, 1, 38, 0),
(39, 1, 39, 0),
(40, 1, 40, 0),
(41, 1, 41, 0),
(42, 1, 42, 1),
(43, 1, 43, 1),
(44, 1, 44, 1),
(45, 1, 45, 1),
(46, 1, 46, 1),
(47, 1, 47, 1),
(48, 1, 48, 1),
(49, 1, 49, 0),
(50, 1, 50, 0);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `etablissements`
--
ALTER TABLE `etablissements`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `notes`
--
ALTER TABLE `notes`
  ADD PRIMARY KEY (`etablissement_id`);

--
-- Index pour la table `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `reponses`
--
ALTER TABLE `reponses`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `etablissement_id` (`etablissement_id`,`question_id`),
  ADD KEY `question_id` (`question_id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `etablissements`
--
ALTER TABLE `etablissements`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `questions`
--
ALTER TABLE `questions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT pour la table `reponses`
--
ALTER TABLE `reponses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `notes`
--
ALTER TABLE `notes`
  ADD CONSTRAINT `notes_ibfk_1` FOREIGN KEY (`etablissement_id`) REFERENCES `etablissements` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `reponses`
--
ALTER TABLE `reponses`
  ADD CONSTRAINT `reponses_ibfk_1` FOREIGN KEY (`etablissement_id`) REFERENCES `etablissements` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `reponses_ibfk_2` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`) ON DELETE CASCADE;
COMMIT;

ALTER TABLE notes
ADD COLUMN commentaire TEXT NULL AFTER note_moteur;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
