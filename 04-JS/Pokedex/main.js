const pokeImage = document.querySelector("#pokeImage");
const dexNumber = document.querySelector("#dexNumber");
const dexName = document.querySelector("#dexName");
const dexHeight = document.querySelector("#dexHeight");
const dexWeight = document.querySelector("#dexWeight");
const dexDescription = document.querySelector("#dexDescription");
const inputPoke = document.querySelector("#inputPoke")

let pokeNumber = 1;
const maxPokeNumber = 898;

const searchBtn = document.querySelector("#searchButton").addEventListener('click', () =>{
	let inputData = inputPoke.value.toLowerCase();
	let number = parseInt(inputData);
	if(number <= maxPokeNumber){
		pokeNumber = number;
		console.log(pokeNumber)
	}
	checkPokemonName(inputData);
	inputPoke.value = "";
});

const btnArriba = document.querySelector("#btnArriba").addEventListener('click', () => {
	if(pokeNumber > 1){
		pokeNumber -= 1;
	}
		loadPokemon(pokeNumber);
});
const btnAbajo = document.querySelector("#btnAbajo").addEventListener('click', () => {
	if(pokeNumber < maxPokeNumber){
		pokeNumber += 1;
	}
	loadPokemon(pokeNumber);
});
const btnIzquierda = document.querySelector("#btnIzquierda").addEventListener('click', () => {
	if(pokeNumber > 9){
		pokeNumber -= 9;
	} else {
		pokeNumber = 1;
	}
	loadPokemon(pokeNumber);
});
const btnDerecha = document.querySelector("#btnDerecha").addEventListener('click', () => {
	if(pokeNumber < (maxPokeNumber - 9))
	pokeNumber += 9;
	else {
		pokeNumber = maxPokeNumber;
	}
	loadPokemon(pokeNumber);
});


async function loadPokemon(number){
	const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${number}`);
	const data = await response.json()
	pokeImage.src = data.sprites.front_default;
	dexNumber.textContent = `N°: ${data.id}`;
	dexName.textContent = `Nombre: ${data.name}`;
	dexHeight.textContent = `Altura: ${data.height}`;
	dexWeight.textContent = `Peso: ${data.weight}`;
	let speciesURL = data.species.url;
	dexDescription.textContent = await getDescription(speciesURL)
//	dexDescription.textContent = data.;
}

async function getDescription(speciesURL){
	const response = await fetch(speciesURL)
	const data = await response.json()
	let descripcion = '';
	let entries = data.flavor_text_entries;
	for(let i = 0; i < entries.length; i++){
		if(entries[i].language.name === 'es'){
			descripcion = "Descripcion: " + entries[i].flavor_text;
			break;
		}
	}
	return descripcion;
}

async function checkPokemonName(value){
	const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${value}`);
	const data = await response.json()
	if(data.id <= maxPokeNumber || value == data.name){
		pokeNumber = data.id;
		loadPokemon(value);
	}
}

loadPokemon(pokeNumber);
