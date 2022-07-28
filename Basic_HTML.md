# Basic HTMT5 

- [Tags Useful body](https://github.com/smars1/Learning-JavaScript-/blob/main/Basic_HTML.md#other-basics-tags)
- [Form tag basics](https://github.com/smars1/Learning-JavaScript-/blob/main/Basic_HTML.md#form-tag-basics)
- [Tags image and links]()
- [Tags list ordered and not ordered]()
- [Tags tables, heading, foot, files and cell]()

## Tag ``<!doctype html>``
This tag indicate that we use html5
```.html
<!doctype html>
```

## Tag [``<head></head>``](https://www.w3schools.com/tags/tag_head.asp)
The ``<head>`` element is a container for metadata (data about data) and is placed between the ``<html>`` tag and the ``<body>`` tag.
Metadata is data about HTML document. metadata is not displayed.
```.html
<head></head>
```
Metadata typically define the document title, character set, styles, scripts, and other meta information.

The following elements can go inside the <head> element:

- ``<title>`` (required in every HTML document)
- ``<style>``
- ``<base>``
- ``<link>``
- ``<meta>``
- ``<script>``
- ``<noscript>``

## Tag ``<title></title>``
This tag allow change the title name of web page, we can see a example in the follow HTML code and picture.

```.html
<!DOCTYPE html>
<html>
<head>
    <title>Mi first page web</title>
</head>
<body></body>
</html>

```
![image](https://user-images.githubusercontent.com/42829215/181365422-bf10f00b-fffc-4e4d-8168-04727e1db8cf.png)

## Other basics tags 
This some tags of ``<body>`` inside tag ``<body></body>`` was stay our contents.
also in the following code template, we can see some other examples of useful tags that us can serve.
```.html
<!DOCTYPE html>
<html>
<head>
    <title>My first web page</title>
</head>
<body>
    <h1>Title 1</h1>
    <h2>Title 2</h2>
    <h3>Title 3</h3>
    <h4>Title 4</h4>
    <h5>Title 5</h5>
    <h6>Title 6</h6>
    <br/><!-- this tag make a line break -->
    <p>hi! I`m a paragraph!</p>
    <!-- <hr/>  This tag create a line break also draws a background line -->
    <p>This is my <b>paragraph three!</b></p>
    <hr/>
    <!-- <blockquote></blockquote> this tag allow quote something, for example a author.  -->
    <blockquote>This is a quote </blockquote>
    <blockquote>I want to put a doing in the universe</blockquote>
    <code>I`m code this tag we allows show code like text for example <p>Hellow Word</p> </code>
    <em>I`m a tag for doing to emphasis </em>
    <i>I`m tag for italic text</i>
    <pre>I`m block of preformatter text,
        this tag allows us to write text while preserving its formatting </pre>
    <s>This tag allows us to indicate a text o idea is wrong or that we change of idea</s>
    <small>This tag allows to write with little letters</small>
    <strong>This tag allows to write text in bold, it`s to indicate something important </strong>
    <br/>
    <u>This tag allows to write underlined text</u>
    <div>This tag allows separating different sections</div>
    <div>Section 1</div>
    <div>Section 2</div>
    <div>Section 3</div>
</body>
</html>

```

# Form tag basics

In this section, we can find some tags that it`s basics at the moment of creating a form in HMTL
    
```.html
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>form tag basics</title>
</head>

<body>
    <form>
        <fieldset><!--The fielset tag is to agroup elements in a box-->
            <legend>Personals data</legend><!--legend tag allows writing a legend for the box created by fieldset tag-->
            <label>age</label>
            <input type="number" placeholder="Input you age" />
            <br />
            <label>password</label>
            <input type="password" />
            <br />
            <label>Name</label>
            <input type="text">
            <br />
            <input type="submit" value="accept" />
            <textarea></textarea>
            <button>Aceptar</button>
            <select>
                <option value="goku">Goku</option>
                <option value="vegeta">Vegeta</option>
                <option value="gohan">Gohan</option>
            </select>
        </fieldset>
    </form>
</body>

</html>
```

# tags image and link

Here we can find a example of how to able use the tag image and link in the following HTML template.

```.html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Document</title>
</head>
<body>
    <img src="http://placekitten.com/300/300" alt="cat">
    <!--The following tag (<a><a/>) allows making references a link to go to another website -->>
    <a href="https://www.google.com">Ir a Google</a> 
</body>
</html>
```
    
# Tag of list ordered and not ordered
    
In the following template example, we can understand some tags and how to use for to create a list ordered and not ordered 
    
 ```.html
 <!DOCTYPE html>
  <head>
    <title>list</title>
  </head>
  <body>
    <!--The tag <ul></ul> is to create lists don`t ordered -->
    <ul>
      <li>Element 1</li>
      <li>Element 2</li>
      <li>Element 3</li>
    </ul>
    <hr/>
    <!--The tag <ol></ol> is to create lists ordered -->
    <ol>
        <li>Element 1</li>
        <li>Element 2</li>
        <li>Element 3</li>
      </ol>
  </body>
</html>
```
    
