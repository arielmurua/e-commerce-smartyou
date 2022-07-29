const express = require('express');
const routes = express.Router();
const userController = require('../controllers/userController')

routes.get('/', userController.profile)
routes.get('/login', userController.login)
routes.get('/register', userController.register)

module.exports = routes;