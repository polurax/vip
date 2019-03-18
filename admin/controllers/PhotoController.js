let async = require("async");
let model = require("../models/photo.js");
// ////////////////////// L I S T E R     A L B U M S

module.exports.Photo = function(request, response){
   response.title = 'Ajout photo';
   async.parallel([
     /*function(callback){
       model.log(function(err, result){callback(null,result)});
     },*/
   ],
    function(err,result){
       if (err) {
           console.log(err);
           return;
       }
       response.render('photo', response);
      /*response.liste = result[0];
      let logOk=false;
      result[0].forEach(function functionName(element) {
        if(login==element.LOGIN && pass==element.PASSWD){
          logOk=true;
        }
      });
      if(logOk){
        response.render('admin', response);
      }else{
        response.render('home', response);
      }
*/
    }
  );
};
