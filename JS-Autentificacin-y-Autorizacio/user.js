const mongoose = require('mongoose');

// Creamos el modelo, le demos nombre: User y pasamos el esquema {}, el esquema es un objeto
const User = mongoose.model('User', {
    email: {type: String, required: true },
    password: {type: String, required: true},
    salt: {type: String, required: true},
})

// exportamos el User
module.exports = User;