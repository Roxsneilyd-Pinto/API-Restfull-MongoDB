//const {v1: uuidv1} = require('uuid');
const app = require('./config/server.config')
const routes = require('./config/routes.config')
const port = 3001
const PATH = '/'

app.use(PATH, routes)

app.listen(port,() => {
    console.log('SERVER ON')
})
