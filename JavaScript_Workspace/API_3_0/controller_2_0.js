// importamos Users
const Users = require('./User');


// Creamos nuestro objeto User
const User = {
    // get lo usamos para cuando el caso solo tiene un solo elemento
    get: async (req,res) => {
        const {id} = req.params;
        const user = await Users.findOne({_id:id});

        res.status(200).send(user);
    },
      // Cuando son mas de un elemento
    list: async (req, res) => {
        const users = await Users.find();
        res.status(200).send(users);
    },
    create: async (req, res) => {
       // req.body, llama al cuerpo de formato json 
        // console.log(req.body);

        // creamos una nueve instancia que alamacena a nuestro nuevo usuario
        const user = new Users(req.body);
        const savedUser = await user.save();
        //  buscamos y enviamos el id del usuario
        res.status(201).send(savedUser._id);
    }, 
    update: async (req, res) => {
        // tomamos lo sdatos de la perticion
        // buscamos el recurso a aactualizar
        // si existe el recurso que viene en la petision 
        // remplazamos los datos existentes con los de la petision
        const {id} = req.params;
        const user = await Users.findOne({_id:id});
        Object.assign(user, req.body);
        await user.save();
        //devolvemos un 204
        res.sendStatus(204);
    },
    destroy: async (req, res) => {
        const {id} = req.params;
        const user = await Users.findOne({_id:id});
        if (user){
            user.remove();
        }
        res.sendStatus(204);
    }
}

// Exportamos nuestro objeto User
module.exports = User;