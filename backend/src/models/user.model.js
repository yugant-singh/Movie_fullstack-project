const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name is required"],
        trim: true  
    },
    email: {
        type: String,
        required: [true, "email is required"],
        unique: [true, "email must be unique"],
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: [true, "password is required"],
        select: false   
    },
    role: {
        default: "user",
        type: String,
        enum: ["user", "admin"],

    },
    isBanned: {
        type: Boolean,
        default: false
    }
    
    
},{timestamps: true})

const userModel = mongoose.model("User",userSchema)

module.exports = userModel