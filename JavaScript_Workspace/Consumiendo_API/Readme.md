# Cosumiendo la API 

Se hara uso de la API construida (``api_3_0``) y sobre esta se construida una aplicacion, el objetivo de esto sera interactuar con una API Rest que ya hayamos cosntruido utilizando JavaScript, 

# Funcionalidades de la API

 Las funcionalidades de la aplicacion seran:

- Tomar una plantilla e ingresarla en nuestro HMTL
- Colocar nuestros nombres en una lista
- Poder eliminar los nombres de las listas
- El Formulario debe limpiarse al ingresar un nombre
- La pagina no debe refrescarse al enviar un nombre


# Sirviendo archivos
Para esto deberemos hacer 3 cosas
- Cuando ingresemos a la ruta de raiz, se nos entregue un archivo de html en el cual podamos cargar nuestros archivos JS.
- Agregar nuestra ruta de raiz en la cual nosotros vamos a devolver un archivo de HMTL.
- Agregar nuestro archivo HMTL.

- El metodo  express.static middleware de express, nos permite servir archivos a este le pasamos un string, el cual es el nombre de la carpeta que queremos servir.

Ahora ya podemos  devolver codigo javaScript por medio de un archivo html, con est ya podemos comenzar a construir una appi


# Cargar plantillas HTML, y formularios, desde JavaScript
Para poder ejecutar codigo de JavaScript una vez que se halla terminado de cargar nuestro HMTL deberemos hacer referencia a nuestra funcion ``window.onload`` esto nos permitira cargar nuestro codigo HMTL antes de la logica de JavaScript.


Para inyectar etiquetas HMTL desde JavaScript deberemos crear una funcion, la cual contendra una constante que almancenara un string con la etiqueta  HTML que se quiere cargar. Esta funcion debera ser llamada dentro de una funcion ``window.onload ()`` ya que esta se encarga de cargar primero el codigo HTML antes que lo logica de JavaScript.


## Estructura: Inyectando HTML desde JavaScript
El siguiente codigo se puede realizar en un archivo ``.js`` e importarlo a un HTML con el fin de inyectar una plantilla de codigo HMTL por medio de codigo JavaScript
```.js
const loadInitialTemplate = () =>{
    // se usa `` para los templates HTML no '' ni ""
    const Template = `
    <h1>Usuarios</h1>
    <form id="user-form">
        <div>
            <lavel>Nombre</lavel>
            <input name="name" />
        </div>
        <div>
            <lavel>Lastname</lavel>
            <input name="lastname" />
        </div>
        <button type="submit">Enviar</button>
    </form>
    <ul id="user-list" ></ul>
    `
    // adjuntamos el texto HMTL dentro de la etiqueta de body
    const body = document.getElementsByTagName('body')[0];
    //pasamos la plantilla HTML a cargar 
    body.innerHTML = Template;
}

// Aseguramos el el HMTL cargue antes que JavaScript
window.onload = () =>{
    // ejecutamos el codigo 
    loadInitialTemplate();
}
```
## Visual del template HTML inyectado
Se puede observar el template en el navegador una vez ya importado el ``archivo.js`` a HMTL

![image](https://user-images.githubusercontent.com/42829215/194212794-f3af48cc-1f10-40ef-b31d-179f1b60a201.png)
![image](https://user-images.githubusercontent.com/42829215/194213070-b9b1bbe4-c396-43c8-aa5e-83585d3823de.png)

Como se puede ver en el tag ``<ul></ul>`` que hace referencua a una lista no ordenada, lo creamos vacio y con el ``id`` = ``user-list``, esto es por que aqui iremos almancenando a los usuarios que se vayan registrando.

## Asignamos un evento a nuestro formulario

Debemos evitar que cuando nosotros presionemos el boton enviar nuestra pagina se refrescar y no pasara absolutamente nada, para ello asignamos un ``event.listener`` a nuestro formulario de ``user-form``.

Buscamos el formulario, luego de que tengamos alguna referencia del formulario como el id asignado por ejemplo, usaremos la propiedad de ``.onsubmit`` y a esta le asignaremos una funcion, dentro de esta funcion le agregaremos el comportamiento necesario para obtener los datos del formulario y luego haga un llamado a nuestra api al ``endpoit`` de usuario con el verbo de ``post`` y cree de manera correcta un usuario. 


## Estructura, creando el evento 
```.js 
const addFormListener = () =>{
    // llamamos a formulario con nuestra referencia
    const userForm = document.getElementById('user-form');
    userForm.onsubmit = async (e) =>{
        // evitamos que la pagina se refresque cuando presionamos el boton enviar
        e.preventDefault();
        // buscamos todos los datos dentro del formulario
        const formData = new FormData(userForm);
        // pasamos los valores de nuestro formulario a un objeto
        const data = Object.fromEntries(formData.entries());
        console.log(data);
    }
}


// Aseguramos el el HMTL cargue antes que JavaScript
window.onload = () =>{
    // ejecutamos el codigo 
    loadInitialTemplate();
    addFormListener();
}
```
## Visual en navegador
Se devuelve un objeto json al ingresar datos.
![image](https://user-images.githubusercontent.com/42829215/194221096-ec69b7fb-1404-411f-acb1-e936e550f52c.png)


## Analizando la entrega de datos a nuestro objeto
podemos pasar los datos de nuestro formulario de manera especifica con 

```.js
// obtenemos datos en especifico de nuestro formulario
   console.log(formData.get('name'));
```
Pero la mejor alternativa para pasar estos datos a un objeto es la que se implementa en el template de estructura ya que de esa manera evitamos harcodear codigo.
la mejor alternativa para obtener los datos de nuestro formulario es utilizando ``Object.fromEntries()`` como se ve en el template estructura. este metodo pide como condicion un ubjeto que devuelva un iterable, si vamos a nuestro navegador y buscamos nuestro objeto ``formData`` veremso que este tiene un metodo ``entries()`` el cual devuelve un iteramble  por lo que podemos usarlo de la siguiente manera.

### Analizando el objeto formData
![image](https://user-images.githubusercontent.com/42829215/194220349-7557d9e4-0830-4968-a18f-d984e01e6676.png)

### Mejor alternativa para pasar los valores de nuestro formulario a un objeto
```.js
 const formData = new FormData(userForm);
        // pasamos los valores de nuestro formulario a un objeto
        const data = Object.fromEntries(formData.entries());
```
