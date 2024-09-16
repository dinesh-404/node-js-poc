const mongoose = require("mongoose");

const connectDb = async()=>{
    try {
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("connected ",connect.connection.host,connect.connection.db.databaseName)
    } catch (error) {

        console.log(error)
    }
}

module.exports=connectDb;