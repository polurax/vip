let async = require("async");
// ////////////////////// L I S T E R     A L B U M S

module.exports.Index = function(request, response){
   response.title = 'Album des stars';
   async.parallel([
   ],
    function(err,result){
       if (err) {
           console.log(err);
           return;
       }

      response.render('admin', response);
    }
  );
};
