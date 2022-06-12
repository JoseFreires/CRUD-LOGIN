const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/jwt')
let db = mongoose.connection

module.exports = db