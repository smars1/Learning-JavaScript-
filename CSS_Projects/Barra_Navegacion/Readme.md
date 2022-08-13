# Building a bar navigation Step by step 

Para construir una barra de navegacion debemos podemos comenzar con una ``<ul><li></li></ul>``con un ``display`` : ``inline`` en lugar de ``block`` para que estos comiencen a quedar uno a lado del otro.

```.html
<ul>
  <li><a>Inicio</a></li>
  <li><a>Blog</a></li>
  <li><a>Acerca de</a></li>
<ul>
```
![image](https://user-images.githubusercontent.com/42829215/184506107-0ba5a0e7-a3b6-44fe-bf34-3e7dcf38a811.png)

## En CSS editamos el tag ``<ul>``
- Elminamos los puntos en css con la propiedad ``list-style-type:none;``
- Jugamos con ``margin``  y ``padding``, y agregamos un ``overflow:hidden;`` con el fin de que si hay contenido que salga del nuestro limite de borde este se esconda.
- Indicamos una posicion fija ``position:fixed`` y  fijamos para que esta  barra quede arriba con ``top:0;``
- indicamos que el ``<ul>`` tome un ancho del 100% con el ``width:100%``

- ### Antes de indicar el ancho con ``width:100%``
![image](https://user-images.githubusercontent.com/42829215/184506321-ceb971de-83e7-4ee6-8275-3bdbd04f9a7e.png)
- ### Despues de indicar el ancho
![image](https://user-images.githubusercontent.com/42829215/184506371-2c130dd8-300c-4efe-8074-34f85769d9aa.png)

### CSS Template
```.css
ul{
    /* oculta los puntos de la lista */
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #333;
}
```

## Damos estilo a los elementos de nuestra lista (``<li>``)
``float:left;``, hara que padamos tener los elementos de tipo block uno al lado del otro como se menciono anteriormente pero aqui usaremos ``float:left;`` para que los elementos de tipo block queren flotando a la izquierda, recordar el proyecto de ``floatbox`` donde dejamos la imagen de una gatito flontando para agregar texto en la misma linea de la pantalla.

Podemos usar tanto como ``float:left;`` 
```.css
li{
    float:left;
}
```
![image](https://user-images.githubusercontent.com/42829215/184506640-2a5462ed-2461-4f38-a1f7-e1dddfcd048e.png)

como ``display:inline;`` 
```.css
li{
    display: inline;
}
```

![image](https://user-images.githubusercontent.com/42829215/184506577-e7c61312-bbdb-4f4c-9f0c-0e25b7c7115e.png)


## Damos estilo al tag ``<a></a>``
El tag ``<a>``  se encuentra dentro del tag ``<li>``  para este caso.


### CSS Template
```.css
li a{
    /* display block en combinacion con float ajusta el size de la caja  */
    display: block;
    color: white;
    padding: 15px;
    text-align: center;
    text-decoration: none;
}
```
### Resultado
![image](https://user-images.githubusercontent.com/42829215/184507229-6f12dd39-fba0-4cc7-aab6-f137d176465d.png)


- Agregamos estilo al tag ``<a>`` de tipo ``hover`` cuando pasamos el cursor por encima del elemento ``<a>`` este muestra un efecto o cambio que nos indique que tenemos el cursor encima del elemento.

- ### Sin tocar el elemento
![image](https://user-images.githubusercontent.com/42829215/184507394-3efe12b2-903b-4cc9-a812-2ab81c069d8b.png)
- ### Pansado sobre el elemento
![image](https://user-images.githubusercontent.com/42829215/184507422-f08515ba-7607-4b01-b3d8-f73a39246541.png)

### CSS Template
```.css
li a:hover{
    background-color: rgb(247, 140, 10);
}
```

## Agregamos un estilo para cuando nuestro tag ``<a>`` sea activado
Podemos dejar tambien efectos para cuando nuestro link a sido activado, esto se puede hacer con la propiedad ``active``.

### CSS Template
```.css
.active{
    background-color: rgb(21, 157, 230);
}

```

## Agregamos el contenido 
Podemos usar un tag  ``div`` para colocar el contenido de la pagina deberemos configurar el tag y desplazarlo, para que no quede escondido por nuestra barra de navegacion.

### CSS Template
```..css
/* Desplazamos el contenido el size requerido este depende del <ul> size */
.content{
    margin-top: 48px;
}
```
![image](https://user-images.githubusercontent.com/42829215/184507987-16ee6a15-553b-48c4-bc3e-0da912c35134.png)

Ahora hacemos un spam de contenido hasta que se necesite usar un scroll, al utilizar el scroll podemos ver que la barra se queda arriba, esta no desaparece o se desplaza como el contenido.

![image](https://user-images.githubusercontent.com/42829215/184508038-88991aa6-6e02-441d-a3b6-3f841a94dc0a.png)

