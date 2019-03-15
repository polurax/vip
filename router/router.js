let HomeController = require('./../controllers/HomeController');
let VipController = require('./../controllers/VipController');
let AlbumController = require('./../controllers/AlbumController');
let TestController = require('./../controllers/TestController');
let ArticleController = require('./../controllers/ArticleController');


// Routes
module.exports = function(app){

  // tests à supprimer
    app.get('/test', TestController.Test);

// Main Routes
    app.get('/', HomeController.Index);
    app.get('/accueil', HomeController.Index);

// VIP
    app.get('/repertoire', VipController.Repertoire);
    app.get('/repertoire/:lettre', VipController.RepertoireLettre);
    app.get('/repertoire/fiche/:chiffre', VipController.FicheVip);

 // albums
   app.get('/album', AlbumController.ListerAlbum);
   app.get('/album/:chiffre', AlbumController.ListerAlbumVip);

// articles
   app.get('/articles', ArticleController.ArticleVide);
   app.get('/articles/:chiffre', ArticleController.Article);

// tout le reste
    app.get('*', HomeController.NotFound);
    app.post('*', HomeController.NotFound);

};
