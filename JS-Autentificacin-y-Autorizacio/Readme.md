# Login y registro
Es esta seccion veremos como poder hacer uso de login y registro en nuestras aplicaciones.
- Como podemos iniciar secion en dentro de nuestras aplicaciones
- Como nos podemos rigistrar 
- Convenciones estandar que existen al momento de gestionar la contraseña de los usuarios

|Glosary|
|-------|
[Autentificacion y autorizacion](https://github.com/smars1/Learning-JavaScript-/blob/main/JS-Autentificacin-y-Autorizacio/Readme.md#autentificacion-y-autorizacion)
[Instalando dependencias y creando modelo](https://github.com/smars1/Learning-JavaScript-/blob/main/JS-Autentificacin-y-Autorizacio/Readme.md#instalando-dependencias-y-creando-modelo)
[Creando modelo de la base de datos](https://github.com/smars1/Learning-JavaScript-/blob/main/JS-Autentificacin-y-Autorizacio/Readme.md#creando-el-modelo-para-la-base-datos)
[Construyendo el primer ``endpoint``](https://github.com/smars1/Learning-JavaScript-/blob/main/JS-Autentificacin-y-Autorizacio/Readme.md#construyendo-el-primer-endpoint)
[Firmando el JWT](https://github.com/smars1/Learning-JavaScript-/blob/main/JS-Autentificacin-y-Autorizacio/Readme.md#firmando-el-jwt)
[Endpoint de Inicio de sesion](https://github.com/smars1/Learning-JavaScript-/blob/main/JS-Autentificacin-y-Autorizacio/Readme.md#endpoint-de-inicio-de-sesion)
[Validando el JsonWebToken](https://github.com/smars1/Learning-JavaScript-/blob/main/JS-Autentificacin-y-Autorizacio/Readme.md#validando-el-jsonwebtoken)


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
Una vez corriendo abrimos postman y seleccionamos el metodo ``POST``, y en headers devemos tener como configuracion de ``key = Content-Type`` y ``value = application/json``

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

# Firmando el JWT

Lo que haremos es tomar un objeto el cual tendra una propiedad de _id y encriptarlo para que tenga un formato de ``JWT``, luego este ``JWT``  el cual sera la llave nosotros se la enviaremos al  user y este tendra que adjuntar este  ``JWT``  de manera constante dentro sus headers, de esta manerea lo que nosotros haremos es que cada vez que el usuario mande una peticion vamos a ir a revisar sus headers y vamos a ver si es que se encuetra este ``JWT``  y lo vamos a desencriptar para obtener finalmente este objeto que contiene la id de user, y con este id de user lo que haremos sera ir a busccar a ese user en nuestra base de datos, y se lo vamos a asignar a nuestro objeto de req en la propiedad de user.

El motivo por el que se utiliza JWT es para demostrar que los datos enviados y recibidos fueron creados por una fuente auténtica reconocida. Los datos de la firma permiten verificar al receptor (su aplicación y nuestra API) la autenticidad de la fuente de los datos.

La funcion jwt.sing viene dentro de la libreria jwt, lo que hace es que encripta el argumento que le pasamos

Le debemos pasar el objeto que queremos encripta, luego debemos indicarle como queremos encriptar nuestro jsonwebtoken

```.js
jwt.sing({ _id: user._id }, 'mi-string-secreto')
```

Este es un mero ejemplo para comprender como funciona esto, pero no es una buena practica el realizar el encriptado de esta manera ya que se puede ver en el codigo el salt con el que se ha encriptado el  argumento.

Como tambien utilizaremos esta misma autentificacion en nuestra funcion de inicio de sesion es recomendable realizar una funcion para que nuestra funcion de signed pueda ser llamada por otra y asi optimizar codigo reutilizandolo

## Funcion signToken

```.js
const signToken = _id => jwt.sign({ _id }, 'mi-string-secreto');
```
Esta funcion sera  igual a que recibe un ID, en donde nosotros no necesitamos pasarle el user id ya que utilizamos la convencion de { _id } y al llamarlo podemos usar ``user._id``

## Estructura JS: Utilizando sigToken en nuestro entpoint ``register``

```.js
// creamos funcion que recibira y firmada un id
const signToken = _id => jwt.sign({ _id }, 'mi-string-secreto');

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
```
# Endpoint de Inicio de sesion

En nuestro inicio de sesion tambien vamos a delvolver un ``JWT``, es por ello que creamos la funcion signToken, puesto que ya siendo una funcion podemos reutilizarla en otra funcion como por ejemplo en nuestro endpoint de inicio de sesion. Este ``JWT``  lo utilizaremos tambien para validar al usuario y que este pueda entrar a rutas que no podria entrar si no inicia sesion.

El inicio de sesion funcionara de la siguiente manera tomamos las credenciales de user y password, estas las utlizamos para ir a buscar a los usuarios a la base de datos, primero iremos a buscar al user si este no existe, colocaremos una decision o if, si este no existe mandaremos user o pass incorrecto, en caso de exisitir el user, lo que haremos sera comparar el password con el del user con el password de ese mismo user en la base de datos, en caso de no ser iguales se mandara un mensaje de user o password invalida, si las 2 son iguales devolvemos al user un ``jwt`` firmado.

## Estructura JS: endpoint login

```.js
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
            // comparamos el password del body.req con el encriptado de la base de datos user.password, el metodo devuelve un boolean
            const isMatch = await bcript.compare(body.password, user.password);
            if(isMatch){
                // si password es igual devolvemos el id del user,  llamamos a la funcion signToken
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
})
```
## Salida exitosa en postman
![image](https://user-images.githubusercontent.com/42829215/196639080-35c31d54-d4c6-494b-9cfe-6df74e206204.png)

# Validando el JsonWebToken 
Para poder validar los JWT que nosotros recibamos a tra vez de nuestros headers, vamos a necesitar utilizar la libreria de ``expressJwt``. para esto vamos a comenzar creando una funcion, la cual sera nuestro middleware.

### Version anterior
```.js
const validateJwt  =  expressJwt( { secret: 'mi-string-secreto', algorithms: ['HS256'] } );
```

### Version actualizada
```.js
//Fucion valida JWT la cual sera nuestro middleware, utilizamos la libreria JWT Argumentos, secreto y algoritmo
const validateJwt = jwt({ secret: 'mi-string-secreto', algorithms: ['HS256'] }); // cap 148 notas, cambio de version cambio nomenclatura 
```

## Cambios de version

Debido a que tenemos una version superior, a la que esta utilizamos en el ejemplo anterior, debemos hacer cambios en el codigo.

- Cambios en la importacion  de ``express-jwt``

- Cambios en el nombre de variable de la libreria ``jsonwebtoken``

### Importacion anterior

```.js
const express = require('express');
const mongoose = require('mongoose');
const bcript = require('bcrypt');
const jwt = require('jsonwebtoken');
const expressjwt = require('express-jwt');
```

### Actualizacion

```.js
// librerias
const express = require('express');
const mongoose = require('mongoose');
const bcript = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');
const {expressjwt: jwt} = require('express-jwt'); // cambio nomenclatura al actualizar,  
```

Ahora podemos pasar el middleware que creamos al endpoint de ``/lele`` en cual vamos a validar nuestro JWT.

```.js 
// Haciendo uso de middleware: validateJwt

app.get('/lele', validateJwt, (req, res, next) => {
    console.log('lala', req.auth);// nuestro id estara en auth no en user, nuestro cluster de llama auth
    res.send('ok');
} ) 
```
Ahora podemos probar nuestro nuevo ``endpoint`` en postman, lo que hara este endpoint de ``/lele`` sera validar si nuestro JWT es valido o no, si es valido nos dejara hacer las peticiones si no es valido no nos dejara hacer las peticiones.

El primer paso sera loguearnos con el endpoint de ``/login`` el cual tiene el metodo ``post``

![image](https://user-images.githubusercontent.com/42829215/200154472-6d124655-bafb-4dc5-9f07-1c71c0b28a7d.png)

Se puede observar que al momento de loguernos se nos devuelve un JWT, este con el cual nos autentificaremos con el metodo ``get`` en el metodo ``/lele``.

![image](https://user-images.githubusercontent.com/42829215/200154551-848ed47c-5771-481a-a6c0-321210f3d403.png)
Copiamos este JWT. Como siguiente paso vamos a headers y agregamos Key: ``Authorization``, value: ``bearer`` ``pegamos el JWT``

![image](https://user-images.githubusercontent.com/42829215/200154641-f35c0d6b-f865-43de-80a3-bf45b887dfe5.png)

ahora cambiamos al metodo get y cambiamos en la ruta a ``/login`` por ``/lele`` puesto que el ``endpoint`` ``/lele`` es del metodo get, posteriormente llevamos a cabo la peticion. si todo sale bien nos debe de devolver un ok en postman, y en la consola el string lala, un objeto con un ``id`` y la fecha de creacion del JWT en un ``iat`` (issued at) este iat nos puede servir en caso de queder caducar el JWT.

### Postman

![image](https://user-images.githubusercontent.com/42829215/200160366-a9782b85-2aed-4316-83dc-1c01c6f03124.png)

### Consola 
Autentificacion valida 
![image](https://user-images.githubusercontent.com/42829215/200160399-760379fb-0cab-4ae8-860c-ee42c3fec6a0.png)

Auntentificacion no valida, si quitamos un letra o escrbimos mal el un caracter del ``JWT`` no  nos deja realizar la peticion.

![image](https://user-images.githubusercontent.com/42829215/200160523-37a0d53e-d67a-42aa-b5a1-c43594190a95.png)

La aplicacion no se detiene si el JWT no es valido pero no deja realizar peticiones a menos que el JWT sea valido. 

![image](https://user-images.githubusercontent.com/42829215/200160538-e970a712-8f19-4662-aa43-777d06006a9d.png)

Ahora que nosotros ya tenemos el id de nuestro usuario, podmos crear otro middleware que se va a encargar de tomar la id de usuario y asignarlo a nuestro objeto de request, modificaremos el endpoint ``/lele``, en el fondo remplazaremos la propiedad de ``req.auth`` que contiene el id y iat  por el usuario completo ``req.auth._id``, el cual contiene un nombre de usuario, password y un salt. 

realizamos un llamado a la base de datos y buscamos al usuario por su id.

```.js
// Haciendo uso de middleware 
app.get('/lele', validateJwt, async (req, res, next) => {
    try{
        // llamado a base de datos, busca id user
        const user =  await User.findById(req.auth._id);
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
}, (req, res) => {
    res.send(req.user);
});
```
### haciendo peticion en postman
![image](https://user-images.githubusercontent.com/42829215/200663383-80881b71-fd77-434e-b68a-3c29b851715e.png)

Se observa como ahora se nos devuelve el usuario completo.

## optimizando codigo 

Si bien nuestro codigo ya funciona, este se puede simplificar con la ayuda de otro middleware, por lo cual deberemos crear un segundo middleware en de crear la funcion en el mismo endpoint, por lo que tomamos la funcion y se la asignamos al segundo middleware que crearemos. quedadando de la siguiente manera:

### Simplificando endpoint con middleware 
```.js
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

// Haciendo uso de middleware 
app.get('/lele', validateJwt, findAndAssingUser, (req, res) => {
    res.send(req.user);
});

```
Ahora cuando nosotros queremos proteger una ruta, tenemos que pasarle el JWT BT y seguido de eso tenemos que pasarle el middleware que acabamos de crear ``findAndAssingUser`` y luego colocamos la logica del entpoint.

## Propiedad express.Router.use()

Comprendiendo esto podemos tambien hacer que este endpoint solo contenga un middleware, con el fin que este quede mejor simplificado. Express tiene una utilidad que nos permite poder pasarle middleware en este caso y esta lo que hara sera devolver un solo middleware, de esta manera solo necesitaremos pasar un solo middleware a los endpoint que queremos proteger y no los 2. Tambien se mantendran los middleware por separado por si es necesario hacer algo con ellos.

## Estructura , definiendo un middleware con express.Router.use()

```.js
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

```
Entonces ``Router.use()`` es la funcion que nos va ayudar a componer nuestros middleware. El middleware ``isAuthenticated`` indica que el usuario debe estar autenticado para poder ejecutar toda la logica que esta dentro de la ruta y en caso contrario nuestro middlware entregara un mensaje de error.
