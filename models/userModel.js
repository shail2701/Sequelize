const { Sequelize, DataTypes, Model } = require("sequelize");
const { sequelize } = require('../dbConnect');

const User = sequelize.define("user", {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
  
  fullName: {
    type: DataTypes.STRING,
  },
  
  age: {
    type: DataTypes.INTEGER,
  },
  
  employed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

User.sync().then(() => {
    console.log("User Model synced");
});

module.exports = User;
