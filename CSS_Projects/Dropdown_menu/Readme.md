# Dropdown menu

Cremos el cuerpo del html primero, necesitamos crear un ``div`` que contenga nuestro ``button`` y otro ``div`` el cual tendra nuestro contenido

```.html
<body>
    <div class="dropdown">
        <button class="dropdown-btn">Dropdown</button>
        <div class="dropdown-content">
            <a href="#">Link1</a>
            <a href="#">Link2</a>
            <a href="#">Link3</a>
        </div>
    </div>
</body>
</html>
```
## Vista en navegador
![image](https://user-images.githubusercontent.com/42829215/184509396-268e16d8-1b09-4b9b-9eaa-37ab7f9a8647.png)

Esta la imagen muestra el cuerpo del html

# Stylesheet en css
Damos color al ``div`` con la clase ``dropdown-btn`` esto le dara color a nuestro boton
![image](https://user-images.githubusercontent.com/42829215/184515533-6e403b7e-d3f5-4e36-b578-465bb84c9da2.png)

Escondemos el borde con ``borde:none;``
![image](https://user-images.githubusercontent.com/42829215/184515560-2140694f-1933-4b72-b230-d259d710f074.png)

Damos color al contenido con ``color:white`` para un color white le damos un ``padding`` mayor.
Tambien podemos usar la propiedad cursor, esta nos permite mo dificar el efecro visual de nuestro cursor.
 ### CSS Template
 ```.css
 .dropdown-btn{
    background-color: #4caf50;
    padding: 16px;
    font-size: 16px;
    border: none;
    /* Muestra una mano cuando pasamos sobre el boton */
    cursor:pointer;
}
```
![image](https://user-images.githubusercontent.com/42829215/184516487-dd8ea5e1-cfcf-458f-84a5-c366f1e993b3.png)

## Dando estilo al contenedor dropdown
Damos a la caja principal con la clase dropdown una posicion relativa y ``display:inline-block``.
![image](https://user-images.githubusercontent.com/42829215/184517284-2fc01fdc-003e-4ae9-a6af-50eec671bb69.png)

 ## CSS Template 
 ```.css
 .dropdown{
    position: relative;
    display: inline-block;
}
/* damos propiedad al contenido del dropdown */
.dropdown-content{
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);    
}
```
## Modificamos el contenido de ``<a>``

Damos color al contenido y sus dimenciones quitamos las lineas que tiene por defecto y con ``display:block;`` le damos formato de bloque al contenido.

### CSS Template
```.css
.dropdown-content a{
    color: black;
            /* V    H */
    padding: 12px 16px;
    text-decoration: none;
    display: block;
}
```
### Vista del contenido
 ![image](https://user-images.githubusercontent.com/42829215/184520859-006915f2-bbf8-439d-a9c6-481d748aa140.png)


## Dando propiedades de ``hover`` al contenido

```.css 
.dropdown-content a:hover{
    background-color: #f1f1f1;
}
.dropdown:hover .dropdown-btn{
    background-color: #3e8e41;
}

.dropdown:hover .dropdown-content{
    /* convertimos en bloque el contenido al pasar el cursor por el dropdown */
    display: block;
}
```
![image](https://user-images.githubusercontent.com/42829215/184521125-f61c86ed-59d6-4928-b235-7f3b51de2888.png)

 









