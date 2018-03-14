const clientApp = require('../../application/clientApp')

exports.getEveryPlant = function (req, res) {
	
	clientApp.getEveryClient().then((clients) => {
		res.json({success: true, data: clients})
	}).catch((err) => {
		res.status(400)
		res.json({success: false, err: err})
	})

	//res.json({success: true, message: "Todo funciona bien"})
}

exports.createClient = function(req, res) {
	clientApp.createClient(req.body.name,req.body.mail,req.body.phone,req.body.money).then((client) => {
		res.json({success: true, data: client})
	}).catch((err) => {
		res.status(400)
		res.json({success: false, err: err})
	})
}