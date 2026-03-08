const express = require("express")
const app =express()
const cookieParser = require("cookie-parser")
const authRouter = require("../src/routes/auth.routes")
const favourateRouter = require("../src/routes/favourate.routes")

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth",authRouter) 
app.use("/api/favourate",favourateRouter)




module.exports = app