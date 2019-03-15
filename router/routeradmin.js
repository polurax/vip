let HomeController = require('./../controllers/HomeController');
module.exports = function(app){
    app.get('*', HomeController.NotFound);
    app.post('*', HomeController.NotFound);
};
