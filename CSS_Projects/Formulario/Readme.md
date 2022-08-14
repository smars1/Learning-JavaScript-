# Formulario 
Creamos el siguiente formulario en html se adjunta el html

![image](https://user-images.githubusercontent.com/42829215/184523482-d4d5f018-2ebd-4daf-b6b6-a9e8c9315bb5.png)

## HTML Template
```.html
    <div class="box">
        <form>
            <label >Nombre</label>
            <input type="text" id="nombre" placeholder="nombre"/>
            <label >Apellido</label>
            <input type="text" id="apellido" placeholder="apellido">
            <label>Mensaje</label>
            <textarea></textarea>
            <input type="submit" value="Aceptar">
        </form>
    </div>
 ```
 
Delimintamos el espacio del div y le damos el la siguientes propiedades

```.css
.box{
    background-color: white;
    padding: 12px 20px;    
    border-radius: 4px;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
}
```
![image](https://user-images.githubusercontent.com/42829215/184528284-6190a214-db38-445b-a68f-a63c7ed78614.png)


## Modificando propiedades de input en CSS
```.css
input[type=text]{
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0px;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    /* hace que nuestro elemento se ajuste al borde de la ventana*/
    box-sizing: border-box;
}

input[type="submit"]{
    width: 100%;
    background-color: #4caf50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

textarea{
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0px;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}
```
![image](https://user-images.githubusercontent.com/42829215/184528355-4954f016-62b5-44af-b533-befabb8e1e1b.png)

