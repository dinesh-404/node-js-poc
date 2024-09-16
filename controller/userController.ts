

const asyncHandler = require("express-async-handler");
const {userSchema} = require("../schemas/userSchema")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const createUser = asyncHandler(async (req,res)=>{
    const {username,email,password} = req.body;
    
    if(!username || !email || !password){
        res.status(400)
        throw new Error("All fields are required.");
    }
    const availableUser = await userSchema.findOne({where:{email:email}});
    if(availableUser){
        res.status(400)
        throw new Error("User already exists.");
    }
    const hashedPassword = await bcrypt.hash(password,10);
    const user = await userSchema.create({
        username,email,password:hashedPassword
    })
    res.status(201).json(user);
})

const loginUser = asyncHandler(async (req,res)=>{
    const {email,password}=req.body;
    console.log(email)
    const user = await userSchema.findOne({email}).lean();
    console.log(user)
    if(user && (await bcrypt.compare(password,user.password))){
        const token = await jwt.sign({
            user:{
                username:user.username,
                email:user.email,
                id:user.id
            }
        },process.env.ACCESS_TOKEN_SECRET,{expiresIn:"10m"})
        res.status(200).json({token})
    }else{
        res.status(401)
        throw new Error("Credentials are wrong !!")
    }
    
    
})

const currentUser = asyncHandler(async (req,res)=>{
    res.status(200).json({message:"Current user"});
})


export{createUser,currentUser,loginUser}