# Cosumiendo la API 

Se hara uso de la API construida (``api_3_0``) y sobre esta se construida una aplicacion, el objetivo de esto sera interactuar con una API Rest que ya hayamos cosntruido utilizando JavaScript, 


| Glosary |
|-----------------|
[Consumiendo la API](https://github.com/smars1/Learning-JavaScript-/tree/main/JavaScript_Workspace/Consumiendo_API#cosumiendo-la-api)
[Funcionalidades de la API](https://github.com/smars1/Learning-JavaScript-/tree/main/JavaScript_Workspace/Consumiendo_API#funcionalidades-de-la-api)
[Sirviendo archivos](https://github.com/smars1/Learning-JavaScript-/tree/main/JavaScript_Workspace/Consumiendo_API#sirviendo-archivos)
[Cargar plantillas HTML y formularios desde JavaScript](https://github.com/smars1/Learning-JavaScript-/tree/main/JavaScript_Workspace/Consumiendo_API#cargar-plantillas-html-y-formularios-desde-javascript)
[Enviando datos a la API]()
[Buscar a los usuarios en la DB]()
[Eliminando usuarios]()

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

# Enviando datos a la API

Una vez obtenido datos, lo que nos falta sera poder enviar los datos a nuestra API para que esta cree un usuario en nuestra base de datos en mongo.

Debemos hacer un llamdo a ``await`` por nos interesa que se termine de crear el usuario antes de pasar a la siguiente instruccion, y usamos ``fetch('/<users>')`` ya que haremos un llamado a nuestro endpoint de ``users``.  Como estamos creando deberemos pasarle un objeto de configuracion  dentro del objeto deberemos indicar el metodo de ``POST`` debido a que estamos creando. Seguido de esto le debemos  entregar el cuerpo del mensaje, el cual seria el objeto de ``data`` el cual contiene todos los valores de nuestro formulario, la menera de mandar el cuerpo del mensaje sera en un string por lo que utilizaremos ``body: JSON.stringify(data)``. Nuestro servisor de express necesita algo mas para reconocer que le estamos pasando un objeto JSON y eso es una cavecera (``headers``) la cual se llama ``Content-Type``, por lo que dentro de la propiedad de headers se le agregara un objeto el cual tendra la propiedad de ``Content-Type`` le asignamos ``application/json`` y esto lo que hara sera enviar los datos a  nuestra API  y nos va crear el usuario. Una de nuestras funcionalidades tambiene es que una vez ingresados los datos de entrada estos se limpien del formulario para ello utilzaremos el metodo  ``.reset()`` por lo que llamamos al formulario una vez creado el usuario y le agregamos el metodo ``.reset()``, ``useForm.reset();``

## Estructura JS: Enviando datos a la API para crear un usuario 

```.js
await fetch('/users', {
method: 'POST'},
body: JSON.stringify(data),
headers : 'Content-Type' : 'application/json'
}
// limpiamos el formulario
useForm.reset();
```
La propiedad ``Content-Type`` debe ir entre comillas ``''`` debido a que tiene un ``-`` el cual de no tener ``''`` no sera reconocido

## Estructura JS: Funcion completa, enviadno datos a la api
Agregamos la plantilla anterior a la ``funntion fat arrow``  ``addForm`Listener()``

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
        
        // llamado a await, creamos el usuario antes de pasar a la siguiente instruccion
        await fetch('/users', {
            // endpoint post, creamos 
            method: 'POST',
            body: JSON.stringify(data), // Pasamos a json el cuerpo de data
            headers:{'Content-Type' : 'application/json'} // esta propiedad nos permite reconecer el json
            });
            // llamamos a useForm y limpiamos el formulario con .reset()
            userForm.reset();
    }
}
```
Esta funcion deberia de recibir nuestros datos y enviarlos con formato JSON a nuestra api la cual los enviara a la base de datos, podemos ver esto en el payload

![image](https://user-images.githubusercontent.com/42829215/194657008-6a628aaa-b186-4837-8847-1ea86ae69cda.png)
Se puede visualizar que se realizo un llamado al endpoint de ``users`` en el se puede ver el payload creado y en response podremos ver como se nos devuelve el id del payload recien creado por lo que el usuario se a creado con exito.

# Buscar los usuarios en la DB

Una vez creado los usuarios, el siguiete paso sera el poder buscarlos a los usuarios en nuestra base de datos con el fin de poder manipular estos datos y pintarlos en nuestra interfaz. Para esto debemos crear una funcion, la cual llamaremos ``getUsers()`` esta se encargara tambien de pintar en la interfaz a los usuarios que haya encontrado.

Comenzamos creando una constante con la cual se hara una llamada `` await fetch`` al endpoint de ``/users``, seguido de esto debemos transformar la respuesta de lo que nos devuelve ``fetch('')`` en un json, para ello creamos una nueva constante, donde llamamos ``await`` y la constante que hace la llamada, a esta primera constante la llamaremos ``response``,  quedaria de la siguiente manera, igualamos la segunda constante, esta la llamamos ``users`` = ``await response.json()``

La respuesta que nos devuelve ``fetch('/users')`` en este caso dentro del objeto de ``response`` cuenta con un metodo de json, el cual permite transformar estas respuestas en un objeto de ``JS``.

## Estructura de la funcion ``getUsers();``

```.js
const getUsers = async () => {
    const response = await fetch('/users'); // llamamos al endpoint
    const users = await response.json(); // convertimos lo obtenido de response en un json 
    console.log(users);
}
```
Al ejecutar esta funcion deberemos poder ver una lista de los usaruarios en consele de nuestro navegador

![image](https://user-images.githubusercontent.com/42829215/194673158-08ffbbb1-5ce7-41d7-9177-3bf248606d3c.png)

Ahora dentro de nuestra funcion ``getUsers()`` podemos crear un template para imprimir a nuestros usuarios, por lo que creamos una constante la cual sera igual a una funcion la cual lo que hara sera devolver un template string con las propiedades que tiene el usuario ``${user.name}`` y ``${user.lastname}`` tambien daremos el ``${user._id}`` para buscar llamar al usuario por su ``ID`` y efectuar los eventos o llamados correspondientes al usuario por medio de su ``id`` .

```.js
// creamos plantilla de que imprime usuarios
const template = user => `
    <li>
    ${user.name} ${user.lastname} <button data-id = "${user._id}">Eliminar</button>
    </li>
    `
```

Como siguiente paso debemos llamar a nuestra lista no ordenada la cual creamos en el template de la funcion ``loadInitialTemplate()`` esta lista no ordenara le pusimos el id como ``user-list``. Una vez llamada remplazamos su ``innert.HTML`` con ``users.map()``, esto lo que hara sera iterar a los usuarios que la API nos haya devuelto. ``users.map()`` recibe un usuario y lo que queremos hacer es ejecutar la funcion de la plantilla, pero le queremos pasar el usuario. ``users.map(user => template(user))``, esto lo que hara sera devolver un arreglo con muchos string, donde se va encontrar aqui mismo la plantilla del usuario,  pero tendremos que transformar este arreglo en un gran string, para eso nosotros llamamos el metodo ``.join('')`` utilizando las comillas simples para que este arreglo cuando se una no coloque comas ni espacios, lo que ocurrida es que todo el arreglo se unira todo sin siquiera un espacio, y esto el lo que nosotros le mandaremos a nuestro inner. HTML.
 
 ```.js
  const userList = document.getElementById(user-list);
  userList.innerHTML = user.map(user => template(user)).join('');
```

## Estructura JS: Implementando en el main.js

```.js
// Creamos e inyectamos un template HTML en codigo JS
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

// obtenemos usuarios de nuestra DB 
const getUsers = async () => {
    const response = await fetch('/users'); // llamamos al endpoint
    const users = await response.json(); // convertimos lo obtenido de response en un json 
    //console.log(users);

    // creamos plantilla de que imprime usuarios
    const template = user => `
    <li>
    ${user.name} ${user.lastname} <button data-id = "${user._id}">Eliminar</button>
    </li>
    `
    // buscamos listado con id = user-list
    const userList = document.getElementById('user-list');
    // transformamos el arreglo a un string, join('') para que no haya `,` ni `espacios`
    userList.innerHTML = users.map(user => template(user)).join(''); // remplazaamos el inner.HMTL
}

// Enviamos datos ala api y Creamos usuarios 
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
        // llamado a await, creamos el usuario antes de pasar a la siguiente instruccion
        await fetch('/users', {
            // endpoint post, creamos 
            method: 'POST',
            body: JSON.stringify(data), // Pasamos a json el cuerpo de data
            headers:{'Content-Type' : 'application/json' // esta propiedad nos permite reconecer el json
            }
        });
        userForm.reset();
        getUsers();
    }
}


// Aseguramos el el HMTL cargue antes que JavaScript
window.onload = () =>{
    // ejecutamos el codigo 
    loadInitialTemplate();
    addFormListener();
    getUsers();
}
```
## Salida
Si todo se ejecuto de forma exitosa podremos ver como se imprime nuestro usuario en pantalla, gracias a que estamos remplazando el ``innert.HTML`` de nuestro ``user-list`` con los datos de nuestros usuarios.

![image](https://user-images.githubusercontent.com/42829215/194677962-e854a80a-5110-4fe0-ba13-a4e2fb65e047.png)
Se puede apreciar como se muestra la lista no ordenara que estamos inyectando desde JS ademas del tag ``button`` que tambien estamos inyectando.

# Eliminando usuarios

Ahora debemos darle funcionalidad al ``<botton>`` eliminar, para ello deberemos ir de forma manual a colocar un ``event-listener`` a cara uno de los botones y colocarle la propiedad de ``.onclick`` para poder asignar el comportamiento de eliminar a un usuario.

En la funcion ``getUsers()`` podemos llamar a ``users.forEach()``, en lugar de ``map()`` por que aqui no vamos a retornar absolutamente nada. lo unico que queremos hacer es asignarle comportamiento a cada uno de los nodos de estos botones de eliminar.

``forEach()`` recibe una funcion la cual va recibir el user, aqui lo que debemos hacer es ir a buscar el boton eliminar con ``document.querySelector()`` y le indicamos el selector que vamos a utlizar,  cuando nosotros utilizamos una propiedad custom, como en este caso vendria siendo la de ``data-id`` tenemos que pasarle este valor de la siguiente manera  ('[data-id="" ]') , luego de esto podemos hacer uso del template string  donde vamos a pasarle el ``${user._id}``, de esta manera esto renderiza o cuando vaya a buscar finalmente el boton lo va hacer por el ``data-id`` que contenga el ``id`` del usuario.

Una vez que ya tengamos creado nuestro userNode, vamos a llamar a la propiedad de ``.onclick`` y lo que vamos hacer es que se la vamos a remplazar por una funcion ``async``, por que aqui es donde nosotros vamos a hacer el llamado en nuestro codigo para eliminar el usuario en nuestra base de datos. Lo que vamos hacer es que vamos a llamar al ``endpoint`` de user con el id correspondiente,  asi que lo que vamos hacer dentro de la funcion de ``userNode.onclick`` le pasamos el ``fetch`` con el endpoint ``user`` y el ``id`` del usuario a eliminar. Seguido de esto debemos indicarle que el metodo que vamos utilizar para comunicarnos con la API sera en este caso el verbo sera el de ``DELETE``, a si que debemos colocar en el codigo el metodo a utlizar que es ``DELETE``. Una vez eliminadno el usuario de la base de datos nsosotros podemos proceder a quitar el elemento HMTL de la interfaz, para esto debemos usar el metodo ``remove()`` en el ``userNode`` para que al puchar el boton eliminar este se borre pero no borrara la lista ya que estamos borrando el nodo del``button``, es por ello que tambien deberemos hacer uso del metodo parenthNode, debido a que ``parentNode`` nos permite subir un nodo dentro del arbol de HTML y ya que el ``button`` esta dentro del la lista ``<li>`` al utilizar  parenthNode estariamos subiendo a ``<li>`` y por ende eliminariamos el tag de ``<li>`` junto con el ``button`` ya que este se encuentra dentro de la lista. 
Por ello utilizamos : ``userNode.parentNode.remove()``

```.js
users.forEach(user => {
    //buscamos por el id
    const userNode = document.querySelector('[data-id="${user._id}"]');
    userNode.onclick = async e => {
        await fetch(`/users/${user._id}`, {
            method:'DELETE'
        })
        userNode.parentNode.remove();
        alert('Eliminando con exito');
    }
}); 
```
Con esto nosotros ya estamos llamando a la API y eliminando el usuario, como se puede ver nosotros necesitabamos el uso de ``forEach`` para poder iterar cada uno de los usuarios para poder asignarle este comportamiento de ``onclick`` de que cuando nosotros pinchamos en el boton elimininar se elimina un usuario. Con lo cual esto no elimina a todos los usuarios si no que elimina al usuario del cual pinchamos el boton.

**Nota: En este caso no le estamos pasando el `headers` : `Content-Type = application/json` por que y es por que en nuestro backend, nosotros no estamos utilizando la propiedad de ``body`` de nuestro objeto de ``request``, esta es la razon por la cual no es necesario pasarle el ``Content-Type``**   

## Estructura JS: Implementando el codigo en main.js

```.js
// Creamos e inyectamos un template HTML en codigo JS
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

// obtenemos usuarios de nuestra DB 
const getUsers = async () => {
    const response = await fetch('/users'); // llamamos al endpoint
    const users = await response.json(); // convertimos lo obtenido de response en un json 
    //console.log(users);

    // creamos plantilla de que imprime usuarios
    const template = user => `
    <li>
    ${user.name} ${user.lastname} <button data-id = "${user._id}">Eliminar</button>
    </li>
    `
    // buscamos listado con id = user-list
    const userList = document.getElementById('user-list');
    // transformamos el arreglo a un string, join('') para que no haya `,` ni `espacios`
    userList.innerHTML = users.map(user => template(user)).join(''); // remplazaamos el inner.HMTL
    
users.forEach(user => {
    //buscamos por el id
    const userNode = document.querySelector(`[data-id="${user._id}"]`);
    userNode.onclick = async e => {
        await fetch(`/users/${user._id}`, {
            //eliminamos el id buscado por el endpoit DELETE
            method:'DELETE',
        })
        // borramos el html de la interfaz
        userNode.parentNode.remove();
        alert('Eliminando con exito');
    }
});
}

// Enviamos datos ala api y Creamos usuarios 
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
        // llamado a await, creamos el usuario antes de pasar a la siguiente instruccion
        await fetch('/users', {
            // endpoint post, creamos 
            method: 'POST',
            body: JSON.stringify(data), // Pasamos a json el cuerpo de data
            headers:{'Content-Type' : 'application/json' // esta propiedad nos permite reconecer el json
            }
        });
        userForm.reset();
        getUsers();
    }
}

// Aseguramos el el HMTL cargue antes que JavaScript
window.onload = () =>{
    // ejecutamos el codigo 
    loadInitialTemplate();
    addFormListener();
    getUsers();
}
```
