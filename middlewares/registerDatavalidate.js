exports.registerDatavalidate = (req,res,next) => {
    const{name,email,password} =req.body;

    if(req.body && name &&email &&password){
        next()
    }else{
        res.status(401).send({
            msg:"all input failed are required"
        })
    }
}