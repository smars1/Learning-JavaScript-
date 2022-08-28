# JavaScript

## ***Notas:***

Para ejecutar archivos .JS en linux deberemos hacerlo con el comando ``node``, ejemplo:

```.js
node index.js
```

| Glosary |
|------------|
[Tipos de datos](https://github.com/smars1/Learning-JavaScript-/blob/main/JavaScript.md#tipos-de-datos)
[Variables](https://github.com/smars1/Learning-JavaScript-/blob/main/JavaScript.md#variables)
[Objetos](https://github.com/smars1/Learning-JavaScript-/blob/main/JavaScript.md#objetos)


# Hola munndo 

podemos comenzar JavaScript con un hola mundo, podemo lograr imprimir el hola mundo con el siguiente comando:
``console.log('Hola mundo')``

```.js
console.log("Hola mundo")
```

El hola mundo por lo general es lo primero que se enseña hacer al momento de comenzar a aprender un lenguaje de programacion para ayudar a introducirnos a la programcion.

# Tipos de datos


- ``//`` :  todo lo que se escriba despues de los slash sera un comentario de linea.
- ``string`` : cadena de caracteres. debemos utilizar comillas para dar el valor por ejemplo  'hola mundo' debemos.  
- ``boolean`` : true, false.
- ``Null`` : nulo.
- ``number`` : estos son cualquier tipo de numero, 123456.
- ``underfined`` : no se encuentra definida.
- ``object`` : son objetos que se contemplan como estructuras o grupos de datos.

```.js
// Objetos (Objetos y arrays)
// Objeto
const persona ={
    nombre:'Diego Atzin',
     apellidos:'Pineda Cota',
     Edad:24
}

//Arrays o listas

const frutas = ['manzana','mango'];

console.log(persona);
console.log(frutas);
// primitivos(numbers, floats, strings, boolean, undefined, null)

const Edad = 24; // tipo de dato number
const grados = 4.7; // tipo de dato float
const nombre = 'Diego Atzin';// tipo de dato string
const isblue = false; // tipo de dato boolean (true or false)

let perro; // llamamos a perro nos dara un undefined por que es un dato sin valor
let encendido=null; // null es un tipo de dato null que tiene un valor null 

// La diferencia entre estos dos recide en que una no tiene un valor asignado y la otra si tiene un
//valor tipo null asignado

// typeof para comprobar el tipo de dato de una variable

console.log(typeof Edad);
console.log(typeof grados);
console.log(typeof nombre);
console.log(typeof isblue);

console.log(typeof perro);
console.log(typeof estado);
```

# Variables
Tenemos 3 formas de definir una variable ``var``,  ``let``, ``const``, en el siguiente codigo se mostraran para que se utiliza cada caso y el porque degemos evitar el uso de var.


```.js
// var , let y const 

// Variable: una variable tiene la capacidad de guardar un espacio en memoria 

// El ; no son obligtorias al final de una sentencia de codigo pero son una buena practica

// Declaracion de una variable 
let mascota;

// inicializamos variable
mascota = "perro";

// Otra forma de declarar e inicializar, let mascota = "perro"; 


/* Reglas de variables con let
        
        Es una buena practica usar let cuando queremos que nuestra variable cambie

        1. let permite declarar variables y no inicianizarlas
    
        2. let permite inicializar mas tarde las variables en cualquier parte del codigo por lo que nos permite
        tener un valor null en nuesta variable

    Reglas con var 
        Usar var no es una buena practica para crear variables

        1. var permite declarar otra variable con el mismo nombre
    
    Reglas con const
        Es una buena practica utilzar const cuando queremos que nuestra variable sea fija

        1. const no nos permite declarar una variable sin inicializar

        2. const no nos deja declarar una variable con un nombre de variable ya existente
*/

var nombre = "Diego";
console.log(nombre);

var nombre = "Atzin";
console.log(nombre);

// no se nos permite inicializar variables mas tarde con con la funcion let
// animal;
// animal = "lobo";
// console.log(animal);

// con var la variable debe ser inicializada al momento de la declaracion de la variable
var animal = "Lobo";
console.log(animal);

function saltar(){
    let lobo = "Gris";
}

// La variable lobo es inaccesible en este momento
//console.log(lobo);

// Estado inicial
let encendido = null;
console.log(encendido);

// const no nos permite declarar una variable sin inicializar 

//const perro; 

const perro = "Bruno";
console.log(perro);

// const no nos deja declarar una variable con un nombre de variable ya existente
// const perro = "laicha"

const perro_1 = "Laicha";
console.log(perro_1);

// Ejemplo: cuando usar const y let (no es recomendable usar var)

// const no nos permite cambiar el valor de la variable 

//const fuerzaEnemigo=20;

// debilitamos al enemigo por lo que se reduce su fuerza
// si descomentamos la linea debajo nos marcara error por que la variable fuerzaEnemigo es fija al ser const

//fuerzaEnemigo = 10;

// Esta debe ser creada con let

let fuerzaEnemigo=20;
fuerzaEnemigo=10;
console.log(fuerzaEnemigo);
```

# Objetos 

Un objeto es una agrupacion de datos, estos datos hacen sentidos entre si. los objetos no tienen variables, tienen propiedades ``llave - valor``, los valores de asignan de forma primitiva. Se muestra el siguiente ejemplo de sintaxis al crear un objeto:



```.js
//objeto
const miObjeto = {
    unNumero: 24,
    unString: 'Esta es una cadena de caracteres',
    unaCondicion: true,};
 
console.log(miObjeto);
```

