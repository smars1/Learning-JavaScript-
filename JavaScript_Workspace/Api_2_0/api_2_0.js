// importamos modulos de express
const express = require('express');
// pasamos la ruta del acrchivo que queremos exportar ya que no es un modulo de expres
const User = require('./controller');

// function
const app = express();
// indicamos port
const port = 3000;
// pasamos la ruta de del navegador dodne se va ejecutar nuestra app.

app.get('/', User.list); // <<== Cuando son mas de un elemento
app.post('/', User.create);
app.get('/:id', User.get); // <<== este get es para cuando es un solo elemento
app.put('/:id', User.update);
app.patch('/:id' , User.update);
app.delete('/:id', User.destroy);

// agregamos siempre al final de todas las rutas el manejo de las rutas no definidas
app.get('*', (req, res) =>{
    res.status(404).send('Esta pagina no existe >_<')
})
app.post('*',(req,res)=>{
    res.status(404).send("Esta pagina no existe >_<")
})
// Creamos nuestra funcion de escucha 
// esta de ejecutara cuando nuestra app de ejecute con exito
app.listen(port, () =>{
	console.log('Arrancando la APP!!!')})
