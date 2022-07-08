const express = require('express');
const routes = express.Router();
const mainController = require('../controllers/mainController');

routes.get('/', mainController.index);

module.exports = routes;