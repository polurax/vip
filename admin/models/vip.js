let db = require('../configDb');

module.exports.lettreNomVip = function(callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT DISTINCT SUBSTRING(VIP_NOM,1,1) AS lettre FROM vip ORDER BY lettre ;";
              // console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

module.exports.vipParLettre = function(lettre,callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT v.VIP_NUMERO, VIP_NOM, VIP_PRENOM, PHOTO_ADRESSE FROM vip v INNER JOIN photo p ON v.VIP_NUMERO=p.VIP_NUMERO WHERE PHOTO_NUMERO=1 AND SUBSTRING(VIP_NOM,1,1)='"+lettre+"' ORDER BY VIP_NOM ;";
              // console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

module.exports.vipInfo = function(chiffre,callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT v.VIP_NUMERO, VIP_NOM, VIP_PRENOM, PHOTO_ADRESSE, NATIONALITE_NOM, VIP_SEXE, VIP_NAISSANCE, VIP_TEXTE FROM vip v INNER JOIN photo p ON v.VIP_NUMERO=p.VIP_NUMERO INNER JOIN nationalite n ON n.NATIONALITE_NUMERO=v.NATIONALITE_NUMERO WHERE PHOTO_NUMERO=1 AND v.VIP_NUMERO="+chiffre+" ;";
              // console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

module.exports.photo = function(chiffre,callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT PHOTO_ADRESSE, PHOTO_COMMENTAIRE FROM photo WHERE VIP_NUMERO="+chiffre+" AND PHOTO_NUMERO<>1 ORDER BY PHOTO_NUMERO ;";
              // console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

module.exports.nbPhoto = function(chiffre,callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT count(*) AS count FROM photo WHERE VIP_NUMERO="+chiffre+" AND PHOTO_NUMERO<>1 ;";
               //console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

module.exports.chanteur = function(chiffre,callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT CHANTEUR_SPECIALITE FROM chanteur WHERE VIP_NUMERO="+chiffre+" ;";
              // console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

module.exports.chanteurAlbum = function(chiffre,callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT ALBUM_TITRE, ALBUM_DATE, MAISONDISQUE_NOM FROM composer co INNER JOIN album a ON co.ALBUM_NUMERO=a.ALBUM_NUMERO INNER JOIN maisondisque m ON m.MAISONDISQUE_NUMERO=a.MAISONDISQUE_NUMERO WHERE co.VIP_NUMERO="+chiffre+" ORDER BY ALBUM_DATE;";
              // console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

module.exports.acteur = function(chiffre,callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT ACTEUR_DATEDEBUT FROM acteur WHERE VIP_NUMERO="+chiffre+" ;";
              // console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

module.exports.acteurFilm = function(chiffre,callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT ROLE_NOM, FILM_TITRE, FILM_DATEREALISATION, VIP_NOM, VIP_PRENOM, f.VIP_NUMERO, SUBSTRING(VIP_TEXTE,1,150) AS VIP_TEXTE, PHOTO_ADRESSE FROM joue j INNER JOIN film f ON f.FILM_NUMERO=j.FILM_NUMERO LEFT OUTER JOIN vip v ON v.VIP_NUMERO=f.VIP_NUMERO LEFT OUTER JOIN photo p ON p.VIP_NUMERO=f.VIP_NUMERO WHERE (PHOTO_NUMERO=1 OR PHOTO_NUMERO IS NULL) AND j.VIP_NUMERO="+chiffre+" ;";
              // console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

module.exports.realisateurFilm = function(chiffre,callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT FILM_TITRE, FILM_DATEREALISATION FROM film WHERE VIP_NUMERO="+chiffre+" ;";
              // console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

module.exports.mariage = function(chiffre,callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT VIP_PRENOM, VIP_NOM, v.VIP_NUMERO, DATE_EVENEMENT, MARIAGE_LIEU, MARIAGE_FIN, MARIAGE_MOTIFFIN, SUBSTRING(VIP_TEXTE,1,150) AS VIP_TEXTE, PHOTO_ADRESSE FROM mariage m INNER JOIN vip v ON v.VIP_NUMERO=m.VIP_VIP_NUMERO INNER JOIN PHOTO p ON p.VIP_NUMERO=v.VIP_NUMERO WHERE p.PHOTO_NUMERO=1 AND m.VIP_NUMERO="+chiffre+" UNION SELECT VIP_PRENOM, VIP_NOM, v.VIP_NUMERO, DATE_EVENEMENT, MARIAGE_LIEU, MARIAGE_FIN, MARIAGE_MOTIFFIN, SUBSTRING(VIP_TEXTE,1,150) AS VIP_TEXTE, PHOTO_ADRESSE FROM mariage m INNER JOIN vip v ON v.VIP_NUMERO=m.VIP_VIP_NUMERO INNER JOIN PHOTO p ON p.VIP_NUMERO=v.VIP_NUMERO WHERE p.PHOTO_NUMERO=1 AND m.VIP_NUMERO="+chiffre+" ;";
               //console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

module.exports.liaison = function(chiffre,callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT VIP_PRENOM, VIP_NOM, v.VIP_NUMERO, DATE_EVENEMENT, LIAISON_MOTIFFIN, SUBSTRING(VIP_TEXTE,1,150) AS VIP_TEXTE, PHOTO_ADRESSE FROM liaison m INNER JOIN vip v ON v.VIP_NUMERO=m.VIP_VIP_NUMERO INNER JOIN PHOTO p ON p.VIP_NUMERO=v.VIP_NUMERO WHERE p.PHOTO_NUMERO=1 AND m.VIP_NUMERO="+chiffre+" UNION SELECT VIP_PRENOM, VIP_NOM, v.VIP_NUMERO, DATE_EVENEMENT, LIAISON_MOTIFFIN, SUBSTRING(VIP_TEXTE,1,150) AS VIP_TEXTE, PHOTO_ADRESSE FROM liaison m INNER JOIN vip v ON v.VIP_NUMERO=m.VIP_VIP_NUMERO INNER JOIN PHOTO p ON p.VIP_NUMERO=v.VIP_NUMERO WHERE p.PHOTO_NUMERO=1 AND m.VIP_NUMERO="+chiffre+" ;";
              // console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

module.exports.mannequin = function(chiffre,callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT MANNEQUIN_TAILLE FROM mannequin WHERE VIP_NUMERO="+chiffre+" ;";
              // console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

module.exports.mannequinAgence = function(chiffre,callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT AGENCE_NOM FROM apouragence ap INNER JOIN agence a ON ap.AGENCE_NUMERO=a.AGENCE_NUMERO WHERE ap.VIP_NUMERO="+chiffre+" ;";
              // console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

module.exports.mannequinDefile = function(chiffre,callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT DEFILE_LIEU, DEFILE_DATE, VIP_NOM, VIP_PRENOM, v.VIP_NUMERO, SUBSTRING(VIP_TEXTE,1,150) AS VIP_TEXTE, PHOTO_ADRESSE FROM defiledans dd INNER JOIN defile d ON dd.DEFILE_NUMERO=d.DEFILE_NUMERO INNER JOIN vip v ON d.VIP_NUMERO=v.VIP_NUMERO INNER JOIN photo p ON p.VIP_NUMERO=v.VIP_NUMERO WHERE PHOTO_NUMERO=1 AND dd.VIP_NUMERO="+chiffre+" ORDER BY DEFILE_DATE;";
              // console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

module.exports.couturierDefile = function(chiffre,callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT DEFILE_LIEU, DEFILE_DATE FROM defile WHERE VIP_NUMERO="+chiffre+" ORDER BY DEFILE_DATE;";
              // console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};
