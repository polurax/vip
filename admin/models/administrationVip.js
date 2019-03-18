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
