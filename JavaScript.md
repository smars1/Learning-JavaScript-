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
[Arreglos](https://github.com/smars1/Learning-JavaScript-/blob/main/JavaScript.md#arreglos)
[Operadores matematicos](https://github.com/smars1/Learning-JavaScript-/blob/main/JavaScript.md#incrementos-decrementos-y-operadores-de-asignacion)
[Operadores de comparacion](https://github.com/smars1/Learning-JavaScript-/blob/main/JavaScript.md#operadores-de-comparacion)
[Operadores logicos](https://github.com/smars1/Learning-JavaScript-/blob/main/JavaScript.md#operadores-logicos)
[Control de flujo](https://github.com/smars1/Learning-JavaScript-/blob/main/JavaScript.md#control-de-flujo)
[Estructura if](https://github.com/smars1/Learning-JavaScript-/blob/main/JavaScript.md#estructura-if)
[Estructura while](https://github.com/smars1/Learning-JavaScript-/blob/main/JavaScript.md#estructura-while)
[Estructura switch](https://github.com/smars1/Learning-JavaScript-/blob/main/JavaScript.md#estructuraswitch)
[Estructura for](https://github.com/smars1/Learning-JavaScript-/blob/main/JavaScript.md#estructura-for)
[Funciones JavaScript](https://github.com/smars1/Learning-JavaScript-/blob/main/JavaScript.md#funciones-javascript)
[Callbacks](https://github.com/smars1/Learning-JavaScript-/blob/main/JavaScript.md#callbacks)


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

# Arreglos
El ``array`` puede contener elementos de cualquier tipo  dentro de el . Para agregar elementos a un arreglo podemos usar el metodo ``.push``, (``<nombre del array>.push``)

-Ejemplo: 

Podemos agragar desde numeros, cadenas hasta variables.
```.js
array.push(5);

array.push('Hola');

array.push(Variable);
```

## Listas
La dieferencia entre listas y arrays consiste que para que una array sea considerado lista  todo su contenido debe se del mismo tipo de dato,

- Ejemplo:

Se muestra una lista de numeros.

```.js
const lista = [1,2,3,4,5];
```

la siguiente no es una lista, si no un array dado a que tiene diferentes tipos de datos dentro de ella;

```.js
const array = [1, '2', 'hola', 'mundo'];
```

# Operadores matematicos
JavaScript tambien nos permite usar sintaxis para operaciones matematicas basicas.

- ``Suma``: 
```.js
 const suma =  1  +  2; 
```

- ``Resta`` 
```.js
 const resta =  1  -  2; 
```

- ``Multiplicacion``:
```.js
 const multi =  1  *  2; 
```

- ``Division``: 
```.js
 const division =  1  /  2; 
```

- ``modulo``:
```.js
 const modulo =  9 % 2; 
```

## Incrementos, decrementos y operadores de asignacion
- ``Incremento``:
```.js
let num = 5;
num++;
num++;
```
La salida de este pequeño script deberia terminar con ``num = 7`` debido a que estamos incrementando num 2 veses en pasos de 1.

- ``Decremento``:
```.js
let num = 5;
num--;
num--;
```
La salida de este pequeño script deberia terminar con ``num = 3`` debido a que estamos decrementando num 2 veses en pasos de 1.

- ``Operadores de asignacion``:

Un operador de asignacion sirbe para poder defenir en cuanto queremos incrementar o decrementar una variable. Anteriormente vimos el incremento y decremento estos vienen por defecto en pasos de 1, pero gracias a los operadores de asignacion podemos modificar este valor.

- Ejemplo para incremento:

```.js
let num = 5;
num += 5 ;
num += 5 ;
```
La salida de ``num`` sera de 15 ya que estamos incrementado su valor 2 veces en pasos de 5.

- Ejemplo para decremento:

```.js
let num 20;
num -= 5;
num -=5;
```
La salida de ``num`` sera de 10 ya que estamos decrementando su valor 2 veces en pasos de 5.

# Operadores de comparacion

Los operadores logicos nos ayudan a poder realizar comparaciones entre distintos tipos de datos o elemetos, esto es importante debido a que esto nos ayuda de dirigir el flujo de nuestro codigo.



## Igualdad estricta y no estricta

La igualdad estricta nos permite compar  tipos de datos similares un ``number`` con un ``number``, un ``string`` con un ``string``, su simbolo esta dado por ``===`` mientras que la igualdad no estricta nos permite comparar si el valor de un dato es igual o no sin importar el tipo de dato con el que se compara de puede comparar si un dato ``number`` es igual a un dato ``string`` por ejemplo. El simbolo del la igualdad no estricta esta dado por ``==``. Los operadores logicos devuelven un valor booleano ``true`` o ``false`` dependiendo si se cumple o no lo que se esta comparando.

- Igualdad estricta:
```.js
const resultado = 5 === 5;
```
Devuelve un ``true``

- Igualdad no estricta:
Comparamos un number ocn un string.
```.js
const resultado = 5 == `5`;
```
Devuelve un ``true`` debido a que la igualdad no estricta lo permite a diferencua de la estricta la cual devolveria un false.

## Desigualdades
Las desigualdades se tratan de manera similar que las igualdade, tenemos desigualdad estricta y no estricta.

- Desigualdad estricta:
```.js
const resultado = 5 !== 4;
```
Devuelve un ``true`` ya que 5 es diferente de 4

- Desigualdad no estricta:
```.js
const resultado = 5 != '5';
```
Devuelve un ``false`` debido a que la desigualdad no estricta toma  que `5` es igual  a `5` ya que la sintaxis de esta lo permite, a defirencia del modo estricto que regresaria un ``true`` al estos ser difentes tipos de dato.

## Menor, mayor que ``<, >, =<, =>``

JavaScript nos permite comparar si el valor de una variable es menor o mayor a otro valor diferente.

## Menor que
Comparamos si ``valor`` es menor que 6.
```.js
const valor = 5 < 6;
```
Se retorna un ``true`` debido a que 5 es menor a 6

### Menor igual que
Comparamos si ``valor`` es menor que 6.
```.js
const valor = 5  =< 5;
```
Se retorna un ``true`` debido a que 5 es igual o menor 5

### Mayor que
Comparamos si ``valor`` es mayor que 4
```.js
const valor = 5 > 4;
```
Se retorna un ``true`` debido a que 5 es mayor a 4

### Mayor igual que
Comparamos si ``valor`` es mayor o igual que 5
```.js
const valor = 5  => 5;
```
Se retorna un ``true`` debido a que 5 es igual o mayor que 5.

# Operadores logicos 
JavaScript posee  3 operadores logicos:

![image](https://user-images.githubusercontent.com/42829215/187148366-24dcd7ce-c25e-4c33-91c4-8473acf63386.png)

## OR
El operaror or evaluada el primer valor que retorne  un ``true``. La unica forma de que el resultado de ``or`` sea  ``false`` es que todos sus valores sean ``false``
```.js
const resultado = false || true
const resultado = false || false || false || false || true
```

##  AND
And va funcionar de forma similar a or, pero and lo que hara sera buscar el primer false,  por lo que si queremos que and nos arroje un valor booleano ``true`` todos nuestos valores deberan ser true.
```.js
const resultado = true && true
```
Regresa un ``true``.

## NOT
Not lo que hace es negar la salida que se tiene y la cambia por el valor contrario.
```.js
const resultado =  !false
```
Regresa un ``true`` debido a que la salida ``false`` es negada por ``!``.


# Control de flujo

El control de flujo nos permite realizar iteraciones o evaluar condiciones, podemos evaluar una condicion en caso de que tenga un valor true o false con el fin de seguir cierta logica.

# Estructura if

Estructura de if en JavaScript
```.js
if (true){
console.log('Estoy dentro de un if')
}
```

``if`` no solo recibe valores booleano, si no que puede recibir comparaciones como por ejemplo:
```.js
edad = 15;
if(edad => 5 && edad =< 18){
console.log('El niño puede jugar');
}
else {
console.log('El niño puede jugar');
}
```

# Estructura while
El ``while`` permite crear un bucle el cual se seguira repetiendo hasta que una condicion de ya no se cumpla.


Estructuctura while:
```.js
let x = 0 ;
while (x =<5 ){
console.log(x);
x++;
}
```
El bucle se repetira hasta que x sea mayor igual a 5.

Debemos tener cuidado tambien de no dejar un bucle infinito al olvidar finalizar la condicion inicial.

```.js
let x = true;
while (x){
console.log(x);
x = false;
}
```
Por ejemplo si olvidamos cambiar el valor de ``x`` a ``false`` el bucle while seguiria repitiendose de forma infinita, esto es con lo que hay que tener cuidado al usar while.

# Estructura switch 

El ``switch`` nos permitira crear un menu de flujo de intrucciones por medio de ``case`` y un valor pode ``default`` en caso de que no se encuentre la opcion en el menu de flujo.

Estructura de switch

```.js

let x= 1;

switch(x){

                case 1:{
                console.log('Yo soy el caso 1');
                break;
                }
                case 2:{
                console.log('Yo soy el caso 2');
                break;
                }
                case 3:{
                console.log('Yo soy el caso 3');
                break;
                }
                default:
                console.log('No se encuentra este caso');
                break;
}
```

# Estructura for

La instruccion for es algo similar a while puesto que nos permitira crear un bucle hasta que se cumpla cierta condicion. La estructura del ``for`` necesitara un valor inicial, una condicion inicial, y una instruccion que se realize en cada repeticion del loop.

Estructura de ``for``:
```.js
for (let i = 0; 1<10; i++){
      console.log(i);
}
```
La instruccion ``for`` es bastante util cuando nosostros recien estamos comenzando a desarrollar ya que podra permitirnos iterar sobre nuestros arreglos.

## Accediendo a los elementos de un arreglo mediante for

Todos los arreglos que definimos en JavaScript tienen la propiedad de ``length`` esta propiedad nos permite regresar el tamaño de un arreglo. 

Estructura accendiendo a los elemenos de un arreglo mendiante for y ``length`` :

```.js 

const numeros = [1, 2, ,3 ,  'hola', 5];

for (let i = 0; i < numeros.length; i++){

      console.log(numeros[i]);

}

```

# Funciones JavaScript

Podemos crear lineas de codigo las cuales realizen una tarea en especifico y podamos llamarlas cada vez que sea necesario con el fin de reutilizar y simplificar codigo.



Estructura de una funcion:

```.js
function iterar (arg1){   

     for (let i = 0; i < arg1.length; i++){       

           console.log(arg1[i]); 

     }

}

const numeros = [1, 2, 3 ,  'hola', 5];
const nombres = ['diego', 'atzin',  'daniel',  'enrique', 'max', 'alex'];

// llamamos a nuestra funcion
iterar(numeros);
iterar(nombres);
```

Una funcion necesitara de un ``return`` para poder regresar un valor definido de no ser asi regresara un valor ``undefined``  cuando queremos reutilzar la funcion.

Ejemplo.
```.js
function suma (a,b){
        return a + b;
}

resultadosuma1 = suma(1, 2);
resultadosuma2 = suma(5, 6);

resultadosuma3 = suma(resultadosuma1, resultadosuma2);
console.log('El resultado es: ',resultadosuma3);
```

# Callbacks
Un callback es una funcion que se va ejecutar al final de una funcion.

Ejemplo:
```.js
function sumar (a, b, cb){
       const r = a + b;
       // cb es el callback
       cb(r);
}

function callback(result){
       console.log('resultado: ', result);
}
sumar(2, 3 , callback);
```
Cuando pasamos el tercer valor lo asignamos a la funcion callback, nota no lo estamos ejecutando  le estamos asignando valor de referencia para que luego pase a ejecutarse en el ``cd(r)`` , esto lo que permite es que podamos pasar la funciones como argumentos en otras funciones con el fin de poder reutilzar nuestro codigo.
