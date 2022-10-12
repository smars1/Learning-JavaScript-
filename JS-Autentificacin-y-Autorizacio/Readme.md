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
    passwrord: {type: String, required: true},
    salt: {type: String, required: true},
})

// exportamos el User
module.exports = User;
```


