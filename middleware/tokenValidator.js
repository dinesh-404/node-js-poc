const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken")

const validateToken= asyncHandler(async(req,res,next) => {
    let token;
    let authHeader = req.headers.Authorization || req.headers.authorization
    if(authHeader && authHeader.startsWith("Bearer")){
        token = authHeader.split(" ")[1]
        await jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,decoded)=>{
            if(err){
                console.log(err)
                res.status(401)
                throw new Error("Unauthorized user")
            }
            req.user = decoded.user
            next();
        })
    }else{
        res.status(401)
        throw new Error("No Authentication header found")
    }
})

module.exports=validateToken;