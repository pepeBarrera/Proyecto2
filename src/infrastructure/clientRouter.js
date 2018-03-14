const express = require('express')

const clientService = require('./services/clientService')

module.exports = function () {
	
	const router = new express.Router()

	// Petición HTTP, método GET, ruta: http://localhost:3000/v1/client
	router.get('/clients', clientService.getEveryPlant)

	router.post('/clients', clientService.createClient)

	return router
}