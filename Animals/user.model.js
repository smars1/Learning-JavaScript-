const mongoose= require('mongoose');
const User = require('../JS-Autentificacin-y-Autorizacio/user');

const Users = mongoose.model('User', {
    email: {type: String, required: true, minLenght: 5},
    password: {type: String, required: true},
    salt: {type: String, required: true}
})

// may be this code can to break in this section because the name no is same then as called in the auth.controller.js file
module.exports = Users;