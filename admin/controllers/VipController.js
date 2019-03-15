
let model = require("../models/vip.js");
let async = require("async");

let fonctions = require("../functionsNode");

// ///////////////////////// R E P E R T O I R E    D E S     S T A R S

module.exports.Repertoire = function(request, response){
   response.title = 'Répertoire des stars';
   model.lettreNomVip(function(err, result){  // appel le module test qui exécute la requete SQL
       if (err) {
           console.log(err);
           return;
       }
      response.lettreNomVip = result;

      response.render('repertoireVips', response); // appel la vue Handlebars qui va afficher le résultat
  } );

  } ;

  module.exports.RepertoireLettre = function(request, response){
     let lettre=request.params.lettre;
     response.title = 'Stars en '+lettre;
     async.parallel([
       function(callback){
         model.lettreNomVip(function(err, result){callback(null,result)});
       },
       function(callback){
         model.vipParLettre(lettre,function(err, result){callback(null,result)});
       },
     ],
      function(err,result){
         if (err) {
             console.log(err);
             return;
         }
      response.lettreNomVip = result[0];
      response.vip = result[1];

        response.render('listeVip', response); // appel la vue Handlebars qui va afficher le résultat
    } );
    } ;

    module.exports.FicheVip = function(request, response){
       let chiffre=request.params.chiffre;
       response.title = 'Fiche de star';
       async.parallel([
         function(callback){
           model.vipInfo(chiffre,function(err, result){callback(null,result)});
         },
         function(callback){
           model.photo(chiffre,function(err, result){callback(null,result)});
         },
         function(callback){
           model.mariage(chiffre,function(err, result){callback(null,result)});
         },
         function(callback){
           model.liaison(chiffre,function(err, result){callback(null,result)});
         },
         function(callback){
           model.mannequin(chiffre,function(err, result){callback(null,result)});
         },
         function(callback){
           model.mannequinAgence(chiffre,function(err, result){callback(null,result)});
         },
         function(callback){
           model.mannequinDefile(chiffre,function(err, result){callback(null,result)});
         },
         function(callback){
           model.chanteur(chiffre,function(err, result){callback(null,result)});
         },
         function(callback){
           model.chanteurAlbum(chiffre,function(err, result){callback(null,result)});
         },
         function(callback){
           model.acteur(chiffre,function(err, result){callback(null,result)});
         },
         function(callback){
           model.acteurFilm(chiffre,function(err, result){callback(null,result)});
         },
         function(callback){
           model.realisateurFilm(chiffre,function(err, result){callback(null,result)});
         },
         function(callback){
           model.couturierDefile(chiffre,function(err, result){callback(null,result)});
         },
         function(callback){
           model.lettreNomVip(function(err, result){callback(null,result)});
         },
         function(callback){
           model.nbPhoto(chiffre,function(err, result){callback(null,result)});
         },
       ],
        function(err,result){
           if (err) {
               console.log(err);
               return;
           }

           response.vip = result[0];
           response.photo = result[1];
           response.mariage = result[2];
           response.liaison = result[3];
           response.mannequin = result[4][0];
           response.mannequinAgence = result[5];
           response.mannequinDefile = result[6];
           response.chanteur = result[7][0];
           response.chanteurAlbum = result[8];
           response.acteur = result[9][0];
           response.acteurFilm = result[10];
           response.realisateurFilm = result[11];
           response.couturierDefile = result[12];
           response.lettreNomVip = result[13];
           response.nbPhoto = result[14][0].count;

           //console.log(result[14][0]);

          response.render('ficheVip', response);
        }
      );
    };
