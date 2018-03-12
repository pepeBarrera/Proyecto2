const mongoose = require('mongoose');

var plantSchema = new mongoose.Schema({
    name: String,
    price: Number
})

module.exports = mongoose.model('Plants', plantSchema);