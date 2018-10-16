const express = require('express');
const config = require('./configs/keys');
const path = require('path') //available
const session = require('express-session');
const bodyParser = require('body-parser');

// Express setup
const app = express();

// Server setup
app.listen(config.port, config.host, 
    () => console.log("Server is running on port", config.port));
// Session setup
app.set('trust proxy', 1);
app.use(session({
    secret: 'mysecretcode',
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 120000 }
}));

// Body parser setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Public setup
app.use(express.static(path.join(__dirname, 'public'))); //absolute path 

// Router setup
const routes = require(path.join(__dirname, 'routers'));
const router = express.Router();
app.use('/', router);
routes(router);

// EJS setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Connect MongoDB
require('./configs/database');


