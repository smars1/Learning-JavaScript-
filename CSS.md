# Cascading Style Sheests (CSS)

| Glossary |
|------|
[Example: how to use css with html?](https://github.com/smars1/Learning-JavaScript-/blob/main/CSS.md#example-how-to-use-css-with-html)
[Padding and margin in a box class](https://github.com/smars1/Learning-JavaScript-/blob/main/CSS.md#padding-and-margin-in-a-box-class)
[Text Font Types](https://github.com/smars1/Learning-JavaScript-/blob/main/CSS.md#css-template-this-templates-showing-somethings-text-propetie-examples)


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


