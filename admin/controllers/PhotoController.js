let async = require("async");
let model = require("../models/photo.js");
let    formidable      = require('formidable');
let form = new formidable.IncomingForm();
form.encoding = 'utf-8';
form.uploadDir = "./public/images/vip";
form.keepExtensions = true;
let LocalStorage = require('node-localstorage').LocalStorage;
let localStorage = new LocalStorage('./scratch');

// ////////////////////// L I S T E R     A L B U M S

module.exports.AjoutPhoto = function(request, response){
  if(localStorage.getItem("log") === "false"){
    console.log(localStorage.getItem("log"));
    response.render('home', response);
  }
  async.parallel([
    function(callback){
      model.vip(function(err, result){callback(null,result)});
    },
  ],
  function(err,result){
    if (err) {
      console.log(err);
      return;
    }
    response.vip = result[0];
    response.render('ajoutphoto', response);
  });
};

module.exports.UploadPhoto = function(request, response){
  if(localStorage.getItem("log") === "false"){
    console.log(localStorage.getItem("log"));
    response.render('home', response);
  }
  let name;
  form.parse(request, function(err, fields, files) {
    name=(files.photo.path).split("\\");
    name=name[name.length-1];
    let infos=new Array(fields.vip,fields.titre,fields.commentaire,name);
    model.ajoutphoto(infos, function(err){
      if (err) {
        console.log(err);
        return;
      }
      response.render('upload');
    });
  });
};

module.exports.SupprrimerPhoto = function(request, response){
  if(localStorage.getItem("log") === "false"){
    console.log(localStorage.getItem("log"));
    response.render('home', response);
  }
  /*response.title = 'Ajout photo';
  async.parallel([
    function(callback){
    model.log(function(err, result){callback(null,result)});
  },
],
function(err,result){
  if (err) {
    console.log(err);
    return;
  }
  response.render('ajoutphoto', response);

});*/
};
