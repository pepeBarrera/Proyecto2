const plantsOnSaleRepository = require('../domain/plantOnSaleRepository')
const salesRepository = require('../domain/salesRepository')
const clientRepository = require('../domain/clientRepository')

exports.getEveryPlant = function () {
	return new Promise((resolve, reject) => {

		plantsOnSaleRepository.getAllPlants().then(resolve).catch(reject)

	})
}

exports.getAllSales = function () {
	return new Promise((resolve, reject) => {
		salesRepository.getAllSales().then(resolve).catch(reject)
	})
}

exports.setSale = function (idClient,idPlant) {
	return new Promise((resolve, reject) => {

		clientRepository.discountSale(idClient,idPlant).then((client) => {
					
			plantsOnSaleRepository.deletePlant(idPlant).then((plant) => {

				salesRepository.create(idClient,plant.name,plant.price).then(resolve).catch(reject)

			}).catch(reject)

		}).catch(reject)			

	})
}