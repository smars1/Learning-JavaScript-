# Login y registro
Es esta seccion veremos como poder hacer uso de login y registro en nuestras aplicaciones.
- Como podemos iniciar secion en dentro de nuestras aplicaciones
- Como nos podemos rigistrar 
- Convenciones estandar que existen al momento de gestionar la contraseña de los usuarios

|Glosary|
|-------|
[Autentificacion y autorizacion]()
[Instalando dependencias y creando modelo]()
[Creando modelo de la base de datos]()
[Construyendo el primer ``endpoint``](https://github.com/smars1/Learning-JavaScript-/blob/main/JS-Autentificacin-y-Autorizacio/Readme.md#construyendo-el-primer-endpoint)
# Autentificacion y Autorizacion 
La ``autentificacion`` es cuando el servidor reconoce quienes somos y nos entrega una ``llave``, esta llave nos permitira  acceder a partes privadas, como una cuenta en especifico como el muro de facebook, o diferentes priviliegios de acceso, segun la llave que se nos entregue.

![image](https://user-images.githubusercontent.com/42829215/194811971-198641d7-960e-4d3b-b8a3-0490a5ec4b0f.png)

Posterior a esta etapa de ``autentificacion`` lo siguiente que debemos ver es la etapa de ``autorizacion``, la cual consiste en que el servidor nos puede indicar si tenemos permisos para acceder a algun recurso o no. 

En si la autorizacion se tratra de un usuario que intenta acceder a los recursos de nuestra aplicacion. Tambien puede verse como una especie de firewall

![image](https://user-images.githubusercontent.com/42829215/194811899-48a88ae3-5c84-40bc-ab66-87fc0f799783.png)

## Cosideraciones a tener al estar trabajando con autetificacion

- Robo de base de datos
- Encriptar contraseñas
- Encriptar con salt 
- JSON web token = llave

Construiremos un registro e inicio de sesion, que funcione y contenga las consideraciones anteriores.

# Instalando dependencias y creando modelo

El primer paso para comenzar el proyecto es instalar las depencias a si como crear el ``packages.json`` de nuestro proyecto

Creamos la carpeta de nuestro proyecto, estando dentro de la carpeta creada utilizamos el comando:
```.bash
npm init
```
El cual nos crea el ``package.JSON``. 

## Instalando libreria
como siguiente paso necesitamos instalar las librerias necesarias, en este caso necesitaremos ``express``, ``mongoose``, ``bycrypt`` para encriptar nuestras contreñas, ``jsonwebtoken`` esta libreria nos va ayudar a poder crear jsonwebtoken y poder validarlos y por ultimo ``express-jwt`` esta es una libreria que nos ayuda hacer la implementacion de validacion de tokens de una manera mas agil.

### Instalando las librerias
```.bash
npm i -S express mongoose bcrypt jsonwebtoken express-jwt
```
una vez instaladas procedemos y creamos un archivo ``index.js`` dentro de la misma carpta.

# Creando el modelo para la base datos
Una vez creado el ``package.json`` e instalando las librerias podremos comenzar a construir nuestro codigo. Dentro del archivo que creamos ``index.js`` comenzaremos llamando a las librerias que anteriormente instalmamos, ya que las necesitaremos. y nos conectamos a mongoDB.
### Llamando a las librerias
```.js
const express = require('express');
const mongoose = require('mongoose');
const bcript = require('bcrypt');
const jwt = require('jsonwebtoken');
const expressjwt = require('express-jwt');

// conectamos a mongoDB,  new name: auth
mongoose.connect('mongodb+srv://<Account>:<PassWord>@cluster0.3a9hre8.mongodb.net/auth?retryWrites=true&w=majority');
```
## Crear App Exprexx
El siguiente paso sera crear nuestra aplicacion de ``express`` e indicarle en que formato recibira los datos que le enviemos
```.js
// creamos app de express
const app = express();
// indicamos que los datos se reciban en formato json
app.use(express.json());
```
## Creando el modelo
En este punto el siguiente paso sera crear el modelo, este modelo considerada las siguientes caracteristicas:
- Email
- Password
- Salt

Para comenzar a construirlo sera recomendable hacerlo en otro archivo.js este lo llamaremos ``user.js`` dentro  de este archivo crearemos el modelo, el cual exportaremos despues. Llamomos a ``mongoose`` y creamos el modelo este se define por el nombre de modelo : ``User`` y un ``objeto { }``  una vez terminado, indicamos que podemos exportarlo como un modulo en este caso de ``User``.

```.js
const mongoose = require('mongoose');

// Creamos el modelo, le demos nombre: User y pasamos el esquema {}, el esquema es un objeto
const User = mongoose.model('User', {
    email: {type: String, required: true },
    password: {type: String, required: true},
    salt: {type: String, required: true},
})

// exportamos el User
module.exports = User;
```

# Construyendo el primer ``endpoint``

El primer ``endpoint`` que se construida sera el de ``register``, con el cual nos registraremos dentro de nuestra aplicacion. El funcionamiento de este consistira en en recibir un objeto JSON, el cual tendra un ``username`` en este caso un email, y un ``password``, lo que haremos es que tomaremos el ``username`` y lo iremos a buscar a la base de datos, en el caso de este ``username`` exista indicaremos que el usuario existe, de no existir el ``username`` creamos un nuevo usuario.

## Metodo ``POST``
Recordemos  que el metodo para crear es el metodo de ``POST``, por lo tanto utilizaremos este metodo para crear nuestro ``endpoint`` ``register``

### Estructura del ``<endpoint>``
```.js
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
        const user = await User.create({email: body.email, password: hashed}); // << pasamos el PW con hashed  
        
        res.send({_id : user._id});


    } catch (err) {
        console.log(err);
        // return status, enviamos el error junto con un mensaje 
        res.status(500).send(err.message);
    }
});
```
## Testeando el endpoint en Postman 

Postman es una herramienta que nos puede ayudar a testear los metodos de nuestras aplicaciones, en este caso serian nuestros endpoint. Para testear nuestra aplicacion, necesitaremos tener el endpoint a testear y saber que metodo utiliza dicho endpoint en este caso es el endpoint ``register`` y contiene el metodo ``POST`` el cual permite crear, ya que la finalidad de este endpoint consiste en crear un usuario. como segundo paso necesitamos tener ejecutar nuestra aplicacion y tener un puerto de escucha.

### Estructura JS: App.listening
Le pasamos puerto y un call back que devuelva un ``console.log('')`` para saber que esta corriendo. una vez que la ejecutemos
```.js
// aplicacion de escucha, le pasamos puerto
app.listen(3000, () => {
    console.log('listening in port 3000');
});
```
Una vez corriendo abrimos postman y seleccionamos el metodo ``POST``, y en headers devemos tener como configuracion de ```key = Content-Type`` y ``value = application/json``

![image](https://user-images.githubusercontent.com/42829215/195794194-1b30dc33-3520-420b-a86c-b6cc5de498fa.png)

Como siguiente paso nos dirigimos a body y aqui escribiremos el json con el username con propiedad ``email`` y ``password`` y enviaremos la peticion.

### Se aprecia que como nos falta un dato en la peticion el ``catch`` no captura el error y nos devuelve un codigo de status 500 ya que el salt es requerido.
![image](https://user-images.githubusercontent.com/42829215/195795729-7c458fbd-6d0d-4468-b1fc-d6f18eac90cb.png)

Para arreglar esto le debemos pasar el salt cuando creamos a nuestro user, esto lo podemos hacer agregando el salt que creamos al hashed

### Estructura JS: Agregando el salt
agregamos el salt despues de hashed
```.js
        //creamos al user
        const user = await User.create({email: body.email, password: hashed, salt}); // << pasamos el PW con hashed  
```
Volvemos a ejecutar y volvemos a enviar la peticion, esto nos debera crear al user y devolvernos su id como lo solicitamos en la parte final.
### Postman
![image](https://user-images.githubusercontent.com/42829215/195797640-dae2383c-5c6b-4925-82c4-ca99cb57f617.png)
### Terminal 
![image](https://user-images.githubusercontent.com/42829215/195797942-ef8c09f6-8eda-4a8b-8f04-e410cc54f3ca.png)

La idea es que este ``id`` este encriptado y sea como una llave para poder entrar a la aplicacion. Por lo que el ``id`` que recibimos tendremos que encriptarlo para mantenerlo seguro de posibles amenazas y en lugar del ``id`` recibir un ``jsonwebtoken``.
