const express = require('express');

const htmlRouter = require('./html');
const apiRouter = require('./api');

const app = express();

app.use('/api', apiRouter);
app.use('/', htmlRouter);

module.exports = app;
