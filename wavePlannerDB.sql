-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: localhost    Database: waveplaner
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.28-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `_prisma_migrations`
--

DROP TABLE IF EXISTS `_prisma_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) NOT NULL,
  `checksum` varchar(64) NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) NOT NULL,
  `logs` text DEFAULT NULL,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `applied_steps_count` int(10) unsigned NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_prisma_migrations`
--

LOCK TABLES `_prisma_migrations` WRITE;
/*!40000 ALTER TABLE `_prisma_migrations` DISABLE KEYS */;
INSERT INTO `_prisma_migrations` VALUES ('f6a47628-9404-48b1-b449-fdc96be7a81b','bee4baa4b8123078d3c722b1920b34f29351aaa966dd4fc40e705297aa728d2a','2024-03-16 12:00:55.853','20240316120055_init',NULL,NULL,'2024-03-16 12:00:55.834',1);
/*!40000 ALTER TABLE `_prisma_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `abonnementpremium`
--

DROP TABLE IF EXISTS `abonnementpremium`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `abonnementpremium` (
  `idAbonnement` int(11) NOT NULL AUTO_INCREMENT,
  `nomAbonnement` varchar(100) DEFAULT NULL,
  `prixAbonnement` double DEFAULT NULL,
  `isFreeA` tinyint(1) DEFAULT NULL,
  `descriptionA` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`idAbonnement`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `abonnementpremium`
--

LOCK TABLES `abonnementpremium` WRITE;
/*!40000 ALTER TABLE `abonnementpremium` DISABLE KEYS */;
/*!40000 ALTER TABLE `abonnementpremium` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `commande`
--

DROP TABLE IF EXISTS `commande`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `commande` (
  `idCommande` int(11) NOT NULL AUTO_INCREMENT,
  `dateCmd` date DEFAULT NULL,
  `montant` double DEFAULT NULL,
  `idUtilisateur` int(11) DEFAULT NULL,
  PRIMARY KEY (`idCommande`),
  KEY `commande_utilisateur_FK` (`idUtilisateur`),
  CONSTRAINT `commande_utilisateur_FK` FOREIGN KEY (`idUtilisateur`) REFERENCES `utilisateur` (`idUtilisateur`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `commande`
--

LOCK TABLES `commande` WRITE;
/*!40000 ALTER TABLE `commande` DISABLE KEYS */;
/*!40000 ALTER TABLE `commande` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `commentaire`
--

DROP TABLE IF EXISTS `commentaire`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `commentaire` (
  `idCommentaire` int(11) NOT NULL AUTO_INCREMENT,
  `contenu` varchar(100) DEFAULT NULL,
  `datePublication` date DEFAULT NULL,
  `idUtilisateur` int(11) DEFAULT NULL,
  `idEvent` int(11) DEFAULT NULL,
  PRIMARY KEY (`idCommentaire`),
  KEY `commentaire_utilisateur_FK` (`idUtilisateur`),
  KEY `commentaire_evenement_FK` (`idEvent`),
  CONSTRAINT `commentaire_evenement_FK` FOREIGN KEY (`idEvent`) REFERENCES `evenement` (`idEvent`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `commentaire_utilisateur_FK` FOREIGN KEY (`idUtilisateur`) REFERENCES `utilisateur` (`idUtilisateur`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `commentaire`
--

LOCK TABLES `commentaire` WRITE;
/*!40000 ALTER TABLE `commentaire` DISABLE KEYS */;
/*!40000 ALTER TABLE `commentaire` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `evenement`
--

DROP TABLE IF EXISTS `evenement`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `evenement` (
  `idEvent` int(11) NOT NULL AUTO_INCREMENT,
  `titreEvent` varchar(100) DEFAULT NULL,
  `descriptionEvent` varchar(100) DEFAULT NULL,
  `imgEvent` varchar(100) DEFAULT NULL,
  `maxUsersEvent` int(11) DEFAULT NULL,
  `isPublic` tinyint(1) DEFAULT NULL,
  `isCoach` tinyint(1) DEFAULT NULL,
  `dateEvent` date DEFAULT NULL,
  `dateDebutEvent` date DEFAULT NULL,
  `numberOfJoinedUser` int(11) DEFAULT NULL,
  `idUtilisateur` int(11) DEFAULT NULL,
  `idSpot` int(11) DEFAULT NULL,
  PRIMARY KEY (`idEvent`),
  KEY `evenement_utilisateur_FK` (`idUtilisateur`),
  KEY `evenement_spotsdesurf_FK` (`idSpot`),
  CONSTRAINT `evenement_spotsdesurf_FK` FOREIGN KEY (`idSpot`) REFERENCES `spotsdesurf` (`idSpot`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `evenement_utilisateur_FK` FOREIGN KEY (`idUtilisateur`) REFERENCES `utilisateur` (`idUtilisateur`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `evenement`
--

LOCK TABLES `evenement` WRITE;
/*!40000 ALTER TABLE `evenement` DISABLE KEYS */;
/*!40000 ALTER TABLE `evenement` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `facture`
--

DROP TABLE IF EXISTS `facture`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `facture` (
  `idFacture` int(11) NOT NULL AUTO_INCREMENT,
  `montant` double DEFAULT NULL,
  `dateEmission` date DEFAULT NULL,
  `statutPaiement` tinyint(1) DEFAULT NULL,
  `idUtilisateur` int(11) DEFAULT NULL,
  PRIMARY KEY (`idFacture`),
  KEY `facture_utilisateur_FK` (`idUtilisateur`),
  CONSTRAINT `facture_utilisateur_FK` FOREIGN KEY (`idUtilisateur`) REFERENCES `utilisateur` (`idUtilisateur`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `facture`
--

LOCK TABLES `facture` WRITE;
/*!40000 ALTER TABLE `facture` DISABLE KEYS */;
/*!40000 ALTER TABLE `facture` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `location`
--

DROP TABLE IF EXISTS `location`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `location` (
  `idLocation` int(11) NOT NULL AUTO_INCREMENT,
  `dateLocation` date DEFAULT NULL,
  `dureeLocation` int(11) DEFAULT NULL,
  `dateFin` date DEFAULT NULL,
  `FactureLocation` varchar(100) DEFAULT NULL,
  `idUtilisateur` int(11) DEFAULT NULL,
  `idProduit` int(11) DEFAULT NULL,
  PRIMARY KEY (`idLocation`),
  KEY `location_utilisateur_FK` (`idUtilisateur`),
  KEY `location_produit_FK` (`idProduit`),
  CONSTRAINT `location_produit_FK` FOREIGN KEY (`idProduit`) REFERENCES `produit` (`idProduit`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `location_utilisateur_FK` FOREIGN KEY (`idUtilisateur`) REFERENCES `utilisateur` (`idUtilisateur`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `location`
--

LOCK TABLES `location` WRITE;
/*!40000 ALTER TABLE `location` DISABLE KEYS */;
/*!40000 ALTER TABLE `location` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `magasin`
--

DROP TABLE IF EXISTS `magasin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `magasin` (
  `idMagasin` int(11) NOT NULL AUTO_INCREMENT,
  `nomMag` varchar(100) DEFAULT NULL,
  `adresseMag` varchar(100) DEFAULT NULL,
  `telMag` varchar(100) DEFAULT NULL,
  `descriptionMag` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`idMagasin`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `magasin`
--

LOCK TABLES `magasin` WRITE;
/*!40000 ALTER TABLE `magasin` DISABLE KEYS */;
/*!40000 ALTER TABLE `magasin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `message`
--

DROP TABLE IF EXISTS `message`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `message` (
  `idMessage` int(11) NOT NULL AUTO_INCREMENT,
  `contenu` varchar(300) DEFAULT NULL,
  `dateEnvoi` date DEFAULT NULL,
  `nameSender` varchar(100) DEFAULT NULL,
  `nameReciever` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`idMessage`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `message`
--

LOCK TABLES `message` WRITE;
/*!40000 ALTER TABLE `message` DISABLE KEYS */;
/*!40000 ALTER TABLE `message` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `produit`
--

DROP TABLE IF EXISTS `produit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `produit` (
  `idProduit` int(11) NOT NULL AUTO_INCREMENT,
  `typeProduit` varchar(100) DEFAULT NULL,
  `disponibilite` int(11) DEFAULT NULL,
  `tarifLocation` double DEFAULT NULL,
  `idDisponible` tinyint(1) DEFAULT NULL,
  `idMagasin` int(11) DEFAULT NULL,
  PRIMARY KEY (`idProduit`),
  KEY `produit_magasin_FK` (`idMagasin`),
  CONSTRAINT `produit_magasin_FK` FOREIGN KEY (`idMagasin`) REFERENCES `magasin` (`idMagasin`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produit`
--

LOCK TABLES `produit` WRITE;
/*!40000 ALTER TABLE `produit` DISABLE KEYS */;
/*!40000 ALTER TABLE `produit` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `spotsdesurf`
--

DROP TABLE IF EXISTS `spotsdesurf`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `spotsdesurf` (
  `idSpot` int(11) NOT NULL AUTO_INCREMENT,
  `nomSpot` varchar(100) NOT NULL,
  `localisation` varchar(100) DEFAULT NULL,
  `description` varchar(100) DEFAULT NULL,
  `niveauDifficulte` varchar(100) DEFAULT NULL,
  `rating` int(11) DEFAULT NULL,
  PRIMARY KEY (`idSpot`),
  UNIQUE KEY `spotsdesurf_unique` (`nomSpot`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `spotsdesurf`
--

LOCK TABLES `spotsdesurf` WRITE;
/*!40000 ALTER TABLE `spotsdesurf` DISABLE KEYS */;
/*!40000 ALTER TABLE `spotsdesurf` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `utilisateur`
--

DROP TABLE IF EXISTS `utilisateur`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `utilisateur` (
  `idUtilisateur` int(11) NOT NULL AUTO_INCREMENT,
  `nomU` varchar(100) NOT NULL,
  `emailU` varchar(100) NOT NULL,
  `motDePasseU` varchar(100) DEFAULT NULL,
  `villeU` varchar(100) DEFAULT NULL,
  `imgProfileU` varchar(100) DEFAULT NULL,
  `followerU` varchar(100) DEFAULT NULL,
  `adresseU` varchar(100) DEFAULT NULL,
  `telU` varchar(100) DEFAULT NULL,
  `dateNaissanceU` date DEFAULT NULL,
  `dateInscriptionU` date DEFAULT NULL,
  `roleU` enum('BASIC','COACH','ADMIN') NOT NULL DEFAULT 'BASIC',
  `diplomCoach` varchar(100) DEFAULT NULL,
  `dateAbonnement` date DEFAULT NULL,
  `datExpirationAbonnement` date DEFAULT NULL,
  `idAbonnement` int(11) DEFAULT NULL,
  PRIMARY KEY (`idUtilisateur`),
  UNIQUE KEY `utilisateur_unique` (`nomU`),
  UNIQUE KEY `utilisateur_unique_1` (`emailU`),
  KEY `utilisateur_abonnementpremium_FK` (`idAbonnement`),
  CONSTRAINT `utilisateur_abonnementpremium_FK` FOREIGN KEY (`idAbonnement`) REFERENCES `abonnementpremium` (`idAbonnement`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `utilisateur`
--

LOCK TABLES `utilisateur` WRITE;
/*!40000 ALTER TABLE `utilisateur` DISABLE KEYS */;
/*!40000 ALTER TABLE `utilisateur` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'waveplaner'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-03-16 14:23:19
