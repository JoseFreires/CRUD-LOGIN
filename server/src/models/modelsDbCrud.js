const mongoose = require('mongoose');

 const Useralunos = mongoose.model('alunos', {
     name: String,
     email: String,
     password: String
 })


module.exports = Useralunos