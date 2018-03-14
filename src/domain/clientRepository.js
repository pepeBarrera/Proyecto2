// Dependencias internas
const clientEntity = require('./clientEntity')

// Funcion para crea un nuevo cliente
exports.create = function (name,mail,phone,money) {		
	
	// Regresa un promise
	return new Promise((resolve, reject) => {
		// Se crea una instancia de Client
		let client = new clientEntity()
		client.name = name
		client.mail = mail
		client.phone = phone
		client.money = money

		client.save(function(err, theClient){
			// Maneja el error
			if(err)
				reject(err)
			// Funcion de exito en proceso exitoso
			else
				resolve(theClient)
		})
	})
}

exports.getAllClients = function () {
	return new Promise((resolve, reject) => {
		clientEntity.find(function(err, clients){
			if(err)
				reject(err)
			else
				resolve(clients)
		})
	})
}

exports.discountSale = function (idClient,price){
	return new Promise((resolve, reject) => {
		clientEntity.findById(idClient, function(err, client) {
			if(err)
				return reject(err)
			if(!client)
				return reject({message: "Client not found with id " + idClient})

			client.money = client.money - price;

			if(client.money < 0)
				return reject({message: "Saldo insuficiente para realizar compra"})
       		
       		client.save(function(err, client){
	            if(err) 
	                reject(err)
	            else 
	            	resolve(client)
        	})
		})
	})
}