const jwt = require('jsonwebtoken');
const secrete_key= process.env.SECRETE_KEY_TOKEN


const middleware={
    verifyToken:async (req,res,next)=>{
        const token = req.headers.authorization
        
        
        if(token){
            const accessToken=token.split(' ')[1];
            jwt.verify(accessToken, 'RESTFULAPIs',(error,user)=>{
                    if(error){
                        res.status(403).json({"message":"Token is invalid:"+error})
                    }
                    
                    
                    req.user=user
                    next();
    
            })
        }
        else{
            res.status(401).json({"message":"You're not authenticated"})
        }
    },
    verifyTokenAdmin:async (req,res,next)=>{
        middleware.verifyToken(req,res,()=>{
            if (req.user.admin==true){
                next()
            }
            else{
                res.status(403).json({"message":"you're not authorization"})
            }

        })

        

    }
    

}
module.exports=middleware