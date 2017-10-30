module.exports = (sequelize, DataTypes) =>
  // define new User model, aka table
  sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING
  })
