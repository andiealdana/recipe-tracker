
console.log('hello')

// load and cache modules
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const {sequelize} = require('./models')
const config = require('./config/config')

// create express application
const app = express()

// mount http request logging standard Apache combined log output.
app.use(morgan('combined'))

// parse application/json
app.use(bodyParser.json())

// mount cors
app.use(cors())

// routing
require('./routes')(app)

// sync defined models to db, then listen on port (and log port #)
sequelize.sync()
  .then(() => {
    app.listen(config.port || 8081)
    console.log(`Server start on port ${config.port}`)
  })
