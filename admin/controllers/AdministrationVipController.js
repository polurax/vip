
let model = require("../models/administrationVip.js");
let async = require("async");
let fonctions = require("../functionsNode");
let LocalStorage = require('node-localstorage').LocalStorage;
let localStorage = new LocalStorage('./scratch');
// ///////////////////////// G E S T I O N     D E S    V I P S


module.exports.Index = function(request, response){
   response.title = 'Gestion des VIPs';

   if(localStorage.getItem("log") === "false"){
     console.log(localStorage.getItem("log"));
     response.render('home', response);
   }
   response.render('vipAdministration', response);
 };



 module.exports.AjouterVip = function(request, response){
   if(localStorage.getItem("log") === "false"){
     console.log(localStorage.getItem("log"));
     response.render('home', response);
   }
    response.title = 'Gestion des VIPs';

    async.parallel([
      function(callback){
        model.getNationalite(function(err, result){callback(null,result)});
      },
      function(callback){
        model.getDefiles(function(err, result){callback(null,result)});
      },
      function(callback){
        model.getFilm(function(err, result){callback(null,result)});
      },
      function(callback){
        model.getMaisonDeDisque(function(err, result){callback(null,result)});
      },
      function(callback){
        model.getAlbum(function(err, result){callback(null,result)});
      },
      function(callback){
        model.getAgence(function(err, result){callback(null,result)});
      },
    ],
     function(err,result){
        if (err) {
            console.log(err);
            return;
        }
     response.getNationalite = result[0];
     response.getDefiles = result[1];
     response.getFilm = result[2];
     response.getMaisonDeDisque = result[3];
     response.getAlbum = result[4];
     response.getAgence = result[5];

       response.render('AjouterVip', response); // appel la vue Handlebars qui va afficher le résultat
   } );

  };



module.exports.ModifierVip = function(request, response){
  if(localStorage.getItem("log") === "false"){
    console.log(localStorage.getItem("log"));
    response.render('home', response);
  }
   response.title = 'Gestion des VIPs';
   response.render('ModifierVip', response);
 };



module.exports.SupprimerVip = function(request, response){
  if(localStorage.getItem("log") === "false"){
    console.log(localStorage.getItem("log"));
    response.render('home', response);
  }
  response.title = 'Gestion des VIPs';
  response.render('SupprimerVip', response);
};
