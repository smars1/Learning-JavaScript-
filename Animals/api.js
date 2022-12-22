const express = require('express');
const mongoose = require('mongoose');
const app = express();

const Animal = require('./animal.controller');
const {Auth, isAuthenticated} = require('./auth.controller');
const port = 3000;

// had been create mongo connect
//mongoose.connect('mongodb+srv://smars1:asddsa12@cluster0.3a9hre8.mongodb.net/miapp?retryWrites=true&w=majority');
mongoose.connect(`mongodb+srv://smars1:${process.env.MONGOPASS}@cluster0.3a9hre8.mongodb.net/myapp?retryWrites=true&w=majority`);

app.use(express.json());

// we protecting our endpoint with our function isAthenticated that created before
// now if wanting to access in a endpoint should pass for login access before go to access another endpoint
app.get('/animals', isAuthenticated, Animal.list);
app.post('/animals', isAuthenticated, Animal.create);
app.put('/animals/:id', isAuthenticated, Animal.update);
app.patch('/animals/:id', isAuthenticated, Animal.update);
app.delete('/animals/:id', isAuthenticated, Animal.destroy);

// endpoint login and register
app.post('/login', Auth.login);
app.post('/register', Auth.register);


app.use(express.static('app'))

app.get('/', (req, res) => {
	res.sendFile(`${__dirname}/index.html`)
})
app.get('*', (req, res) => {
	res.status(404).send('Esta página no existe :(')
})

app.listen(port, () => {
	console.log('Arrancando la aplicación!')
})
