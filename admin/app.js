let    express         = require('express');
let    session         = require('express-session');
let    cookieParser    = require('cookie-parser');
let    bodyParser      = require('body-parser'); //pour récupérer les résultats des post
let    http            = require('http');
let    path            = require('path');
let    Cryptr          = require('cryptr');

let    util            = require('util');


    let LocalStorage = require('node-localstorage').LocalStorage;
    let localStorage = new LocalStorage('./scratch');
    localStorage.setItem("log", false);


    let cryptr = new Cryptr('MaSuperCléDeChiffrementDeouF');

let app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.set('port', 6801);
app.set('views', path.join(__dirname, 'views'));

// routes static, le routeur n'y aura pas accès
app.use(express.static(path.join(__dirname, '/public')));

app.use(cookieParser());

app.use(session({
    secret: 'nC0@#1pM/-0qA1+é',
    name: 'VipNode',
    resave: true,
    saveUninitialized: true
}));

/* ces lignes permettent d'utiliser directement les variables de session dans handlebars
 UTILISATION : {{session.MaVariable}}  */
app.use(function(request, response, next){
    response.locals.session = request.session;
    next();
});

let exphbs = require('express-handlebars');
app.set('view engine', 'handlebars'); //nom de l'extension des fichiers
let handlebars  = require('./helpers/handlebars.js')(exphbs); //emplacement des helpers
// helpers : extensions d'handlebars

app.engine('handlebars', handlebars.engine);


// chargement du routeur
require('./router/router')(app);


http.createServer(app).listen(app.get('port'), function(){
    console.log('Serveur Node.js en attente sur le port ' + app.get('port'));
});
