const mongoose = require('mongoose')

var plantSalesSchema = new mongoose.Schema({
	idClient: mongoose.Schema.Types.ObjectId,
	plantName: String,
	salePrice: Number
})

module.exports = mongoose.model('PlantSales', plantSalesSchema)