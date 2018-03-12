const plantsOnSaleRepository = require('../domain/plantOnSaleRepository')
const greenHouseRepository = require('../domain/greenHouseRepository')
const namingService = require('./services/namingServices')

// Cosechar todas las plantas de la hortaliza y ponerlas a la venta
exports.harvestAll = new Promise((resolve, reject) => {

	//Hechar vistaso al invernadero
	greenHouseRepository.findMature.then((qty) => {
		// Nombre y precio aleatorio
		let count = 0
		let plants = []
		//sacar planta, poner precio, nombre y poner el andamio en venta
		for (var i = 0; i < qty; i++) {
			let price = Math.random() * 100
			let name = namingService.toName()

			// Cargar planta en el andamio
			plantsOnSaleRepository.create(name, price).then((plant) => {
				// Cargar la planat en arreglo plants
				plants.push(plant)
				// Ya terminé de cosechar?
				if(++count == qty)
					resolve(plants) // Promise exitoso
			}).catch(reject)
		}
	}).catch(reject)

})