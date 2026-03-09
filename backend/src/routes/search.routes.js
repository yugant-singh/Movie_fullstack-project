const express = require('express');
const searchRouter = express.Router();
const searchController = require("../controller/search.controller")


searchRouter.get("/",searchController.searchMulti)

module.exports = searchRouter;