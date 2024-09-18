const {sequelize} = require("../config/dbconnection");
const { DataTypes } = require("sequelize");

export const userSchema = sequelize.define("user", {
    username: {
     type: DataTypes.STRING,
     allowNull: false
   },
   password: {
     type: DataTypes.STRING,
     allowNull: false
   },
   email: {
     type: DataTypes.STRING,
     allowNull: false
   }
});