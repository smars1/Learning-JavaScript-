const express = require('express')
const mongoose = require('mongoose')
const app = express()

const Animal = require('./animal.controller')
const {auth, isAuthenticated} = require('./auth.controller')
const port = 3000

mongoose.connect('mongodb://localhost:27017/miapp')

app.use(express.json())

// we protecting our endpoint with our function isAthenticated that created before
app.get('/animals', isAuthenticated, Animal.list)
app.post('/animals', isAuthenticated, Animal.create)
app.put('/animals/:id', isAuthenticated, Animal.update)
app.patch('/animals/:id', isAuthenticated, Animal.update)
app.delete('/animals/:id', isAuthenticated, Animal.destroy)

// endpoint login and register
app.post('/login', auth.login);
app.post('/register', auth.register);


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
