const bodyParser = require('body-parser');
const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');


/**
 * Instantiate Express Application
 * below are settings of app.
 */
const app = express();

/**
 * App View Settings
 */
app.set('views', './views');
app.set('view engine', 'pug');

/**
 * Serve static files. In production, replace this with nginx serving.
 */
app.use(express.static(path.join(__dirname, 'public')));

/**
 * Parse http post body, cookie
 */
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.get('/', (req, res, next) => {
  res.render('pages/index.pug');
});

/**
 * Start server
 */
app.listen(3000, () => {
  console.info('Server start listening on 3000');
});