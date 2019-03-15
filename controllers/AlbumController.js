let model = require("../models/album.js");
let async = require("async");
// ////////////////////// L I S T E R     A L B U M S

module.exports.ListerAlbum = function(request, response){
   response.title = 'Album des stars';
   async.parallel([
     function(callback){
       model.listeVip(function(err, result){callback(null,result)});
     },
     /*function(callback){
       model.articleVip(chiffre,function(err, result){callback(null,result)});
     },*/
   ],
    function(err,result){
       if (err) {
           console.log(err);
           return;
       }

       response.liste = result[0];
       /*response.article = result[1];*/

       //console.log(result[14][0]);

      response.render('listerAlbum', response);
    }
  );
};

module.exports.ListerAlbumVip = function(request, response){
   response.title = 'Album des stars';
   let chiffre=request.params.chiffre;
   async.parallel([
     function(callback){
       model.listeVip(function(err, result){callback(null,result)});
     },
     function(callback){
       model.photoVip(chiffre,function(err, result){callback(null,result)});
     },
   ],
    function(err,result){
       if (err) {
           console.log(err);
           return;
       }

       response.liste = result[0];
       response.vip = result[1];

       //console.log(result[1]);

      response.render('listerAlbum', response);
    }
  );
};
