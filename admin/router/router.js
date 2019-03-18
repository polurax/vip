let HomeController = require('./../controllers/HomeController');
let AdministrationVipController = require('./../controllers/AdministrationVipController');
let AdminController = require('./../controllers/AdminController');
let PhotoController = require('./../controllers/PhotoController');


// Routes
module.exports = function(app){

// Main Routes
    app.all('/admin', AdminController.Index);
    app.all('/ajoutphoto', PhotoController.AjoutPhoto);
    app.all('/supprrimerphoto', PhotoController.SupprrimerPhoto);



    app.all('/AdministrationVip',AdministrationVipController.Index);
    app.all('/AjouterVip',AdministrationVipController.AjouterVip);
    app.all('/ModifierVip',AdministrationVipController.ModifierVip);
    app.all('/SupprimerVip',AdministrationVipController.SupprimerVip);


// tout le reste
    app.get('*', HomeController.Index);
    app.post('*', HomeController.Index);

};
