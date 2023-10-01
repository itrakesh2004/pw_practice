const {UserModel}=require("../model/user_model")

//register

exports.registerUser= async() => {
    const {name,email,password} =req.body;
    try{
        await UserModel.create({...req.body})
        res.status(200).send({
            msg:"user Registered Successfully"
        })
    }catch(error){
        res.status(501).send({
            msg:error.message
        })
    }
}

// login

exports.loginUser= async() => {
    const{email,password} =req.body;

    try{
        const userData = await UserModel.findOne({email});
        if(userData){
            if(userData.password == password){
                res.status(200).send({
                    msg:"user login succesfully"
                })
            }else{
                res.status(401).send({
                    msg:"you have enterd rong password"
                })
            }
        }else{
            res.status(404).send({
                msg:"no account find password"
            })
        }
    }catch(error){
        res.status(501).send({
            msg:error.message
        })
    }
}