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

exports.getAllSales = function (req, res) {
	salesApp.getAllSales.then((sales) => {
		res.json({success: true, data: sales})
	}).catch((err) => {
		res.status(400)
		res.json({success: false, err: err})
	})
}

exports.setSale = function (req, res) {
	salesApp.setSale(req.body.idClient,req.body.idPlant).then((ready) => {
		res.json({success: true, data: ready})
	}).catch((err) => {
		res.status(400)
		res.json({success: false, err: "error"})
	})
}