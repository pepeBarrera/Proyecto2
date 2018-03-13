const salesApp = require('../../application/salesApp')

exports.getEveryPlant = function (req, res) {
	
	salesApp.getEveryPlant.then((plants) => {
		res.json({success: true, plants: plants})
	}).catch((err) => {
		res.status(400)
		res.json({success: false, err: err})
	})

	//res.json({success: true, message: "Todo funciona bien"})
}