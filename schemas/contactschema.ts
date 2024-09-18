const { sequelize } = require("../config/dbconnection");
const { DataTypes } = require("sequelize");

export const contactSchema = sequelize.define('contact',{
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    mobile: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    }
});