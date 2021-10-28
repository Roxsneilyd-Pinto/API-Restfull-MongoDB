const express = require('express')
const app = express()
const usersEndPoints = require('../components/users/routes')
const GLOBAL_PATH = '/api/v1'

app.use(GLOBAL_PATH, usersEndPoints)

module.exports = app

