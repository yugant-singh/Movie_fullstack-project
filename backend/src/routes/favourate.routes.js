const express = require('express');
const favourateRouter = express.Router();
const authMiddleware = require("../middleware/auth.middleware")
const favourateController = require('../controller/favourate.controller');

favourateRouter.post("/",authMiddleware,favourateController.addFavourate)
favourateRouter.get("/",authMiddleware,favourateController.getFavourate)
favourateRouter.delete("/:movieId",authMiddleware,favourateController.removeFavourate)

favourateRouter.get("/check/:movieId",authMiddleware,favourateController.checkFavourate)

module.exports = favourateRouter