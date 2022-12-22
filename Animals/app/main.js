const loadInitialTemplate = () => {
	const template = `
		<h1>Animales</h1>
		<form id="animal-form">
			<div>
				<label>Nombre</label>
				<input name="name" />
			</div>
			<div>
				<label>Tipo</label>
				<input name="type" />
			</div>
			<button type="submit">Enviar</button>
		</form>
		<ul id="animal-list"></ul>
	`
	const body = document.getElementsByTagName('body')[0]
	body.innerHTML = template
}

const getAnimals = async () => {
	const response = await fetch('/animals')
	const animals = await response.json()
	const template = animal => `
		<li>
			${animal.name} ${animal.type} <button data-id="${animal._id}">Eliminar</button>
		</li>
	`

	const animalList = document.getElementById('animal-list')
	animalList.innerHTML = animals.map(animal => template(animal)).join('')
	animals.forEach(animal => {
		animalNode = document.querySelector(`[data-id="${animal._id}"]`)
		animalNode.onclick = async e => {
			await fetch(`/animals/${animal._id}`, {
				method: 'DELETE',
			})
			animalNode.parentNode.remove()
			alert('Eliminado con éxito')
		}
	})
}

const addFormListener = () => {
	const animalForm = document.getElementById('animal-form')
	animalForm.onsubmit = async (e) => {
		e.preventDefault()
		const formData = new FormData(animalForm)
		const data = Object.fromEntries(formData.entries())
		await fetch('/animals', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		animalForm.reset()
		getAnimals()
	}
}

// we have to make ensure that our users begin their login the correct way
// them we can create a new constant in windon.onload in the which execute our checkLogin function 
const checkLogin = () => {
	// no yet defined, will have define them
	localStorage.getItem('jwt');
}

// will execute all functions only if the user is loggedin correctly
const animalPage = () => {
	loadInitialTemplate();
	addFormListener();
  	getAnimals();
} 

// we have built the missed login template
// 
const loadLoginTemplate = () => {
	const template = `
		<h1>Login</h1>
		<form id="login-form">
			<div>
				<label>Correo</label>
				<input name="email" />
			</div>
			<div>
				<label>password</label>
				<input type="password" name="password" />
			</div>
			<button type="submit">Enviar</button>
		</form>
		<div id="error"></div>
	`
	const body = document.getElementsByTagName('body')[0];
	body.innerHTML = template;
}
	

window.onload = () => {
	const isLoggedIn = checkLogin();
	if(isLoggedIn){
		animalPage();
	}
}
