"use strict";
const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const cors = require('cors');

const index = require('./server/routes/index');
const chat = require('./server/routes/chat');

require('dotenv').config({
    path: path.join(__dirname, '../.env')
});


var app = express();

app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'jade');
app.set('env', process.env.NODE_ENV || 'development');


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, './client/build')));

app.use('/api', index);
app.use('/api/chat', chat);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;