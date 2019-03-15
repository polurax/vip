
let model = require("../models/articles.js");
let async = require("async");

let fonctions = require("../functionsNode");

// ///////////////////////// R E P E R T O I R E    D E S     S T A R S

    module.exports.Article = function(request, response){
       let chiffre=request.params.chiffre;
       response.title = 'Articles';
       async.parallel([
         function(callback){
           model.listeVipArticle(function(err, result){callback(null,result)});
         },
         function(callback){
           model.articleVip(chiffre,function(err, result){callback(null,result)});
         },
       ],
        function(err,result){
           if (err) {
               console.log(err);
               return;
           }

           response.vip = result[0];
           response.article = result[1];
           response.selection=1;

           //console.log(result[14][0]);

          response.render('articles', response);
        }
      );
    };


    module.exports.ArticleVide = function(request, response){
       response.title = 'Articles';
       async.parallel([
         function(callback){
           model.listeVipArticle(function(err, result){callback(null,result)});
         },
         function(callback){
           model.articleRecent(function(err, result){callback(null,result)});
         },
       ],
        function(err,result){
           if (err) {
               console.log(err);
               return;
           }
           console.log("2");
           response.vip = result[0];
           response.article = result[1];
           response.nonselection=1;
           //console.log(result[14][0]);
           response.render('articles', response);
        }
      );
    };
