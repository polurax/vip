let db = require('../configDb');

module.exports.getNationalite = function(callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT * FROM nationalite;";
              // console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

module.exports.getDefiles = function(callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT * FROM defile;";
              // console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

module.exports.getFilm = function(callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT * FROM film;";
              // console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

module.exports.getAlbum = function(callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT * FROM album;";
              // console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};


module.exports.getMaisonDeDisque = function(callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT * FROM maisondisque;";
              // console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};


module.exports.getAgence = function(callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT * FROM agence;";
              // console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};
