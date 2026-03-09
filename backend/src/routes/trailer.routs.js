const express = require('express');
const trailerRouter = express.Router();
const trailerController = require("../controller/trailer.controller")

trailerRouter.get("/:id/trailer",trailerController.getMovieTrailer)


module.exports = trailerRouter;