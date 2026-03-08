const userModel = require("../models/user.model")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const redis  = require("../config/cache")
/**
 * POST  /api/auth/register
 * @desc Register a new user
 * @access Public
 */
async function registerController(req, res) {
    try {
        const { name, email, password } = req.body
        if (!name || !email || !password) {
            return res.status(400).json({
                message: "all fields are required"
            })
        }
        const isUserExist = await userModel.findOne({ email })
        if (isUserExist) {
            return res.status(400).json({
                message: "user already exist"
            })
        }
        const hash = await bcrypt.hash(password, 10)
        const user = await userModel.create({
            name,
            email,
            password: hash
        })

        const token = jwt.sign({
            id: user._id,
            role: user.role
        },
            process.env.JWT_SECRET, { expiresIn: "1d" })

        res.cookie("token", token)

        res.status(201).json({
            message: "user registered successfully",
            user,
            token
        })

    }
    catch (err) {
        return res.status(500).json({
            message: "Server Error",
            error: err.message
        })
    }

}

/** * POST  /api/auth/login
 * @desc Login a user
 * @access Public
 */

async function loginController(req, res) {
    try {

        const { email, password } = req.body
        if (!email || !password) {
            return res.status(400).json({
                message: "all fields are required"
            })
        }
        const user = await userModel.findOne({ email }).select("+password")
        if (!user) {
            return res.status(400).json({
                message: "Invalid Credentials"
            })
        }

        const isPasswordValid = await bcrypt.compare(password, user.password)
        if (!isPasswordValid) {
            return res.status(400).json({
                message: "Invalid Credentials"
            })
        }
        const token = jwt.sign({
            id: user._id,
            role: user.role
        }, process.env.JWT_SECRET, { expiresIn: "1d" })
        res.cookie("token", token)
        user.password = undefined 
        res.status(200).json({
            message: "user logged in successfully",
            user,
            token
        })

    }
    catch (err) {
        return res.status(500).json({
            message: "Server Error",
            error: err.message
        })
    }
}

/**
 *  post /api/auth/logout
 * @desc Logout a user
 * @access Private
 **/ 
async function logutController(req,res){
    try{
        const token  = req.cookies.token
        if(!token){
            return res.status(400).json({
                message:"Token Not Found"
            })
        }
        res.clearCookie("token")
        await redis.set(token,Date.now().toString())
        return res.status(200).json({
            message:"user logged out successfully"
        })  

    }
    catch(err){

        return res.status(500).json({
            message:"server error",
            error:err.message
        })
    }
}

/**
 *  get /api/auth/me
 * @desc Get user details
 * @access Private
 **/ 
async function getUserController(req,res){
    try{
        const user = await userModel.findById(req.user.id)
        return res.status(200).json({
            message:"user fetched successfully",
            user
        })
    }
    catch(err){
        return res.status(500).json({
            message:"server error",
            error:err.message
        })
    }
}
module.exports = {
    registerController,
    loginController,
    logutController,
    getUserController
}