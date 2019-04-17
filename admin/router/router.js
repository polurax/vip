let HomeController = require('./../controllers/HomeController');
let AdministrationVipController = require('./../controllers/AdministrationVipController');
let AdminController = require('./../controllers/AdminController');
let PhotoController = require('./../controllers/PhotoController');


// Routes
module.exports = function(app){

// Main Routes
    app.all('/admin', AdminController.Index);
    app.all('/ajoutphoto', PhotoController.AjoutPhoto);
    app.all('/ajoutphoto/upload', PhotoController.UploadPhoto);
    app.all('/supprrimerphoto', PhotoController.SupprrimerPhoto);



    app.all('/administrationVip',AdministrationVipController.Index);
    app.all('/ajouterVip',AdministrationVipController.AjouterVip);
    app.all('/modifierVip',AdministrationVipController.ModifierVip);
    app.all('/supprimerVip',AdministrationVipController.SupprimerVip);


// tout le reste
    app.get('*', HomeController.Index);
    app.post('*', HomeController.Index);

};
