const jwt = require('jsonwebtoken');
const User=require("../models/user")
const bcrypt = require("bcrypt")

const secrete_key= process.env.SECRETE_KEY_TOKEN

const login=async (req,res)=>{
    const  { email, password }=req.body;
    console.log(req.body)
   try{
    const user=await User.findOne({"email":email.trim()}).exec()
    if(!user){
        return res.status(401).send({ message: 'Authentication failed' })
    }

    const passwordMatch=await bcrypt.compare(password,user.password)
    if(!passwordMatch){
        return res.status(401).send({ message: 'Authentication failed' })

    }
    // var token = jwt.sign({ exp: Math.floor(Date.now() / 1000) + (60 * 60), user: user }, secrete_key);
    // const token = jwt.sign({ userId: user,
    //                             }, secrete_key, { expiresIn: '1h' })
    // const token = jwt.sign({ userID:  user["_id"]}, secrete_key, { expiresIn: '1h' });
    const token=jwt.sign({ email: user.email, _id: user._id}, 'RESTFULAPIs')

    res.status(200).json({user,token});



   }
   catch(error){
    res.status(500).send({error})

   }
}
module.exports={
    login
}