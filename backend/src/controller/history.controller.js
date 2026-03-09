const historyModel = require("../models/history.model")

/*
* @desc Add history
* @route POST /api/history
* @access Private
*/
 async function addHistoryController(req,res){

    try{
        const {movieID,title,poster} = req.body
        const userID = req.user.id
       const  isHistoryExist = await historyModel.findOne({user:userID,movieID})
       if(isHistoryExist){
        return res.status(400).json({
            message:"History already exists"
        })
       }
        const history = await historyModel.create({
            user:userID,
            movieID,
            title,
            poster
        })
        return res.status(201).json({
            message:"History added successfully",
            history
        })
    }
    catch(err){
        return res.status(500).json({
            message:"Internal Server Error",
            error:err.message
        })
    }
    
}

/*
* @desc Get history
* @route get /api/history
* @access Private
*/


async function getHistoryController(req,res){
    try{
        const userId = req.user.id
        const history = await historyModel.find({user:userId}).sort({createdAt:-1})
        return res.status(200).json({
            message:"History fetched successfully",
            history
        })
    }
    catch(err){
        return res.status(500).json({
            message:"Internal Server Error",
            error:err.message
        })
    }
}

module.exports = {
    addHistoryController,
    getHistoryController
}

