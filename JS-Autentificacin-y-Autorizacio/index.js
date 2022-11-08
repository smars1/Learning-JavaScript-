// librerias
const express = require('express');
const mongoose = require('mongoose');
const bcript = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');
const {expressjwt: jwt} = require('express-jwt'); // cambio nomenclatura al actualizar,  
const User = require('./user'); //<<<=== importamos el modelo de User.js

// conectamos a mongoDB,  new name: auth
mongoose.connect('mongodb+srv://<Account:Password>@cluster0.3a9hre8.mongodb.net/auth?retryWrites=true&w=majority');

// creamos app de express
const app = express();
// indicamos que los datos se reciban en formato json
app.use(express.json());

// creamos el modelo de usuario en otro archivo: user.js


//Fucion valida JWT la cual sera nuestro middleware, utilizamos la libreria JWT Argumentos, secreto y algoritmo
const validateJwt = jwt({ secret: 'mi-string-secreto', algorithms: ['HS256'] }); // cap 148 notas, cambio de version cambio nomenclatura 

// creamos funcion que recibira y firmada un id
const signToken = _id => jsonwebtoken.sign({ _id }, 'mi-string-secreto');

//Creando endpoint register
app.post('/register', async (req, res) => {
    //sacamos el body dentro de nuestro objeto en req, dentro de body estara el email y password
    const { body } = req;
    console.log({ body });
    try{
        // buscamos el username, verificamos si el user existe 
        const isUser = await User.findOne( { email : body.email}); // << modelo de usuario buscamos email dentro de body
        if (isUser){
            // status(403) se refiere a operacion no permitira
            return res.status(403).send('Usuario ya existe');
        }

        // crear salt, se crea apartir de la libreria bcript con el metodo genSalt()
        const salt = await bcript.genSalt();
        // encriptamos Password,           <PW>, <salt>
        const hashed = await bcript.hash(body.password, salt);
        //creamos al user
        const user = await User.create({email: body.email, password: hashed, salt}); // << pasamos el PW con hashed  
        // firmamos y encriptamos el id del user creado 
        const signed = signToken(user._id);
        //status 201 un recurso fue creado
        res.status(201).send(signed);

        res.send({_id : user._id});


    } catch (err) {
        console.log(err);
        // return status, enviamos el error junto con un mensaje 
        res.status(500).send(err.message);
    }
});

// creamos nuestro endpoint inicio de sesion 
app.post('/login', async (req, res) => {
    // sacamos el cuerpo de la peticion, ya que se envian por el metodo de post
    const {body} = req;
    
    try {
        const user = await User.findOne({email: body.email});
        if(!user){
            res.status(403).send('User o password invalida');
        }
        else{
            // comparamos el password del body.req con el encriptado de la base de datos use.password, el metodo devuelve un boolean
            const isMatch = await bcript.compare(body.password, user.password);
            if(isMatch){
                // si password es igual devolvemos el id del user
                const signed = signToken(user._id);
                res.status(200).send(signed);
            }
            else{
                res.status(403).send('User o password invalida');
            }

        }
    }
    catch(err){
        res.status(500).send(err.message);
    }
});

const findAndAssingUser = async (req, res, next) => {
    try{
        // llamado a base de datos, busca id user
        const user =  await User.findById(req.auth._id);
        if(!user){
            // si el user no existe
            return res.status(401).end();
        }
        req.user = user;
        next();
    }
    catch(e){
        // este sera nuestro middleware para el manejo de errores
        next(e);
    }
}

// pasamos los middleware creados, esta propiedad de express regresa un solo middleware
const isAuthenticated = express.Router().use(validateJwt, findAndAssingUser);

// Haciendo uso de middleware 
app.get('/lele', isAuthenticated, (req, res) => {
    res.send(req.user);
});


// aplicacion de escucha, le pasamos puerto
app.listen(3000, () => {
    console.log('listening in port 3000');
});



