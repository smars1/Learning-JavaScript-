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
