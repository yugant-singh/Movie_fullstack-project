
const favourateModel = require("../models/favourates.model")


async function addFavourate(req, res) {
    try {
       const {movieId,title,poster} = req.body
        const userId = req.user.id

        const existingFavourate = await favourateModel.findOne({
            user: userId,
            movieId 
        })
        if (existingFavourate) {
            return res.status(400).json({
                message: "favourate already exists"
            })
        }
        const favourate  = await favourateModel.create({
           user: userId,
            movieId,
            title,
            poster
        })
        return res.status(200).json({
            message: "favourate added successfully",
            favourate
        })
        

    }
    catch (err) {
        return res.status(500).json({
            nessage: "server error",
            error: err.message
        })
    }
}
async function getFavourate(req,res){

try{
    const userId = req.user.id
    const favourate = await favourateModel.find({user:userId})
    .populate("user","name email")
   
     if (!favourate || favourate.length === 0) {
            return res.status(404).json({
                message: "favourate not found"
            })
        }
    
    return res.status(200).json({
        message:"favourate found successfully",
        favourate
    })
}
catch(err){
    return res.status(500).json({  
        nessage: "server error",
        error: err.message
    })
}
}

async function removeFavourate(req,res){
    try{
        const userId = req.user.id
        const {movieId} = req.params
        const favourate = await favourateModel.findOneAndDelete({
            user:userId,
            movieId
        })
            if (!favourate) {
            return res.status(404).json({
                message: "favourate not found"
            })
        }
        return res.status(200).json({
            message:"favourate removed successfully",
        })
    }
    catch(err){
        return res.status(500).json({  
            message: "server error",
            error: err.message
        })
    }
}

async function checkFavourate(req,res){
    try{
        const userId = req.user.id
        const {movieId} = req.params
        const favourate= await favourateModel.findOne({
            user:userId,
            movieId
        })
        return res.status(200).json({
            isfavourate:!!favourate
        })
    }
    catch(err){
        return res.status(500).json({
            message: "server error",
        })
    }
}

module.exports = {
    addFavourate,
    getFavourate,
    removeFavourate,
    checkFavourate
}