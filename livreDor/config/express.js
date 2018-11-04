let express = require('express');
let bodyParser = require('body-parser');
let app = express();
let session = require('express-session');
let routes = require('../routes');
// Template Engine

module.exports.init = () => {
    app.set('view engine', 'ejs');

    // Moddlewar
    app.use('/assets', express.static('public'));
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(session({
        secret: 'azazaz',
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false }
    }));
    // MiddleWare flash
    app.use(require('../middlewares/flash'));
    routes(app);
    return app;
}
// Routes
// other file

// app.get('/login', (request, response) => {
//     response.render('login/login');
// })

// app.get('/signin', (request, response) => {
//     response.render('login/signin');
// })
