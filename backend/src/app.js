const express = require("express")
const app =express()
const cookieParser = require("cookie-parser")
const cors = require("cors")
const authRouter = require("../src/routes/auth.routes")
const favourateRouter = require("../src/routes/favourate.routes")
const historyRouter = require("../src/routes/history.routes")
const tmdbRouter = require("../src/routes/tmdb.routes")
const searchRouter = require("../src/routes/search.routes")
const trailerRouter = require("../src/routes/trailer.routs")

app.use(express.json())
app.use(cors({
    origin:"http://localhost:5173",
     credentials:true
}))
app.use(cookieParser())

app.use("/api/auth",authRouter) 
app.use("/api/favourate",favourateRouter)
app.use("/api/history",historyRouter)
app.use("/api",tmdbRouter)
app.use("/api/search",searchRouter)
app.use("/api/movie",trailerRouter)



module.exports = app