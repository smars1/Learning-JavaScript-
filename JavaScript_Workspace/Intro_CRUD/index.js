// importamos la libreria de mongoose una vez instalada
const mongoose = require('mongoose');

// Conexion a nuestra base datos: <user> : <password> <@ruta-server>   /<nameDB>?
mongoose.connect('mongodb+srv://<User>:<password>@cluster0.3a9hre8.mongodb.net/Cluster0?retryWrites=true&w=majority');

// modelo de base de datos, a menera de objeto
const User = mongoose.model('User',{
    username: String,
    edad: Number,
});

// Funcion de crear usuarios
const crear = async () => {
    const user = new User({username:'Chanchito triste', edad: 23});
    // user.save().then()
    const saveUser = await user.save();
    console.log(saveUser);
}

// ejutamos la funcion de crear
//crear();

// funcion buscar todo
const buscarTodo = async () => {
    //Devolvemos un arreglo con todos los datos de nuestros usuarios creados al usar find en user
    const users = await User.find(); 
    console.log(users);
}

//buscarTodo();

// buscar usuario especifico. find devuelve un arreglo []
const buscar = async () =>{
    // buscamos apartir del username
    const user = await User.find({username:'Chanchito feliz'});
    console.log(user);
}

//buscar();

// buscar a un solo elemento
// findOne devuelve un objeto {} siempre y cuando lo encuentre, si no lo encuetra devuelve null
const buscarUno = async () =>{
    const user = await User.findOne({username:'Chanchito feliz'});
    console.log(user);
}

//buscarUno();

// Actualizar un recurso 

const Actualizar = async () => {
    // buscamos a nuestro usuario
    const user = await User.findOne({username:'Chanchito feliz'});
    console.log(user);
    user.edad = 30 ;
    // guardamos el recurso de usuario
    await user.save();
}

//Actualizar();

// Eliminar un recurso
const eliminar = async () =>{
    // buscamos a nuestro usuario a eleminar
    const user = await User.findOne({username:'Chanchito triste'});
    console.log(user);
    // remove() es el metodo que nos permite eliminar recursos de la base de datos, siempre y cuando el recurso exista
    // si no existe regresa un error, por lo que hay que validar si el recurso existe antes de utilizar el metodo.
    
    //El codigo de control se lee: si user existe remueve al usuario
    if (user){
        await user.remove();
    }
    // de esta manera si el user no existe retorna un null en lugar de un error
}

eliminar();
