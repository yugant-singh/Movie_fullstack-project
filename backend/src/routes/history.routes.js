const express  = require("express")
const historyRouter = express.Router()
const authMiddleware = require("../middleware/auth.middleware")
const historyController = require("../controller/history.controller")
historyRouter.post("/",authMiddleware,historyController.addHistoryController)
historyRouter.get("/",authMiddleware,historyController.getHistoryController)


module.exports = historyRouter