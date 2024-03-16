-- CreateTable
CREATE TABLE `utilisateur` (
    `idUtilisateur` INTEGER NOT NULL AUTO_INCREMENT,
    `nomU` VARCHAR(100) NOT NULL,
    `emailU` VARCHAR(100) NOT NULL,
    `motDePasseU` VARCHAR(100) NULL,
    `villeU` VARCHAR(100) NULL,
    `imgProfileU` VARCHAR(100) NULL,
    `followerU` VARCHAR(100) NULL,
    `adresseU` VARCHAR(100) NULL,
    `telU` VARCHAR(100) NULL,
    `dateNaissanceU` DATE NULL,
    `dateInscriptionU` DATE NULL,
    `roleU` ENUM('BASIC', 'COACH', 'ADMIN') NOT NULL DEFAULT 'BASIC',
    `diplomCoach` VARCHAR(100) NULL,
    `dateAbonnement` DATE NULL,
    `datExpirationAbonnement` DATE NULL,
    `idAbonnement` INTEGER NULL,

    UNIQUE INDEX `utilisateur_unique`(`nomU`),
    UNIQUE INDEX `utilisateur_unique_1`(`emailU`),
    INDEX `utilisateur_abonnementpremium_FK`(`idAbonnement`),
    PRIMARY KEY (`idUtilisateur`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `abonnementpremium` (
    `idAbonnement` INTEGER NOT NULL AUTO_INCREMENT,
    `nomAbonnement` VARCHAR(100) NULL,
    `prixAbonnement` DOUBLE NULL,
    `isFreeA` BOOLEAN NULL,
    `descriptionA` VARCHAR(100) NULL,

    PRIMARY KEY (`idAbonnement`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `commande` (
    `idCommande` INTEGER NOT NULL AUTO_INCREMENT,
    `dateCmd` DATE NULL,
    `montant` DOUBLE NULL,
    `idUtilisateur` INTEGER NULL,

    INDEX `commande_utilisateur_FK`(`idUtilisateur`),
    PRIMARY KEY (`idCommande`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `commentaire` (
    `idCommentaire` INTEGER NOT NULL AUTO_INCREMENT,
    `contenu` VARCHAR(100) NULL,
    `datePublication` DATE NULL,
    `idUtilisateur` INTEGER NULL,
    `idEvent` INTEGER NULL,

    INDEX `commentaire_evenement_FK`(`idEvent`),
    INDEX `commentaire_utilisateur_FK`(`idUtilisateur`),
    PRIMARY KEY (`idCommentaire`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `evenement` (
    `idEvent` INTEGER NOT NULL AUTO_INCREMENT,
    `titreEvent` VARCHAR(100) NULL,
    `descriptionEvent` VARCHAR(100) NULL,
    `imgEvent` VARCHAR(100) NULL,
    `maxUsersEvent` INTEGER NULL,
    `isPublic` BOOLEAN NULL,
    `isCoach` BOOLEAN NULL,
    `dateEvent` DATE NULL,
    `dateDebutEvent` DATE NULL,
    `numberOfJoinedUser` INTEGER NULL,
    `idUtilisateur` INTEGER NULL,
    `idSpot` INTEGER NULL,

    INDEX `evenement_spotsdesurf_FK`(`idSpot`),
    INDEX `evenement_utilisateur_FK`(`idUtilisateur`),
    PRIMARY KEY (`idEvent`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `facture` (
    `idFacture` INTEGER NOT NULL AUTO_INCREMENT,
    `montant` DOUBLE NULL,
    `dateEmission` DATE NULL,
    `statutPaiement` BOOLEAN NULL,
    `idUtilisateur` INTEGER NULL,

    INDEX `facture_utilisateur_FK`(`idUtilisateur`),
    PRIMARY KEY (`idFacture`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `location` (
    `idLocation` INTEGER NOT NULL AUTO_INCREMENT,
    `dateLocation` DATE NULL,
    `dureeLocation` INTEGER NULL,
    `dateFin` DATE NULL,
    `FactureLocation` VARCHAR(100) NULL,
    `idUtilisateur` INTEGER NULL,
    `idProduit` INTEGER NULL,

    INDEX `location_produit_FK`(`idProduit`),
    INDEX `location_utilisateur_FK`(`idUtilisateur`),
    PRIMARY KEY (`idLocation`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `magasin` (
    `idMagasin` INTEGER NOT NULL AUTO_INCREMENT,
    `nomMag` VARCHAR(100) NULL,
    `adresseMag` VARCHAR(100) NULL,
    `telMag` VARCHAR(100) NULL,
    `descriptionMag` VARCHAR(100) NULL,

    PRIMARY KEY (`idMagasin`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `message` (
    `idMessage` INTEGER NOT NULL AUTO_INCREMENT,
    `contenu` VARCHAR(300) NULL,
    `dateEnvoi` DATE NULL,
    `nameSender` VARCHAR(100) NULL,
    `nameReciever` VARCHAR(100) NULL,

    PRIMARY KEY (`idMessage`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `produit` (
    `idProduit` INTEGER NOT NULL AUTO_INCREMENT,
    `typeProduit` VARCHAR(100) NULL,
    `disponibilite` INTEGER NULL,
    `tarifLocation` DOUBLE NULL,
    `idDisponible` BOOLEAN NULL,
    `idMagasin` INTEGER NULL,

    INDEX `produit_magasin_FK`(`idMagasin`),
    PRIMARY KEY (`idProduit`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `spotsdesurf` (
    `idSpot` INTEGER NOT NULL AUTO_INCREMENT,
    `nomSpot` VARCHAR(100) NOT NULL,
    `localisation` VARCHAR(100) NULL,
    `description` VARCHAR(100) NULL,
    `niveauDifficulte` VARCHAR(100) NULL,
    `rating` INTEGER NULL,

    UNIQUE INDEX `spotsdesurf_unique`(`nomSpot`),
    PRIMARY KEY (`idSpot`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `utilisateur` ADD CONSTRAINT `utilisateur_abonnementpremium_FK` FOREIGN KEY (`idAbonnement`) REFERENCES `abonnementpremium`(`idAbonnement`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `commande` ADD CONSTRAINT `commande_utilisateur_FK` FOREIGN KEY (`idUtilisateur`) REFERENCES `utilisateur`(`idUtilisateur`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `commentaire` ADD CONSTRAINT `commentaire_evenement_FK` FOREIGN KEY (`idEvent`) REFERENCES `evenement`(`idEvent`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `commentaire` ADD CONSTRAINT `commentaire_utilisateur_FK` FOREIGN KEY (`idUtilisateur`) REFERENCES `utilisateur`(`idUtilisateur`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `evenement` ADD CONSTRAINT `evenement_spotsdesurf_FK` FOREIGN KEY (`idSpot`) REFERENCES `spotsdesurf`(`idSpot`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `evenement` ADD CONSTRAINT `evenement_utilisateur_FK` FOREIGN KEY (`idUtilisateur`) REFERENCES `utilisateur`(`idUtilisateur`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `facture` ADD CONSTRAINT `facture_utilisateur_FK` FOREIGN KEY (`idUtilisateur`) REFERENCES `utilisateur`(`idUtilisateur`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `location` ADD CONSTRAINT `location_produit_FK` FOREIGN KEY (`idProduit`) REFERENCES `produit`(`idProduit`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `location` ADD CONSTRAINT `location_utilisateur_FK` FOREIGN KEY (`idUtilisateur`) REFERENCES `utilisateur`(`idUtilisateur`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `produit` ADD CONSTRAINT `produit_magasin_FK` FOREIGN KEY (`idMagasin`) REFERENCES `magasin`(`idMagasin`) ON DELETE CASCADE ON UPDATE CASCADE;
