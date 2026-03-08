const express = require('express');
const authRouter  = express.Router();
const authController = require("../controller/auth.controller")
const authMiddleware = require("../middleware/auth.middleware")

authRouter.post('/register',authController.registerController)  // Register a new user
authRouter.post('/login',authController.loginController)  // Login a user
authRouter.get('/logout',authMiddleware,authController.logutController)  // Logout a user
authRouter.get('/me',authMiddleware,authController.getUserController)  // Get user details

module.exports = authRouter