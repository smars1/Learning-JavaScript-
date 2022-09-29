// importamos Users
const Users = require('./User');


// Creamos nuestro objeto User
const User = {
    // get lo usamos para cuando el caso solo tiene un solo elemento
    get: async (req,res) => {
        res.status(200).send('Este es un chanchito');
    },
      // Cuando son mas de un elemento
    list: async (req, res) => {
        const users = await Users.find();
        res.status(200).send(users);
    },
    create: async (req, res) => {
        console.log(req.body);
        res.status(201).send('Creando chanchito');
    }, 
    update: async (req, res) => {
        res.status(204).send('Actualizando chanchito');
    },
    destroy: async (req, res) => {
        res.status(204).send('Eliminando chachito :(');
    }
}

// Exportamos nuestro objeto User
module.exports = User;