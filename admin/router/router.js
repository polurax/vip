let HomeController = require('./../controllers/HomeController');
let VipController = require('./../controllers/VipController');
let AdminController = require('./../controllers/AdminController');


// Routes
module.exports = function(app){

// Main Routes
    app.get('/', HomeController.Index);
    app.get('/accueil', HomeController.Index);

    app.get('/admin', AdminController.Index);

// tout le reste
    app.get('*', HomeController.NotFound);
    app.post('*', HomeController.NotFound);

};
