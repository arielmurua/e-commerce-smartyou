const express = require('express');
const routes = express.Router();
const productsController = require('../controllers/productsController');

//Listado producto
routes.get('/', productsController.index)
//Detalle producto
routes.get('/:idCat/:idProduct', productsController.details)

module.exports = routes;