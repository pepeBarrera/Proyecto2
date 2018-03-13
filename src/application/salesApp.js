const plantsOnSaleRepository = require('../domain/plantOnSaleRepository')

exports.getEveryPlant = new Promise((resolve, reject) => {

	plantsOnSaleRepository.getAllPlants.then(resolve).catch(reject)

})