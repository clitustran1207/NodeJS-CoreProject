const express = require('express');
const config = require('./configs/keys');
const path = require('path') //available
const session = require('express-session');
//const bodyParser = require('body-parser');

// Express setup
const app = express();

// Server setup
app.listen(config.port, config.host, 
    () => console.log("Server is running on port", config.port));
// Session setup
app.set('trust proxy', 1);
app.use(session({
    secret: 'mysecretcode',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 30000 }
}));

// Public setup
app.use(express.static(path.join(__dirname, 'public'))); //absolute path 

// Router setup
app.use(require(path.join(__dirname, 'routers')));

// EJS setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



// Body Parser setup
