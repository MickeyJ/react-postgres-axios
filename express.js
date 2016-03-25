var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var home = require('./routes/home');
var dbRouter = require('./routes/dbRouter');
var app = express();

app.use(logger('dev'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'/public')));
app.use('/', home);
app.use('/api/v1', dbRouter);

app.use((err, req, res, next) =>{
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;