const express = require('express')
const mongoose = require('mongoose')

// Own libraries
const config = require('./config.js')
const salesRouter = require('./infrastructure/salesRouter')

//Instanciate proyect
const app = express()

//Conect to mongodb
mongoose.Promise = global.Promise
mongoose.connect(config.url)

//Welcome route
app.get('/', function(req, res){
	res.send('Bienvenido!!')
})

// API Routes
app.use('/v1/', salesRouter())

// 404 Error
app.use(function(req, res){
	res.status(404)
	res.json({success: false, err: "Error 404 rout not found!!"})
})

//Start server listening
app.listen(config.port, function() {
	console.log("Proyecto 2 is listening on port", config.port)
})