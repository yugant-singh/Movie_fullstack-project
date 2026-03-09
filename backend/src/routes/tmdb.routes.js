const express = require('express');
const tmdbRouter = express.Router();

const tmdbController = require("../controller/tbdb.controller")

tmdbRouter.get("/trending",tmdbController.getTrendingMovies)
tmdbRouter.get("/popular",tmdbController.getpopularMovies)
tmdbRouter.get("/movie/:id",tmdbController.getmovdetails)
tmdbRouter.get("/movies",tmdbController.getMovies)
tmdbRouter.get("/tvshows",tmdbController.getTVShows)
tmdbRouter.get("/people",tmdbController.getPopularPepple)
tmdbRouter.get("/movie/:id/images",tmdbController.getMovieImages)

module.exports = tmdbRouter