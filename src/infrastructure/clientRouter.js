const express = require('express')

const clientService = require('./services/clientService')

module.exports = function () {
	
	const router = new express.Router()

	// Petición HTTP, método GET, ruta: http://localhost:3000/v1/client
	router.get('/client', clientService.getEveryPlant)

	router.post('/client', clientService.createClient)

	return router
}