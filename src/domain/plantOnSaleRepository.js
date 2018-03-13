// Cargar dependencias internas de dominio
const plantEntity = require('./plantEntity')

//Función para crear una nueva planta
exports.create = function(name, price) {
	
	//Regresa un promise
	return new Promise((resolve, reject) =>{
		// Crea una nueva instancia de planta (Tipo mongoose en este caso)
		let plant = new plantEntity()
		plant.name = name
		plant.price = price

		// Guarda planta en DB
		plant.save(function(err, thePlantSaved){
			// Maneja error
			if(err)
				reject(err)
			// Ejecuta función de éxito si el proceso fue exitoso
			else
				resolve(thePlantSaved)
		})
	})
}

exports.getAllPlants = new Promise((resolve, reject) => {

	plantEntity.find(function(err, plants){
		if(err)
			reject(err)
		else
			resolve(plants)
	})
})

exports.deletePlant = function(idPlant){
	return new Promise((resolve, reject) => {
		plantEntity.findByIdAndRemove(idPlant, function(err, plantRemoved) {
			if(err)
				reject(err)
			else{
				if(!plantRemoved)
					reject({message: "couldn't delete plant because not found with id " + req.params.noteId})
				else
					resolve(plantRemoved)
			}
		}
	})
}
