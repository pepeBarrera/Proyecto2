const express = require('express')
const mongoose = require('mongoose')

// Own libraries
const config = require('./config.js')

//Instanciate proyect
const app = express()

//Conect to mongodb
mongoose.Promise = global.Promise
mongoose.connect(config.url)

//Welcome route
app.get('/', function(req, res){
	res.send('Bienvenido!!')
})

//Start server listening
app.listen(config.port, function() {
	console.log("Proyecto 2 is listening on port", config.port)
})