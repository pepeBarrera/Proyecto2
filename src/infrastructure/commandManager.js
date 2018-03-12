const harvestApp = require('../application/harvestApp')

module.exports = function (command) {
	switch(command){

		case 'harvest': harvestApp.harvestAll.then((data) => {
				console.log(data)
				process.exit()
			}).catch((err) => {
				console.log("Error!! ")
				console.log(err)
				process.exit()
			})
		break

		default: 
			console.log("Command "+command+ " is not available")
			console.log("Try with harvest")
			process.exit()
		break
	}
}