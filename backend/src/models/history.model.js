const mongoose  = require("mongoose")
const historySchema  = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true   
    },
    movieID:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    poster:{
        type:String,
        required:true
    }

},{timestamps:true })

const historyModel = mongoose.model("History",historySchema)
module.exports = historyModel