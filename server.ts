import { connectDb } from "./config/dbconnection";
import { userRouter } from "./routes/userRoutes";

export {};

const express = require("express");
const errorHandler = require("./middleware/errorHandler");

const validateToken = require("./middleware/tokenValidator");
const dotenv = require("dotenv").config();
const app = express();

const port = 8080;
connectDb()
app.use(express.json());
// app.use("/api/v1", require("./routes/contactRoutes"))
app.use("/api/v1/user", userRouter)
app.use(errorHandler)


app.listen(port,()=>{
    console.log("app running on port : ",port);
});