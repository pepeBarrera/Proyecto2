// Dependencias internas
const salesEntity = require('./salesEntity')

// Funcion para crea una nueva venta
exports.create = function (idClient,plantName,salePrice) {		
	
	// Regresa un promise
	return new Promise((resolve, reject) => {
		// Se crea una instancia de plantSales
		console.log(idClient + " " +plantName + " " + salePrice)
		let plantSales = new salesEntity()
		plantSales.idClient = idClient
		plantSales.plantName = plantName
		plantSales.salePrice = salePrice

		plantSales.save(function(err, thePlantSales){
			// Maneja el error
			if(err)
				reject(err)
			// Funcion de exito en proceso exitoso
			else
				resolve(thePlantSales)
		})
	})
}

exports.getAllSales = function () {
	return new Promise((resolve, reject) => {
		salesEntity.find(function (err, allSales) {
			if(err)
				reject(err)
			else
				resolve(allSales)
		})
	})
}