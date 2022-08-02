# Cascading Style Sheests (CSS)

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