module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'recipetracker',
    user: process.env.DB_USER || 'recipetracker',
    password: process.env.DB_PASS || 'recipetracker',
    options: {
      // what type of database we're connecting to
      dialect: process.env.DIALECT || 'sqlite',
      // location of database we want to connect to
      host: process.env.HOST || 'localhost',
      // where to store sqlite file
      storage: './recipetracker.sqlite'
    }
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}
