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
[Intro a Dom](https://github.com/smars1/Learning-JavaScript-/blob/main/JavaScript.md#dom-javascript)
[NodeJS]()

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


# NodeJS 
| Glosary |
|---------|
[Intro:  Que es una API rest? ]()

Intro:  Que es una API rest?

- Cliente : es quien va consumir nuestra api rest (telefono, PC, dispositivo etc )
- Base de datos: Herramienta de almancenamiento de datos .
- API Rest: Aplicacion que  puede comunicarse con disitintos dispositivos, entregando a estos dispositivos distintos datos esta puede estar contenida en un servidor o nube, la api rest necesita una herramienta de almacenamiento a lo que le llamamos base de datos, como mongoDB por ejemplo.

El funcionamiento de una api rest puede verse de la siguiente manera

El cliente se conecta a nuestra API REST, la API REST ira a nuestra base de datos a buscar los datos de nuestro cliente en especifico y nuestra base de datos se los va a devolver a nuestra API REST y finalmente nuestra API REST  los va devolver al cliente.

para poder conectarse a una API REST existen formas estandar para hacerlo,:

## Formas de conectarse:

Verbos :

- GET / users - /users/:id
    - GET ``users`` llama un array de usuarios ``[]`` pero si usamos  ``- /users/:id`` llama al usuario especifico como un objeto ``{}``

- POST /users
    - Crear users 

- PUT /users/:id
    - Remplazar users, podemos utilizarlo para actualizar 

- PATH / users/:id
    - Actualiza path 

- DELETE / users/:id
    - Borra un user 
