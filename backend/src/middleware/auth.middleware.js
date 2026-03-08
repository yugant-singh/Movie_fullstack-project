const jwt = require("jsonwebtoken")
const redis  = require("../config/cache")

async function authMiddleware(req, res, next) {
    try{
        const token  = req.cookies.token
        if(!token){
            return res.status(401).json({
                message:"Token Not Found "
            })
        }

        try{
            const decode = jwt.verify(token,process.env.JWT_SECRET)
            req.user = decode
            next()
        }
        catch(err){
            return res.status(401).json({message:"token invalid"})
        }
    }
    catch(err){

        return res.status(500).json({
            message:"server error",
                error:err.message
        })
    }
}

module.exports = authMiddleware
