// Creamos nuestro objeto User
const User = {
    // get lo usamos para cuando el caso solo tiene un solo elemento
    get:(req,res) => {
        res.status(200).send('Este es un chanchito')
    },
    // Cuando son mas de un elemento
    list: (req, res) => {
        res.status(200).send('Hola chanchito');
    },
    create: (req, res) => {
        res.status(201).send('Creando chanchito');
    }, 
    update: (req, res) => {
        res.status(204).send('Actualizando chanchito');
    },
    destroy: (req, res) => {
        res.status(204).send('Eliminando chachito :(');
    }
}

// Exportamos nuestro objeto User
module.exports = User;
