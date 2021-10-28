//const {v1: uuidv1} = require('uuid');
const app = require('./config/server.config')
const port = 3001
const PATH = '/'

app.listen(port,() => {
    console.log('SERVER ON')
})
