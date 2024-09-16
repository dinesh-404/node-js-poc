import { Model } from "mongoose";
import { ModelDefined, ModelStatic, ModelType } from "sequelize";

const mongoose = require("mongoose")

const {sequelize} = require("../config/dbconnection");
const { DataTypes } = require("sequelize");

const userSchema = sequelize.define("user", {
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

export {userSchema}