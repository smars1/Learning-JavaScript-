// import mongoose
const mongoose = require('mongoose');

// objeto, modelo de nuestra DB  
const Users = mongoose.model('User', {
          // string, se requieren al menos 3 letras
    name:{type:String, require: true, minLength: 3},
    lastname:{type:String, require, minLength: 3 },
})

// exportamos como modulo
module.exports = Users;