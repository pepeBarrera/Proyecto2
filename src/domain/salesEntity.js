const mongoose = require('mongoose')

var plantSalesSchema = new mongoose.Schema({
	idClient: String,
	plantName: String,
	salePrice: Number
})

module.exports = mongoose.model('PlantSales', plantSalesSchema)