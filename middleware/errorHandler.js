const errorHandler = (err,req,res ,next)=>{    
    if(res.statusCode==200){
        res.status(500)
    }
    console.log(res.statusCode)
    res.json({messsage:err.message,trace:err.stack})
}

module.exports=errorHandler;