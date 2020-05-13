#------------------------------------------------------------
#        Script MySQL.
#------------------------------------------------------------


#------------------------------------------------------------
# Table: entreprises
#------------------------------------------------------------

CREATE TABLE entreprises(
        idEntreprises      Int NOT NULL ,
        Nom                Varchar (45) ,
        Adresse            Varchar (45) ,
        tel                Int ,
        mail               Varchar (45) ,
        nom_projet         Varchar (45) ,
        description_projet Text ,
        Pseudo             Varchar (15) ,
        mot_de_passe       Varchar (8)
	,CONSTRAINT entreprises_PK PRIMARY KEY (idEntreprises)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: jury
#------------------------------------------------------------

CREATE TABLE jury(
        idJury  Int NOT NULL ,
        nom     Varchar (45) ,
        prenom  Varchar (45) ,
        qualite Varchar (45) ,
        photo   Varchar (45) ,
        bio     Varchar (45) ,
        mail    Varchar (45) ,
        tel     Int ,
        adresse Varchar (45) ,
        pseudo  Varchar (45) ,
        MDP     Varchar (8)
	,CONSTRAINT jury_PK PRIMARY KEY (idJury)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: realisateur
#------------------------------------------------------------

CREATE TABLE realisateur(
        idRealisateur Int NOT NULL ,
        Nom           Varchar (45) ,
        prenom        Varchar (45) ,
        adresse       Varchar (45) ,
        tel           Int ,
        mail          Varchar (45) ,
        bio           Text ,
        CV            Text ,
        portfolio     Varchar (45) ,
        idEntreprises Int
	,CONSTRAINT realisateur_PK PRIMARY KEY (idRealisateur)

	,CONSTRAINT realisateur_entreprises_FK FOREIGN KEY (idEntreprises) REFERENCES entreprises(idEntreprises)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: produit_fini
#------------------------------------------------------------

CREATE TABLE produit_fini(
        idProduit_fini Int NOT NULL ,
        nom            Varchar (45) ,
        duree          Varchar (45) ,
        format         Varchar (45) ,
        date_depot     Varchar (45) ,
        idRealisateur  Int NOT NULL ,
        idEntreprises  Int NOT NULL
	,CONSTRAINT produit_fini_PK PRIMARY KEY (idProduit_fini)

	,CONSTRAINT produit_fini_realisateur_FK FOREIGN KEY (idRealisateur) REFERENCES realisateur(idRealisateur)
	,CONSTRAINT produit_fini_entreprises0_FK FOREIGN KEY (idEntreprises) REFERENCES entreprises(idEntreprises)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: ressources
#------------------------------------------------------------

CREATE TABLE ressources(
        idressources  Int NOT NULL ,
        intitule      Varchar (45) ,
        type          Varchar (45) ,
        lien          Varchar (45) ,
        date_depot    Datetime ,
        description   Text ,
        idRealisateur Int NOT NULL ,
        idEntreprises Int NOT NULL
	,CONSTRAINT ressources_PK PRIMARY KEY (idressources)

	,CONSTRAINT ressources_realisateur_FK FOREIGN KEY (idRealisateur) REFERENCES realisateur(idRealisateur)
	,CONSTRAINT ressources_entreprises0_FK FOREIGN KEY (idEntreprises) REFERENCES entreprises(idEntreprises)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: Vote
#------------------------------------------------------------

CREATE TABLE Vote(
        idProduit_fini Int NOT NULL ,
        idJury         Int NOT NULL
	,CONSTRAINT Vote_PK PRIMARY KEY (idProduit_fini,idJury)

	,CONSTRAINT Vote_produit_fini_FK FOREIGN KEY (idProduit_fini) REFERENCES produit_fini(idProduit_fini)
	,CONSTRAINT Vote_jury0_FK FOREIGN KEY (idJury) REFERENCES jury(idJury)
)ENGINE=InnoDB;

