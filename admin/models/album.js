let db = require('../configDb');

module.exports.listeVip = function(callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT v.VIP_NUMERO, PHOTO_ADRESSE FROM photo p INNER JOIN vip v ON p.VIP_NUMERO=v.VIP_NUMERO WHERE PHOTO_NUMERO=1 ORDER BY VIP_NOM;";
              // console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};
module.exports.photoVip = function(chiffre, callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT VIP_PRENOM, VIP_NOM, v.VIP_NUMERO, PHOTO_ADRESSE, PHOTO_NUMERO, PHOTO_COMMENTAIRE FROM photo p INNER JOIN vip v ON v.VIP_NUMERO=p.VIP_NUMERO WHERE v.VIP_NUMERO="+chiffre+";";
              //console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};
