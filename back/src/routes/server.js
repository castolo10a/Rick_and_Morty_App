const express = require('express');
const app = express();
const router = require('./index');
const morgan = require('morgan');

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());



app.use('/rickandmorty', router);


module.exports = app;