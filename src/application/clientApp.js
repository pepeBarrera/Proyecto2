const clientRepository = require('../domain/clientRepository')

exports.getEveryClient = new Promise((resolve, reject) => {

	clientRepository.getAllClients.then(resolve).catch(reject)

})

exports.createClient = function (name,mail,phone,money) {
	return new Promise((resolve, reject) => {
		clientRepository.create(name,mail,phone,money).then(resolve).catch(reject)
	})
}