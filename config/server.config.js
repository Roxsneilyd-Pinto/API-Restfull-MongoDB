const express = require('express');
const app = express()
const helmet = require('helmet');

app.use(helmet())
app.use(express.urlencoded({extended: true }))
app.use(express.json())

module.exports = app;

