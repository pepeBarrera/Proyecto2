// Third party libraries
const mongoose = require('mongoose')

// Own libraries
const config = require('./config.js')
const commandManager = require('./infrastructure/commandManager')

//Conect to mongodb
mongoose.Promise = global.Promise
mongoose.connect(config.url)

// Command
let command = process.argv[2]

// Send command to our commands manager
commandManager(command)