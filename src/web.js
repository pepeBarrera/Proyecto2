const express = require('express')
const mongoose = require('mongoose')
var bodyParser = require('body-parser');

// Own libraries
const config = require('./config.js')
const salesRouter = require('./infrastructure/salesRouter')
const clientRouter = require('./infrastructure/clientRouter')

//Instanciate proyect
const app = express()

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

//Conect to mongodb
	mongoose.Promise = global.Promise
	mongoose.connect(config.url)

	mongoose.connection.on('error', function() {
	    console.log('Could not connect to the database. Exiting now...');
	    process.exit();
	});

	mongoose.connection.once('open', function() {
	    console.log("Successfully connected to the database");
	})

//Welcome route
app.get('/', function(req, res){
	res.send('Bienvenido!!')
})

// API Routes
app.use('/v1/', salesRouter())
app.use('/v1/', clientRouter())

// 404 Error
app.use(function(req, res){
	res.status(404)
	res.json({success: false, err: "Error 404 rout not found!!"})
})

//Start server listening
app.listen(config.port, function() {
	console.log("Proyecto 2 is listening on port", config.port)
})