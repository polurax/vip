let db = require('../configDb');
let model = require("../models/photo.js");

module.exports.vip = function(callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT VIP_NOM, VIP_PRENOM, VIP_NUMERO FROM vip ORDER BY VIP_NOM;";
              // console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

module.exports.nbPhoto = function(num,callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT count(*) as num FROM photo where VIP_NUMERO="+num;
              // console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

module.exports.ajoutphoto = function(infos, callback) {
  model.nbPhoto(infos[0],function(err, result){
    db.getConnection(function(err, connexion) {
      sql="INSERT INTO photo (PHOTO_NUMERO,VIP_NUMERO,PHOTO_SUJET,PHOTO_COMMENTAIRE,PHOTO_ADRESSE) VALUES ("+(result[0].num+1)+","+infos[0]+",'"+infos[1]+"','"+infos[2]+"','"+infos[3]+"');";
      connexion.query(sql, callback);
      connexion.release();
    });
  });
};
