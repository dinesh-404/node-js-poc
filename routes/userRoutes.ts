import { Router } from "express";

const express = require("express");
const { createUser, loginUser, currentUser } = require("../controller/userController");
const validateToken = require("../middleware/tokenValidator");

export const userRouter = express.Router();


userRouter.post("/register", createUser)

userRouter.post("/login", loginUser)

userRouter.post("/current", currentUser)
