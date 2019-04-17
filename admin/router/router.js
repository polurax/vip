let HomeController = require('./../controllers/HomeController');
let VipController = require('./../controllers/VipController');
let AdminController = require('./../controllers/AdminController');
let PhotoController = require('./../controllers/PhotoController');


// Routes
module.exports = function(app){

// Main Routes
    app.all('/admin', AdminController.Index);
    app.all('/ajoutphoto', PhotoController.AjoutPhoto);
    app.all('/ajoutphoto/upload', PhotoController.UploadPhoto);
    app.all('/supprrimerphoto', PhotoController.SupprrimerPhoto);


// tout le reste
    app.get('*', HomeController.Index);
    app.post('*', HomeController.Index);

};
