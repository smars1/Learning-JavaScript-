# Cascading Style Sheests (CSS)

| Glossary |
|------|
[Example: how to use css with html?](https://github.com/smars1/Learning-JavaScript-/blob/main/CSS.md#example-how-to-use-css-with-html)
[Padding and margin in a box class](https://github.com/smars1/Learning-JavaScript-/blob/main/CSS.md#padding-and-margin-in-a-box-class)
[Text Font Types](https://github.com/smars1/Learning-JavaScript-/blob/main/CSS.md#css-template-this-templates-showing-somethings-text-propetie-examples)
[Link, list and tables](https://github.com/smars1/Learning-JavaScript-/blob/main/CSS.md#link-list-and-tables)
[# CSS: Display, max-width, position, overflow, float, mas selector y opacidad]()


- Selector: ``id=""``
  - This selector we can using to indicate that an element to has an unique value and just exist an element unique with this id  
- Selector: ``class=""`` 
  - This selector we can use to indicate that others elements can to has the same class, its can existing differents elements with the same class, not as in the selector  ``id`` where dont can repeat the id with different elements

## Example: how to use css with html?

```.css
body {
    background-color: #eeeeee;
    color: #f00000
}
/* when we wanna select an id tag, we must do it with its name id but beginning with a # before,
like the following example when we called paragraph like #paragraph{}  */
#paragraph{
    color: #ff0000;
}

/* When we want to select a class can do it write the class name but with "."
before as in the following example with the tag class  */
.tag{
    color: #00aa00;
}

```

```.html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>CSS</title>
    <!-- This tag called link allows call stylesheets, every stylesheet should be indicated in the metadata from link tag-->
    <link rel="stylesheet" href="main.css" type="text/css"/>
</head>
<body>
    <p id="paragraph">It is a paragraph</p>
    <span class="tag">It is a span</span>
    <hr/>
    <!-- Also we have other selector tags: id and class -->
    <span class="tag">It is a span</span>
    <br/>
    <span class="tag">It is other span</span>
    <br/>
    <span class="tag">It is  a third span</span>
    
</body>
</html>
```

## Padding and margin in a box class
we can give colors, sizes and another propeties a diffent elements or classes  

Something properties of ``border-style``:
- dashed
- dotted
- double
- groove 
- ridge 
- inset 
- outset 
- hidden

### CSS Template
```.css
/* other example of class, here give a structure for our box */
.box{
    margin: 8px;
    padding: 8px;
    /* border-style: dotted dashed solid double; */
    border-style: solid;
    border-width: 8px;
    border-color: #faa;
    border-left: 6px solid #afa;
    background-color: #aaf;
    border-bottom: 10px solid #f00000;
    border-top: 10px solid #00aa00;
    
    border-radius: 4px;   
    
    /* height and width the box */
    height: 100px;
    width: 100px;
    /* Text color */
    color: #575;

}
```
### HTML Template
```.html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Document</title>
    <link rel="stylesheet" href="main.css" type="text/css">
</head>
<body>
    <div class="box"> Hellow Word!!!</div>

</body>
</html>
```

# Text Font Types

## CSS Template, this templates showing somethings text propetie examples.
```.css
/* Ist a good practice to use color codes for choosing colors */
body{
    background-color: #eee;
}

p{
    /* propiedades de fuente */
    font-family:"Arial", Helvetica, sans-serif;
    font-weight: 900; /*900 until 100, the values we must increments of 100 in 100 */
    font-style: oblique;
    font-size: 1.5em;

    color: #222fff;
    text-align: left;
    /* this does an indent in the first line of text */
    text-indent: 15px;
    /* text-decoration: underline; */
    line-height: 1.4;

    word-spacing: 10px;
    text-shadow: 1px 2px 2px rgba(0, 0, 0, 0.3);
}

a{
    /* The propietie none erasing the underlined from link with this propietie */
    text-decoration: none;
    text-transform: capitalize; /* uppercase lowercase, capitalize */ 
    letter-spacing: 3px;
}
```
## HTML Template
```.html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>CSS</title>
    <link rel="stylesheet" href="02.color_aligned.css" type="text/css"> 
</head>
<body>
    <p>Hellow I'm a paragraph!!!, un parrafo ira creciendo dependiendo de cuanto texto escribamos, vamos a escribir un poco mas para mostrar el texto modificado </p>
    <a href="">Google!</a>
</body>
</html>
```

# Link, list and tables

The tags ``<a>I'm a link</a>`` can to receive almost any CSS property  

(we must traslate the following notes from Spanish to a English more late)

Podemos llamar a los selectores de link de direntes manera, por ejemplo cuando el link no a sido visitado tenemos el selector ``a:link{}`` el cual es el estado normal del link, en general tenemos 4 estados los cuales se presentan debajo:

## Selectores ``<a></a>``
 - El link en su estado normal ``a:link{}``
 - El link cuando a sido visitado ``a:visited{}``
 - Cuando pasamos el cursor encima del link ``a:hover{}``
 - Cuando damos click en el link ``a:active{}`` 

Debajo mostramos una plantilla de CSS con su respectivo HTML como ejemplo para realizar operaciones con los selectores anteriores.

### CSS Template
```.CSS
body{
    background-color: #eee;
}
a{
    color: hotpink;
    border: solid 1px #d00;
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
    text-decoration: none;
}
a:link{
    background-color: pink;
    text-decoration: none;
}

a:visited{
    color: white;
}

a:hover{
    color: #f55;
}

a:active{
    color: #22f;
    background-color: #f55;
}

```
### HTML Template
```.html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>CSS</title>
    <link rel="stylesheet" href="03.link_list_table.css" type="text/css">
</head>
<body>
   <a href="https://www.google.com">Google.com</a> 
</body>
</html>
```

## Listas 
Aqui veremos los tipos de estilos que pueden tener las listas no ordenadas 

Cuando queremos seleccionar un elemento en especifico que se encuentre dentro de un otro tag deberemos dar su ruta de posicion en cascada, como en el siguiente ejemplo: 

Si queremos seleccionar un el elemento ``li`` que se encuentra dentro de un tag ``ul``  deberemos dar la siguiente ruta como selector ``ul li{}``

- List: ``ul``
- List element: ``li`` 

Podemos dar estilos a nuestros listados con el siguiente comando  ``list-style-type:`` algunas de sus propiedades son:
- ``circle;``
- ``square;``
- ``upper-roman;``
- ``lower-alpha``
- ``none``

## CSS Template

```.css 
body{
    background-color: #eee;
}

ul{
    list-style-type: none;
    background-color: #fff;
    border: solid 1px #ddd;
    border-radius: 5px;
    /* padding: 15px; */
    padding-left: 0px ;
}

ul li{
    border-bottom: solid 1px #ddd;
    padding: 15px;
}
```

## HTML Template
```.html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>CSS</title>
    <link rel="stylesheet" href="04.list.css" type="text/css">
</head>
<body>
  <ul>
    <li>Element 1</li>
    <li>Element 2</li>
    <li>Element 3</li>
  </ul>  
</body>
</html>
```
## Tablas 

In this section we going create a table, we will needing  the following tags:

- ``table``
- ``tr``
- ``th``
- ``td``

Podemos indicar en el selector ``tr`` si queremos seleccionar alguna clase hijo en especifico con el agrengando el siguiente comando al 
selector ``tr:nth-child(even){}``

Podemos usar tambien la propiedad de ``border-collapse: collapse;`` para quitar el borde de las tablas o ``border-collapse: separate;`` para separar las tablas

## CSS Template
```.css
body{
    background-color: #eee;
}

table{
    width: 100%;
    background-color: white;
    border-collapse: collapse;
}

tr:nth-child(even){
    background-color:  #f2f2f2;
}

td{
    border: solid 1px #ddd;
    padding: 8px;
}

table th{
    background-color: #4ca054;
    color: white;
    text-align: left;
    padding-top: 12px;
    padding-left: 8px;
    padding-right: 8px;
    padding-bottom: 12px;
}

/* codigo propio comienza debajo*/
div{
    background-color: #58D68D;
    border: solid 1px #ddd;
    border-radius: 5px;
    margin-top: 40px;
    box-shadow: 2px 2px  blue;
}

div p{
    text-align: center;
    color: white;;
}
div:hover{
    background-color: #45B39D;
    border-style: inset;
}

div table tr th:hover{
    background-color: #45B39D;
    border-collapse: collapse;
}
```
## HTML Template

```.html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>CSS</title>
    <link rel="stylesheet" href="05.tablas.css" type="text/css">
</head>
<body>
    <table>
        <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
        </tr>
        <tr>
            <td>ColmenaIoT</td>
            <td>IoTiCs</td>
            <td>Mexico</td>
        </tr>
        <tr>
            <td>Chanchito feliz</td>
            <td>Chanco</td>
            <td>Chancholandia</td>
        </tr>
    </table>
    
    <!--notas personale debajo-->
    <div>
        <p>We can to use the propertie 
            <code>
                border-collapse: collapse;
            </code> 
            to erase the border lines
        </p>
        <table>
            <tr>
                <th>Company</th>
                <th>Contact</th>
                <th>Country</th>
            </tr>
        </table>
    </div>
</body>
</html>
```

# CSS: Display, max-width, position, overflow, float, mas selector y opacidad

## Display

Las propiedades de tipo bloque son aquellas que se imprimen con un salto de linea en la pantalla en lugar de aparecer a la derecha. 
ALgunas propiedades que son se bloque son:
- ``<p></p>``
 
Las propiedades de tipo inline no dan un salto de linea se imprimen a la derecha. Comprendase en el siguiente ejemplo. 
- ``<span></span>``

Podemos cambiar esta propiedad con la propiedad ``display:``
- ``inline;``  de block a inline
- ``block;``   de inline a block 
- ``none;``    volvemos invisible un elemento 

## CSS Template
```.css
body{
    background-color: #eee;
    text-transform:capitalize;
}

p{display: inline;}

span{
    display: block;
}

.invisible{
    display: none;
}

/* example */

.example{
    background-color: white;
    padding-top: 1px;
    padding-left: 10px;
    margin-top: 30px;
    margin-left: 30px;
    margin-right: 30px;
    border: solid 1px #eee;
    border-style: outset;
    border-radius: 10px;
}

.example .block{
    display: inline;
}

.example .inline{
    display: block;
    padding-top: 10px;
}
```

## HTML Template

```.html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>CSS</title>
    <link rel="stylesheet" href="06.Display.css" type="text/css">
</head>
<body>
    <!-- Block type -->
    <p>tag p: soy tipo bloque</p>
    <h1>Los tag h: son tipo bloque</h1>
    <div>Tag div: es tipo bloque</div>
    <form>Tag form:es tipo bloque</form>
    <header>Tag header: es tipo bloque</header>
    <footer>Tag footer: es tipo bloque</footer>
    <section>Tag section: es tipo bloque</section>
    <!-- Inline type -->
    <span>Tag span: soy tipo inline</span>
    <a>Tag a: soy tipo inline</a>
    <div class="invisible">Soy invisible</div>
    <hr>

    <div class="example">
        <!-- Ejemplo -->
        <p class="block">Este texto esta</p>
        <p class="block">pasando de block a inline</p>

        <span class="inline">Este texto de tipo inline</span>
        <span class="inline">Esta pasando a ser de tipo block</span>
    </div>



</body>
</html>
```

## max-width y position 
``max-width`` nos permite inidicar el mancho maximo que del elemento que esta dentro del padding, la diferencia con width es es que width no se adapta a la pantalla
mientras que ``width-max`` nos permite dar un tamaño maximo pero este cambiara si el tamaño de la pantalla cambia.

- Podemos indicar el ancho que esta dentro del padding con la propiedad ``max-with: 200px;``
- ``margin: auto`` nos permite centrar los elementos de forma automatica siempre y cuando tenga una display block

por defecto todos los elementos de html vienen con la propiedad ``static``, se puede cambiar esta propiedad usando la propiedad  ``position:relative`` esto nos permitira cambiar toda la posicion del elemento o tambien podriamos usar ``fixed`` este deja el contenido fijo en la pantalla independientemente de cuanto contenido 
haya en la pantalla



