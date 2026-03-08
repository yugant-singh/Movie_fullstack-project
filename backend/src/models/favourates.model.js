const mongoose = require("mongoose")
const favourateSchema  = new mongoose.Schema({

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    movieId:{
        type:String,
        required:true
    },
        title:{
            type:String,
            required:true,
            trim:true
    },
    poster:{
        type:String,
        required:true
    }

},{timestamps:true })

const favourateModel = mongoose.model("Favourate",favourateSchema)

module.exports = favourateModel