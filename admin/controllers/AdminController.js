let async = require("async");
let model = require("../models/admin.js");
let Cryptr= require('cryptr');

let cryptr = new Cryptr('MaSuperCléDeChiffrementDeouF');
// ////////////////////// L I S T E R     A L B U M S

module.exports.Index = function(request, response){
   response.title = 'Admin';
   let login = request.body.log;
   let pass = request.body.pwd;
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
      response.liste = result[0];
      let logOk=false;
      result[0].forEach(function functionName(element) {
        if(login==element.LOGIN && pass==cryptr.decrypt(element.PASSWD)){
          logOk=true;
        }
      });
      if(logOk){
        response.render('admin', response);
      }else{
        response.render('home', response);
      }

    }
  );
};
