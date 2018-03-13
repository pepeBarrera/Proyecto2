const mongoose = require('mongoose')

var clientSchema = new mongoose.Schema({
	name: String,
	mail: String,
	phone: String,
	money: Number
})

module.exports = mongoose.model('Client', clientSchema)