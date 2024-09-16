const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbconnection");
const validateToken = require("./middleware/tokenValidator");
const dotenv = require("dotenv").config();
const app = express();

const port = 8080;
connectDb()
app.use(express.json());
app.use("/api/v1",validateToken, require("./routes/contactRoutes"))
app.use("/api/v1/user", require("./routes/userRoutes"))
app.use(errorHandler)


app.listen(port,()=>{
    console.log("app running on port : ",port);
});