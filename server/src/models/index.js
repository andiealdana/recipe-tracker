// used for connecting to database
// which is going to load in configurations defined in our config file

// load and cache modules
const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const config = require('../config/config')
const db = {}

// values to pass from config file to Sequelize constructor
const sequelize = new Sequelize(
  config.db.database,
  config.db.usename,
  config.db.password,
  config.db.options
)

// makes it easy to add models down the road without having to 
// require('') each new one, read it in, import it, and sequelize 
fs
  // read through current directory and get array of current files (representing models)
  .readdirSync(__dirname)
  // filter out index.js file (not a model)
  .filter((file) =>
    (file !== 'index.js')
  )
  // create model for each file 
  .forEach(file => {
    const model = sequelize.import(path.join(__dirname, file))
    db[model.name] = model
  })

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
