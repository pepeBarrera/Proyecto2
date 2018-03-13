const express = require('express')

const saleService = require('./services/salesService')

module.exports = function () {
	
	const router = new express.Router()

	// Petición HTTP, método GET, ruta: http://localhost:3000/v1/plants
	router.get('/plants', saleService.getEveryPlant)

	return router
}