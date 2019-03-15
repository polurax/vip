let db = require('../configDb');

module.exports.listeVipArticle = function(callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT DISTINCT v.VIP_NUMERO, VIP_NOM, VIP_PRENOM FROM vip v INNER JOIN apoursujet a ON v.VIP_NUMERO=a.VIP_NUMERO ORDER BY VIP_NOM ;";
              // console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

module.exports.articleVip = function(chiffre, callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT DISTINCT v.VIP_NUMERO, VIP_NOM, VIP_PRENOM, a.ARTICLE_NUMERO, ARTICLE_TITRE, ARTICLE_RESUME, ARTICLE_DATE_INSERT FROM vip v INNER JOIN apoursujet ap ON v.VIP_NUMERO=ap.VIP_NUMERO INNER JOIN article a ON a.ARTICLE_NUMERO=ap.ARTICLE_NUMERO WHERE v.VIP_NUMERO="+chiffre+" ORDER BY ARTICLE_DATE_INSERT DESC;";
               console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

module.exports.articleRecent = function(callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT DISTINCT v.VIP_NUMERO, VIP_NOM, VIP_PRENOM, a.ARTICLE_NUMERO, ARTICLE_TITRE, ARTICLE_RESUME, ARTICLE_DATE_INSERT FROM vip v INNER JOIN apoursujet ap ON v.VIP_NUMERO=ap.VIP_NUMERO INNER JOIN article a ON a.ARTICLE_NUMERO=ap.ARTICLE_NUMERO ORDER BY ARTICLE_DATE_INSERT DESC LIMIT 3;";
              //console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};
