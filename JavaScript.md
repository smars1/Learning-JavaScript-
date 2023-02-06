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
[Fat Arrow Function](https://github.com/smars1/Learning-JavaScript-/blob/main/JavaScript.md#fat-arrow-function)
[Function anonimas](https://github.com/smars1/Learning-JavaScript-/blob/main/JavaScript.md#function-anonima)
[``try``, ``catch``]()
[Intro a Dom](https://github.com/smars1/Learning-JavaScript-/blob/main/JavaScript.md#dom-javascript)
[NodeJS: Intro a API Rest](https://github.com/smars1/Learning-JavaScript-/blob/main/JavaScript.md#nodejs)
[Intro a MongoDB](https://github.com/smars1/Learning-JavaScript-/blob/main/JavaScript.md#intro-a-mongodb)
[Angular](https://github.com/smars1/Learning-JavaScript-/blob/main/JavaScript.md#angular)

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
## Metodos para arrays

### Math.min()
El metodo ``math.min`` toma como argumento un array y devuelve el de menor valor

```.js
const arr = [34,2,3,4,5];  
console.log(Math.min(...arr));
//output: 2
```
### Math.max()
El metodo ``math.max`` toma como argumento un array y devuelve el de mayor valor

```.js
const arr = [34,2,3,4,5];  
console.log(Math.min(...arr));
//output: 34
```

## Metodo join()
El metodo ``join()`` convierte todos lo elementos de un array en una cadena y devuelve esta cadena
```.js
const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join(''));
// expected output: "FireAirWater"

console.log(elements.join('-'));
// expected output: "Fire-Air-Water"

```


## Metodo split()
El metodo ``split()`` divide un objeto de tipo string en un array de cadenas mediante la se paracion de cadenas o subcadenas

```.js
let argStr = "hola mundo entero";

// convertimos el str en array cada espacio en el string determina un elemento mas al array
let A = argStr.split(' ') // <-- con el split indicamos que cada espacio determina la separacion para cada elemento
console.log(A);
//output: [ 'hola', 'mundo', 'entero' ]

// volvemos hacer cadena a nuestro argumento determinamos
console.log(A.join('-')); // con join tambien podemos seleccionar si queermos algun espacio o simbolo
                          // entre cada elemento que se convertira en cadena en este caso es un '-' entre elemento
                          // esto significa que separamos con un -  cada elemento al volverlo array
//output: hola-mundo-entero
```
## Manipulando una cadena con metodo split()
Podemos usar ``split`` tambien para limpiar datos de una cadena ya que este metodo nos permite dividir las cadenas, se puede ver en el siguiente ejemplo como podemos limpiar datos de una cadena de tal manera que solo devolvamos la ruta,

### Ejemplo:
En el siguiente ejercicio se deve devolver solo el valor del path debido a que con este valor daremos acceso a nuestro endpoint en nuestra api

```.js
// se recibe:
let argjson = ['IdClient: dsadaf','Name: Atzin', 'Route: node3.: path/dsad'];

console.log(argjson[2]);
//output: Route: node3.: path/dsad

console.log(argjson[2].split('/'));
//output:[ 'Route: node3.: path', 'dsad' ]

console.log(argjson[2].split('/')[1]);
//output: dsad

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

# Fat arrow function
Tienen 2 principales benificios a diferencia de function, no se tiene que usar la palabra reservada ``function`` para declarar una funcion, si la funcion solo tiene una sola linea, no se necesitara la palabra reservada ``return`` se llaman ``fat arrow function`` por que se definen con un ``=>``.

Estructura de una  ``fat arrow function`` de una sola linea:
```.js
// definimos la arrow function:
const miFatArrowFucntion = (a, b) => a + b;

// Le damos como parametros el valor 1 y 2 a la arrow function:
const r = miFatArrowFucntion(1, 2);
console.log(r);
``` 
Como se puede ver no es necesario agregar un ``return`` cuando la function es de una solo linea de codigo.


Estructura de una  ``fat arrow function`` mas de una linea de codigo:
```.js
const miFatArrowFucntion = (a, b) => a + b {
          return a + b;
}
// pasamos para parametros a nuestra fat arrow function:
const r = miFatArrowFucntion(1, 2);
console.log(r);
``` 


# Function anonima
Una funcion anonima es una funcion que no tiene  ningun nombre, por lo genereal la utilzamos en un contexto, donde nuestra funcion anonima va a ser utilzada por otra funcion, como por ejemplo con un ``callback``. una funcion anonima se utilza cuando no vamos a utilizar la logica de esta parte de codigo ya que una funcion anonima no nos permite reutilzar codigo, pero si nos permite se mas implicitos.


Ejemplo de funcion anonima:
```.js
// Utilzamos una function anonima con un callback
function sumar (a, b cb){
          const r = a + b ;
          cb(r);
}

// funcion anonima
sumar (2, 3, function (r) {
          console.log('Soy una funcion anonima y el resultado es :', r);
})
```

# ``try``, ``catch``

## Estructura ``try catch``
```.js
try{
 
    } catch (err) {
 
    }
```    
Lo que ``try`` va hacer es que va intentar realizar una instruccion que contenga dentro de las llaves de ``try{ }``, si la instruccion se ejecuta con exito  no pasara nada pero si esta llegara a fallar por cualquier cosa, problemas de conexion, un dato no valido o algo que se nos olvido, ``catch (err){ }`` captudara el error, y se ejecutara la porcion de codigo que contenga entre sus llaves ``{ }``, es como un ``if else`` pero este nos permite capturar un error sin parar el codigo, lo que nos permite seguir con el codigo en funcionamiento.





# Dom JavaScript

El ``dom`` se refiere al todo el arbol de html que nosotros vamos a tener dentro de una pagina web una vez que nosotros la hayamos construido. El dom es un estandar de como nosotros podemos, ver, agregar, cambiar, o eleminar elementos html de nuestra aplicacion web.

## Glosario

| Glosary |
|------------|
[Agregando JS a html](https://github.com/smars1/Learning-JavaScript-/blob/main/JavaScript.md#agregando-js-a-html)
[getElementByld y window.onload](https://github.com/smars1/Learning-JavaScript-/blob/main/JavaScript.md#getelementbyld-y-windowonload)
[Manipular text metodo .innertext](https://github.com/smars1/Learning-JavaScript-/blob/main/JavaScript.md#manipular-texto-propiedad-innertext)
[Agregando Elementos HTML a otro elemento HTML metodo .innerHTML](https://github.com/smars1/Learning-JavaScript-/blob/main/JavaScript.md#agregando-elementos-html-a-otro-elemento-html-propiedad-innerhtml)
[Agregando elementos a un array con ``.map``](https://github.com/smars1/Learning-JavaScript-/blob/main/JavaScript.md#agregando-elemntos-a-un-array-con-map)
[Eliminando elementos de un array con ``.splice()``](https://github.com/smars1/Learning-JavaScript-/blob/main/JavaScript.md#eliminando-elementos-de-un-array-con-splice)
[Buscar elementos y agregar eventos al seleccionarlos](https://github.com/smars1/Learning-JavaScript-/blob/main/JavaScript.md#buscar-elementos-y-agregar-eventos-al-seleccionarlos)
[Persistencia de datos  ``localStorage``](https://github.com/smars1/Learning-JavaScript-/blob/main/JavaScript.md#persistencia-de-datos-localstorage)
[Spread Operator](https://github.com/smars1/Learning-JavaScript-/blob/main/JavaScript.md#spread-operator)

## Agregando JS a html
El tag ``script`` nos permite ejecutar codigo JavaScript en html, tambien nos permite mandar a llamar codigo ``JS`` desde un archivo ``.js``.

Ejemplo:
```.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Intro a DOM</title>
</head>
<body>
    <p>Intro a DOM</p>
</body>
<!-- etiqueta para desarrollar codigo .JS en html -->
<script>
    alert('Intro a DOM');
    console.log('Intro a ')
</script>

<!-- Importamos codigo desde una archivo .js -->
<script src="main.js"></script>
</html>
```
Es importante colocar los tags ``script`` despues del body del html para asegurar que el codigo html cargue primero y luego cargue el codigo ``JS``.

## getElementByld y window.onload

La funcion  ``getElementById (`< Class ID from html>`)  `` nos permite acceder a una etiqueta de un archivo ``html`` mediante la su ``id clase`` desde un archivo ``.js``

Estructura:

HTML

Creamos el ``id = "text"`` .

```.html 
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Intro a DOM</title>
</head>
<body>
    <p id="text">Intro a DOM</p>
</body>
<script src="main.js"></script>
</html>
```

JS
```.js
const parrafo = document.getElementById('text');

// imprime todo el tag p incluyendo el codigo html
console.log(parrafo); 

// el metodo .innerHTML omite el codigo html e imprime solo el contenido en la cosola
console.log(parrafo.innerHTML);

// el metodo .innerText omite el codigo html e imprime solo el contenido en la cosola
console.log(parrafo.innerText);
```
![image](https://user-images.githubusercontent.com/42829215/188554736-9304e851-4f62-4fd7-ba50-7add5519b6d8.png)

Los metodos ``.innerHTML`` e ``.innerText`` nos permiten acceder solo al contenido del tag del html, omitiendo el codigo del tag, solo imprimen el contenido sin codigo html como se muestra en la figura las tres salidas.

## Window.onload

La funcion ``window.oload`` nos permite hacer esperar la ejecucion de nuestro codigo JavaScript, para que este se ejecute hasta que nuestro codigo html haya terminado de cargar, esto puede prevenir varios problemas de ejecucion, incluso puede permitirnos colocar tags de ``script`` arriba del cuerpo del html o en cual quier otra parte, ojo no es una buena practica pero esto lo permite. Podemos usar la funcion ``window.onload`` como una medida de prevencion de errores de ejecucion.

Estructura 
Podemos crear una fat arrow y agregarlo como una funcion, ejemplo:
```.js
window.onload = () => {
    const parrafo = document.getElementById('text');

    // imprime todo el tag p incluyendo el codigo html
    console.log(parrafo); 

    // el metodo .innerHTML omite el codigo html e imprime solo el contenido en la cosola
    console.log(parrafo.innerHTML);

    // el metodo .innerText omite el codigo html e imprime solo el contenido en la cosola
    console.log(parrafo.innerText);
}
```
Esta plantilla se comprende con la plantilla de html anterior ya que el codigo de js anterior solo se conloco dentro del fat arrow del metodo ``window.onload``.

## Manipular texto, propiedad .innertext
La propiedad ``.innertext`` tambien nos permite actualizar el contenido interior de un tag de html.



Estructura:

HTML

```.html

<!DOCTYPE html>
<html lang="en">
<head>
    <title>Intro a DOM</title>
</head>
<body>
    <p id="text">Intro a DOM</p>
</body>
<script src="main.js"></script>
</html>
```

JS 

```js

window.onload = () => {
    //Guardamos el constenido del tag id text en una variable
    const parrafo = document.getElementById('text');
 
    //Actualizamos el valor de parrafo
    parrafo.innerText = "Parrafo actualizado";
}
```
### salida:
![image](https://user-images.githubusercontent.com/42829215/188559197-5c5f1625-57c6-4817-8408-cac448eb2e35.png)

## Agregando Elementos HTML a otro elemento HTML, propiedad .innerHTML

La propiedad ``.innerHTML`` nos permite agregar mas codigo HTML desde un java script

Estructura:

HTML

```.html

<!DOCTYPE html>
<html lang="en">
<head>
    <title>Intro a DOM</title>
</head>
<body>
    <p id="text">Intro a DOM</p>
</body>
<script src="main.js"></script>
</html>
```

JS 
```.js
window.onload = () => {
    //Guardamos el constenido del tag id text en una variable
    const parrafo = document.getElementById('text');

    //Actualizamos Agregamos 2 elemtos tipo lista desde JS a HTML
    parrafo.innerHTML = '<li>element 1</li><li>element 2</li>';
}
```
### Salida: 
![image](https://user-images.githubusercontent.com/42829215/188562056-5c62bdeb-3270-4235-8c68-7cbd15c75716.png)

# Agregando elemntos a un array con ``.map``
El metodo ``.map`` nos permite iterar nuestros arreglos sin necesidad de que nosostros le vayamos indicando los indices o las operaciones que tengamos que realizar. Esto nos permitira poder simplificar todo el bucle ``for`` por una sola linea de codigo y poder hacer lo mismo

Estructura de ``.map``
```.js
const todosTemplate = todos.map(t => {
return <li> + t +</li>;
})
```
Lo que hace nuestra funcion ``todos.map``  es hacer que ``t`` retorne un elemento tipo``<li></li>``


tambien podemos simplificarlo a una sola linea ejemplo:
```.js
const todosTemplate = todos.map(t => <li> + t +</li>);
```
Podemos ver la funcion como, a todos los elementos ``t`` concatenalos al principio y al final con ``<li>`` y ``</li>`` lo que nos permitira ir creando un listado de elementos.

Sin embargo para poder colocar el listado dentro de nuestro HTML deberemos usar la funcion ``join()`` debido a que nosostros no podemos colocar un arreglo dentro de nuestro HTML, ``join()`` lo que nos permitira hacer es juntar todos los elementos de un arreglo con una instrucion dada.

Por ejemplo podemos decirle que nos junte todos los elementos de un arreglo en un ``string`` vacio

Ejemplo:
```.js
const todosTemplate = todos.map(t => <li> + t + </li>);
todosList.innerHTML = todosTemplate.join(''); 
```
``todoList`` es la variable que hace referencia al id tag que se esta manejando.

# Eliminando elementos de un array con ``.splice()``
Haci como podemos añadir elementos de lista a HMTL tambien podemos eliminarlos, mendian la funcion ``.splice()``. Esta funcion pide como paramentros los valores de rango a eliminar, el primer argumento o parametro que pide es la posicion del elemento y el segundo valor es la cantidad de elementos a eleminar.

Ejemplo de codigo
```.js
const arr = [1, 2, 3, 4];
arr.splice(0, 1):
```
Se puede ver como, para arr elimina el solo 1 elemento de la posicion 0.

## Salida
![image](https://user-images.githubusercontent.com/42829215/189268635-2021ff28-096d-4b00-b245-ba0ab35e59b9.png)

# Buscar elementos y agregar eventos al seleccionarlos
| Glosary |
|------------|
[Function ``.querySelectorAll``](https://github.com/smars1/Learning-JavaScript-/blob/main/JavaScript.md#function-queryselectorall)
[Conversion de un listado a array](https://github.com/smars1/Learning-JavaScript-/blob/main/JavaScript.md#conversion-de-un-listado-a-array)
[Metodo ``.addEventListener`` ](https://github.com/smars1/Learning-JavaScript-/blob/main/JavaScript.md#metodo-addeventlistener)

## Function ``.querySelectorAll``

La funcion ``.querySelectorAll`` nos permite buscar nuestros elementos que se encuentran en nuestros listados y asignarles una funcon que sera ejecutada cuando nosotros le hagamos click a nuestros elementos. Esta funcion nos permitira ir a buscar por ID, Class, tag, siempre comenzando con un ``#`` antes del nombre del valor id, class o tag.

Estructura de ``.querySelectorAll``:
podemos llamar un elemento tag de HMTL por su ``Id`` por ejemplo 
```.js
const todoList = document.querySelectorAll('#MyID');
```
## Conversion de un listado a array

Podemos tambien convertir un listado HTML en un ``array`` para poder manipularlo en ``JS`` esto lo podemos hacer con la funcion ``array.from(todoList);`` esto lo podemos visualizar mejor en un ejemplo de codigo.

Ejemplo: 
```.js
// llamamos todo lo que esta en el tag con id = "todo-list"
const todoList = document.querySelectorAll('#todo-list');
// convertimos en arreglo nuestro listado
Array.from(todoList);

const elementos = document.querySelectorAll('#todo-list li'); 
elementos ;
```
![image](https://user-images.githubusercontent.com/42829215/189273098-03d5e608-4ba6-4792-b036-121091eb8a18.png)

Ahora podemo manipular este arreglo de una manera menos compleja, utilizando forEach o math o algun otra herramienta que nos permita manipular estos elementos.

Ejemplo con ``forEach``:
¿Cómo funciona el ciclo forEach?
El bucle foreach es un tipo especial de bucle que permite recorrer estructuras que contienen varios elementos (como matrices, recursos u objetos) sin necesidad de preocuparse por el número de elementos.

```.js
elementos.forEach(x => console.log(x));
```
A esta estructura le podemos asignar una funcion para poder agregar eventos a los siguientes listados que se pueden observar en la salida.
### Salida
![image](https://user-images.githubusercontent.com/42829215/189273870-86fe3d22-48a7-4003-99b0-1bdf4cd836af.png)

## Metodo ``.addEventListener`` 
Podemos tambien agregar el metodo ``.addEventListener`` para agregar un evento al hacer click en un elemento:

Estructura: 
```.js
const elementos = document.querySelectorAll('#todo-list li');
    elementos.forEach((elementos, i) => {
            elementos.addEventListener('click', () => {
                console.log(elementos, i);
            });
        });
```
``forEach()`` ejecuta la función callback una vez por cada elemento del array; a diferencia de map() o reduce() este siempre devuelve el valor undefined y no es encadenable.

# Persistencia de datos ``localStorage``

``.localStorage`` Guarda información que permanecerá almacenada por tiempo indefinido; sin importar que el navegador se cierre.

- Permiten almacenar entre 5MB y 10MB de información; incluyendo texto y multimedia
- La información está almacenada en la computadora del cliente y NO es enviada en cada petición del servidor, a diferencia de las cookies
- Utilizan un número mínimo de peticiones al servidor para reducir el tráfico de la red
- Previenen pérdidas de información cuando se desconecta de la red
- La información es guardada por domino web (incluye todas las páginas del dominio)

# Estructura

``localStorage`` recibe como argumento un string y el segundo tambien debe ser un string, esto se puede ver como elementos ``clave : valor``

```.js
// Guardamos el elemento con su clave y valor
localStorage.setItem('clave', 'valor');
// Llamos el elemento 
localStorage.getItem(clave);
```

# Spread operator
El Spread Operator corresponde a un operador el cuál distribuye los elementos de un arreglo u objeto, para asignarlos a alguna variable/constante/función.

Su sintáxis de uso es la siguiente:

```.js 
a = [1,2];
b = [ ...a ];
c = [ ...a, 3];

console.log(b);
// output = b = [1,2]
console.log(c);
// output = b = [1, 2, 3]

```
Otro ejemplo de spread operator

```.js
const o1 = {
    a1: 'valor1',
    a2: 'valor2',
}
const o2 = {
    a3: 0,
    ...o1,
}
console.log(o1) // {a1: 'valor1', a2: 'valor'2}
console.log(o2) // {a3: 0, a1: 'valor1', a2:'valor2'}
const l1 = [1,2,3]
const l2 = [...l1, 4, 5]
console.log(l1) // [1,2,3]
console.log(l2) // [1,2,3,4,5]
```

# Promesas 
| Glosary |
|-------|
[Ejemplo promesas](https://es.javascript.info/promise-basics)
[``resolve`` and ``then``]()
[``reject`` and ``catch`` ]()
[``new`` Promise]()

## resolve and then 
Se tiene promise, resolve y the, ``promise`` es un valor que se va resolver con ``resolve`` en algun momento, mientras que ``then`` resibira el valor de la promesa ya resuelto. 

## Ejemplo
```.js
Promise.resolve(2)
	.then( valor => console.log(valor))
```
Si bien ``Promise`` recibe un valor 2 y se le pasa el metodo ``resolve`` este no resolvera el Promise al momento si no al siguiente ciclo de ejecucion, para posterior mente pasar el ``Promise`` resuelto al ``then``. Podemos crear un nuevo metodo de ``then`` para retornar una promesa, se puede hacer esto de manera indefinida hasta dejar de escribir el ``.then``.
## Ejemplo
```.js
Promise.resolve(2)
	.then( valor => console.log(valor))
	// OUT: 2
	.then( valor => console.log(valor + 1))
	//OUT: 3
```
## reject and catch

 


# NodeJS 
| Glosary |
|---------|
[Intro:  Que es una API rest? ](https://github.com/smars1/Learning-JavaScript-/blob/main/JavaScript.md#intro--que-es-una-api-rest)
[Inicializando una API Rest](https://github.com/smars1/Learning-JavaScript-/blob/main/JavaScript.md#inicializando-una-api-rest)
[Creando una API](https://github.com/smars1/Learning-JavaScript-/blob/main/JavaScript.md#creando--un-api)
[Agregando endpoint POST](https://github.com/smars1/Learning-JavaScript-/blob/main/JavaScript.md#agregando-endpoint-post)
[Formas de Conectarse](https://github.com/smars1/Learning-JavaScript-/blob/main/JavaScript.md#formas-de-conectarse)
[Middlewares en express](https://github.com/smars1/Learning-JavaScript-/blob/main/JavaScript.md#middlewares-en-express)
[Middleware para manejo de errores]()

## Intro:  Que es una API rest?

Antes de construir una API rest deberemos tener en cuenta los siguientes conceptos para poder compprender el como se ira consumiendo nuestra API Rest.

- Cliente : es quien va consumir nuestra api rest (telefono, PC, dispositivo etc )
- Base de datos: Herramienta de almancenamiento de datos .
- API Rest: Aplicacion que  puede comunicarse con disitintos dispositivos, entregando a estos dispositivos distintos datos esta puede estar contenida en un servidor o nube, la api rest necesita una herramienta de almacenamiento a lo que le llamamos base de datos, como mongoDB por ejemplo.

El funcionamiento de una api rest puede verse de la siguiente manera

El cliente se conecta a nuestra API REST, la API REST ira a nuestra base de datos a buscar los datos de nuestro cliente en especifico y nuestra base de datos se los va a devolver a nuestra API REST y finalmente nuestra API REST  los va devolver al cliente.

para poder conectarse a una API REST existen formas estandar para hacerlo,:

## Inicializando una API Rest

***Nota: npm es node package module, npm nos permitira gestionar dependencias en nuestros proyectos de node***

Primeramente deberemos crear una ruta, direccion o carperta donde alojaremos la API rest, una vez creada esta carpeta con ``mkdir <filename>`` nos dirigimos a la carpeta y dentro de esta, si ya tienes Node y npm, y deseas comenzar a construir tu proyecto, ejecuta el comando ``npm init`` . Esto activará la inicialización de tu proyecto. Este comando funciona como una herramienta para crear el archivo ``package. json`` de un proyecto. ``package. json`` contendra un archivo .JSON con datos de nombre, version, scripts, keywords, licencias etc.

```.node.js
npm init
```

###  Contenido del archivo ``package. json``
```.json
diego@DESKTOP-N53A4LS MINGW64 ~/Desktop/workspace_js/api
$ cat package.json
{
  "name": "api",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "Diego_Atzin_Pineda_Cota",
  "license": "ISC",
  "dependencies": {
    "express": "^4.18.1"
  }
}
```

Despues de inicializar con ``npm init`` instalaremos una dependencia llamada express para comenzar a trabajar.
```.node.js
npm install -S express
```
La opcion ``-S``  (save) nos guarda dentro de nuestro archivo de package.json

Una Vez instalada podremos ver un nuevo archivo llamado ``package-lock.json`` este archivo contiene un formato json con historial de todas las dependecias que se instalaron en nuestro proyecto, de este modo podremos saber que version de ``express`` se instalo por ejemplo, tambien ademas de express se instalaran otras dependencias que express necesita, donde en este mismo historial tambien se pueden visualizar estas otras dependencias y sus versiones. El archivo de ``package-lock.json`` es muy importante ya que contiene todo el historial de las dependencias y versiones de nuestro proyecto, por lo que si nosotros queremos volver a instalar todas las dependencias de nuestro proyecto, podremos instalar las mismas dependencias con su misma version en lugar de las mismas dependencias en su ultima version, esto siempre y cuando hayamos creado un archivo ``package-lock.json``. Esto es muy recurrente en un ambiente laboral ya que no queremos que nuestras depencias se esten actualizando de forma automatica.

## Creando  un API
Para crear nuestra API comenzaremos con la siguiente linea de codigo:
```.js
const express = require('express');
```
- ``const express`` se refiere a la asignacion del framework de ``express``.
- ``require('')`` nos permite importar dependencias de terceros que nosotros instalemos.
- El String ``('express')``  es el nombre de la dependencia.
  
``const express`` puede pareser una constante pero en verdad es una funcion que nos va devolver una aplicacion. Lo siguiente que necesitamos hacer es ejecutar nuestra funcion de ``express``, para esto continuamos creando una constante que se llame app de la aplicacion que estamos creando, y esta se va crear a partir de la ejecucion de la funcion de ``express`` y le indicamos el puerto donde queremos que esta se ejecute. ahora escribimos ``app.get()`` en el get le daremos el string que le indicara la ruta a ``express`` cual es la ruta del navegador que tenemos que escribir para que se ejecute la funcion que le vamos a pasar a esta misma funcion como segundo argumento, osea en este caso la raiz ``('/', (req, res) =>{ } )`` ``request = req`` forma estandar para este arg, aqui viene todoa la peticion de un cliente , ``re.send = res`` aqui nos servra para enviar datos al usuario.

```.js
const express = require('express');
// new code
const app = express();
const port = 3000;

app.get('/', (req, res) =>{
    rest.status(200).send('chanchito feliz')} )

app.listen(port, () => {
console.log('Arrancando la APP!!')})
```
``status`` permite a nosotros indicarle al cliente si es que nuestra respuesta tubo exito y si es que esta estubo acompañada con algun dato de esta.
deberemos llamar a ``app.listen()`` a la cual le deberemos pasar como argumento el puerto de ejecucion y una funcion, la cual se ejecutara cuando nuestra aplicacion se encuentre corriendo con exito. Guardamos nuestra app y la ejecutamos.
```.node.js
node api.js
```
### SALIDA 
#### Vista en git
![image](https://user-images.githubusercontent.com/42829215/191431055-b7013dc9-9db2-4359-8bd2-2fd7833bcdce.png)
#### Vista en navegador localhost:3000
![image](https://user-images.githubusercontent.com/42829215/191432134-fd913146-266c-4149-ba78-f6fdcd531101.png)

# Agregando endpoint POST

Un endpoint es una ruta a la cual puedes llegar, ya sea por una peticion realizada por una app web o mobil.
El primer metodo que usamos fue ``get``, este nos permite ingresar a la ruta por medio del explorador web, pero secincllamente escribiendo la ruto en el explorador.
El metodo de ``post`` no permite acceder directamente a la ruta atra vez del navegador web, tendremos que uitlizar otra herramienta como postman o nuestra terminal''

### Ejemplo
```.js
app.post('/', (req, res) => {
	res.status(201).send('creando chanchito');
})

```
## paramentros de ``status()``

- ``status(200)``:  devuelve un ok  y ademas devuelve datos a nuestro cliente, un arreglo un objeto, string o cualquier otra cosa.

- ``status(201)``: devuelve un ok y esto significa creado y no es necesario devolverle datos al cliente, algunos developers devuelven el ID de lo que se a creado.

-``status(204)``: Devuelve ok, pero tambien signfica no countent, el cual es mas especifico y no devuelve nada. Usaremos ``status(204)`` para ``put``, ``path``, ``delete``.  



## Formas de conectarse:

Verbos :

- GET / users - /users/:id
    - GET ``users`` llama un array de usuarios ``[]`` pero si usamos  ``- /users/:id`` llama al usuario especifico como un objeto ``{}``

- POST /users
    - Crear users 

- PUT /users/:id
    - La petición HTTP PUT crea un nuevo elemento o reemplaza una representación del elemento de destino con los datos de la petición. Remplazar users, podemos utilizarlo para actualizar al igual que path. 
    - Si el elemento de destino no existe y la petición PUT lo crea de forma satisfactoria, entonces el servidor debe informar al usuario enviando una respuesta ``201`` (Created) .

- PATH / users/:id
    - Actualiza path 

- DELETE / users/:id
    - Borra un user 


# Middlewares en express
Los middlewares los hemos estado viendo en el transcurso del curso, los hemos utilizado pero no sabemos como funcionan estos por debajo. Por lo que veremos su funcionamiento con un pequeño ejemplo.

Creamos un nuevo endpoint que reciba (req, res) pero le agregamos un tercer argumento que tambien fuese una funcion con estas mismas caracteristicas de recibir (req, res) y adema un tercer argumento el cual llamaremos next, si llamamos a {next ()}, esta se ejecutara como tercer argumento.

```.js
// middleware en express , se ejecutan de izquierda a derecha
app.get('/lele', (req, res, next) => {next()}, (req, res, next) => {
    console.log('lala');
    res.send('ok');
})
```
Esta funcion devolvera un console.log('lala') y  res.send('ok');  al momento de hacer la peticion, podemos ver esto al correr la aplicacion y probar  hacer una peticion en postman.

![image](https://user-images.githubusercontent.com/42829215/198118024-9b408e46-0e60-4191-b956-853ad889568b.png)

Tambien se observa el console.log 

![image](https://user-images.githubusercontent.com/42829215/198118195-8f5b5afa-ce65-4276-addf-cf751bb2cc81.png)

Podemos agregar tantos middleware como queramos y estos se ejecutaran, siempre y cuando llamemos a la funcion de next. 
Ahora que es lo que pasaria si nosotros le agramos a nuestro objeto de request un objeto que contenga la propiedad de {id: 'lele'}

Otros ejemplos

// middleware en express , se ejecutan de izquierda a derecha
```.js
app.get('/lele2', (req, res, next) => {/*Write yo code here, remember call the function next in the end*/}, (req, res, next) => {
    console.log('lala');
    res.send('ok');
})
```

```.js
app.get('/lele2', (req, res, next) => {
    req.user = {id: 'lele'}
    next();
},
(req, res, next) =>{
    console.log('lala', req.user);
    res.send('ok');
})
```

# Middleware para manejo de errores en express

Cuando ocurre un error dentro de nuestro codigo este va hacer imediatamente captudaro por express y este tendra una forma estandar para manejar estos errores, o bien tambien podriamos nosotros hacer otra cosa como enviarle una web HTML que se encuentre bonita y que tambien tenga, por ejemplo error 500 algo ocurrio, te extraño, aqui veremos algo pararesido a eso, sin llegar a la parte de implementar el HMTL,  pero si se vera como podemos interceptarlo.

## Estructura js

``throw new Error('nuevo error');`` nos permite crear un error ficticio por asi decirlo 

```.js
// Haciendo uso de middleware 
app.get('/lele', isAuthenticated, (req, res) => {
    // arrojamos un error de manera ficticia
    throw new Error('nuevo error');
    res.send(req.user);
});

// aplicacion de escucha, le pasamos puerto
app.listen(3000, () => {
    console.log('listening in port 3000');
});
```
## Testeando en proyecto autentificacion y login 
![image](https://user-images.githubusercontent.com/42829215/200691997-f6b347c3-1f53-4a13-86e6-91d6a68c9a03.png)

Como se puede ver entra directamente el error que creamos.
Esto nosotros podriamos querer cambiarlo, a si que iremos hacerlo, y la forma en la que podemos manejar errores es que nosotros hagamos uso de ``app.use((err, req, res, next)) =>{}`` en este caso este middleware va recibir cuatro argumentos, un posible error, el objeto, el objeto de response y el ultimo es next, con esto podemos manejar la logica de que queremos qu ocurra dentro de este mismo middleware.

## Estructura js 

### Error que nosotros lanzamos 
En este caso podriamos crear un log de los errores y enviarlos a un servicio aparte para poder gestionarlos
```.js
// imprime por consola el error
app.use((err, req, res, next) => {
    console.error('mi nuevo error', err.stack);
    next(err);
});
```
### Salida en consola
![image](https://user-images.githubusercontent.com/42829215/200695704-218991f9-df10-4333-b740-1a1c2e7eb181.png)


### Respuesta aun cliente ante posible error
En este caso se devuelve un mensaje customizado al usuario, con esto perfectamente podriamos enviarle un archivo HTML al cliente
```.js
// manda al usuario, cliente un mensaje de error
app.use((err, req, res, next) => {
    res.send('Ha ocurrido un error >:(');
});
```
### Test en postman 
![image](https://user-images.githubusercontent.com/42829215/200695535-939d607c-0d8a-457b-9189-42918bd09c35.png)

# Intro a MongoDB

| Glosary |
|-------|
[Conectandonos a un cluster de mongoDB]()
[Intro a CRUD mongoDB]()


## Conectandonos a un cluster de mongoDB

Podemos conectarnos de diferentes maneras a nuestro servidor de mongoDB, para este caso lo haremos con la ayuda de una dependencia la cual deberemos instalar con el administrador de paquetes ``npm``

### instalando la dependencia de mongosse

mongosse es una libreria la cual nos va ayudar a conectarnos a nuestra base de datos de mongoDB que se encuentra en la nube

```.nodejs
npm i -S mongoose
```
### Instalando 
recordar estar en la ruta de la carpeta del proyecto al instalar la depencia
![image](https://user-images.githubusercontent.com/42829215/192471309-994999d4-4ced-4d2d-8cfb-9cdc173a577d.png)

## Conexion a nuestra base de datos mongoDB en la nube
Podemos copiar la ``url`` que se nos dio al crear el cluster, para conectearnos a nuetra ``BS``.

### ``URL`` obtenida
![image](https://user-images.githubusercontent.com/42829215/192471820-f1804e86-a315-47b2-9e7a-e85b88c47c59.png)

### Desglose de la ``URL``
![image](https://user-images.githubusercontent.com/42829215/192472170-0780b11c-b5e8-4f51-b6db-a2b6cf4ce1c1.png)

### Estrucutura de conexion 
```.js
// importamos la libreria de mongoose una vez instalada
const mongoose = require('mongoose');

// Conexion a nuestra base datos: <user> : <password> <@ruta-server>   /<nameDB>?
mongoose.connect('mongodb+srv://<Acount>:<password>@cluster0.3a9hre8.mongodb.net/Cluster0?retryWrites=true&w=majority');
```

### Creando un modelo de base datos  
Podeos crear un objeto el cual va hacer la funcion de modelo para nuestra base de datos, este objeto contendra todo lo necesario para nuestro cometido, en este caso sera para un User.

### Estructura:
```.js
// importamos la libreria de mongoose una vez instalada
const mongoose = require('mongoose');

// Conexion a nuestra base datos: <user> : <password> <@ruta-server>   /<nameDB>?
mongoose.connect('mongodb+srv://<Acount>:<password>@cluster0.3a9hre8.mongodb.net/Cluster0?retryWrites=true&w=majority');

// modelo de base de datos, a menera de objeto
const User = mongoose.model('User',{
    username: String,
    edad: Number,
})

// Funcion de crear usuarios
const crear = async () => {
    const user = new User({username:'Chanchito feliz', edad: 24})
    // user.save().then()
    const saveUser = await user.save()
    console.log(saveUser)
}

// ejutamos la funcion de crear
crear()
```
Una vez ejecutado este codigo se creara el ``User`` con ``username:'chachito feliz'`` y ``edad:24`` dado que son las caracteristicas que le dimos al objeto ``User`` ademas se creara un ``ID`` para el User creado el cual nos permitira diferenciarlo de otros ``user``.
### Ejecutando el codigo en git bash
![image](https://user-images.githubusercontent.com/42829215/192709862-79f1c7bf-f12b-40af-a4e3-d435992be216.png)


**Nota: Como parte de una convecion de codigo estandar se debe utilizar mayuscula en el objeto:  ``User`` y para llamarlo en otra parte se debe nombrar sin la letra mayuscula, esta se cambia a minuscula ``user``, esto es una buena practica ya que esta convencion estandar nos permite crear un codigo mas legible**

## Intro a CRUD mongoDB

EL CRUD son las siglas de las acciones de Create, Read, Update, Delete, estas acciones son las funciones basicas que deberemos tener en nuestra api para poder crear, llamar users existentes en nuestra DB, Actualiazar users exisitentes o eliminar users existentes, se puede contemplar en la siguiente plantilla de codigo ejemplos de como realizar estas funciones.

### Estructura de codigo Intro CRUD
```.js
// importamos la libreria de mongoose una vez instalada
const mongoose = require('mongoose');

// Conexion a nuestra base datos: <user> : <password> <@ruta-server>   /<nameDB>?
mongoose.connect('mongodb+srv://<Acount>:<password>@cluster0.3a9hre8.mongodb.net/Cluster0?retryWrites=true&w=majority');

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
```

# Angular 

|-- indice --|
|------------|
[ Entorno de trabajo ]()

# Emtorno de trabajo

- [nodeJS] (https://nodejs.org/en/)
- [typescript](https://www.typescriptlang.org/download)
- [Angular](https://www.npmjs.com/package/@angular/cli)

# Extensiones Para VisualCode 

- Angular Essentials ``jhon Papa``
- Auto Import
- Prettier - Code formatterPrettier - Code formatter
- vscode-icons

# Que es Angular

Angular es un framework de diseño de aplicaciones web de una sola pagina.
Angular es una plataforma de desarrollo, construida en TypeScript. Como plataforma, Angular incluye:

- Un marco basados en componentes para crear aplicaciones web escalbles.
- Una coleccion de librerias bien integradas  que cubren una amplia variedad de aplicaciones incluidas, routing, forms management, cient-server communication, etc.
- Un conjunto de herramientas para ayudarte a desarrollar, construir, probar y actualizar tu codigo.

## Mas de angular en la documentacion oficial:
### [Angular Web Odicial](https://angular.io/)

## Angular application: The essentials
En esta seccion se explica las ideas centrales detras de angular. el entender las ideas centrales de detras de angular puede ayudarnos a diseñar y construir nuestras aplicaciones de una forma mas eficiente.

### Components en angular
Los componetes son bloques construccion que componen una aplicacion. Un componente incluye una ``clase typecript`` con el decorador ``@Component()``, un ``HTML template`` y  un ``CSS template``. 
El decorador ``@Component()`` especifica la siguiente informacion especifica de angular.

- Un CSS selector que define como el componente es usado en el template. Los elementos HTML que coinsidan con su este selector se convertiran en instancias de este componente.
- Un HTML template que indica a Angular como renderizar los coponentes.
- Un conjunto de estilos CSS que define la apariencia de los elementos de nuestro HTML template.
