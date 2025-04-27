//DESARROLLA AQUI TUS SOLUCIONES

// Ejercicio 1.- Declara una función **getRandomPokemon** que retorne un pokemon aleatorio.

async function getRandomPokemon() {

    let response = await fetch('https://pokeapi.co/api/v2/pokemon');
    let data = await response.json();
    let total = data.count;

    let randomId = Math.floor(Math.random() * total) + 1;

    let pokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
    let pokemon = await pokemonResponse.json();

    return pokemon; 
}




// Ejercicio 2.- Declara una funcion **getImageAndName** que retorne el nombre y la URL de 
// la imagen de un pokemon => (return {img, name})

async function getImageAndName (pokemon){

    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    let data = await response.json();
    let name = data.name;
    let img = data.sprites.front_default;
    return {name, img}
    
}

// Ejercicio 3.- Declara una funcion **printImageAndName** que retorne el string necesario 
// para pintar la imagen y el nombre del pokemon en el DOM

async function printImageAndName(pokemon) {

    const { img, name } = await getImageAndName(pokemon);

    document.getElementById('pokemon-container').innerHTML = `
        <section>
            <img src="${img}" alt="${name}">
            <h1>${name}</h1>
        </section>
    `;
}



// Ejercicio 4.- Declara una función **getRandomDogImage** que retorne la url de la imagen 
// de un perro aleatorio

async function getRandomDogImage() {

    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json();
    return data.message;  
}

// Ejercicio 5.- Declara una función **getRandomPokemonImage** que retorne la url de la 
// imagen de un pokemon aleatorio.

async function getRandomPokemonImage() {

    const response = await fetch('https://pokeapi.co/api/v2/pokemon');
    const data = await response.json();
    const total = data.count;

    const randomId = Math.floor(Math.random() * total) + 1;

    const pokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
    const pokemonData = await pokemonResponse.json();
    return pokemonData.sprites.front_default;  // Retorna la imagen del Pokémon
}

// Ejercicio 7.- Declara una función **getRandomCharacter** que retorne un personaje aleatorio.

async function getRandomCharacter() {

    const response = await fetch('https://rickandmortyapi.com/api/character');
    const data = await response.json();

    const randomIndex = Math.floor(Math.random() * data.results.length);
    const randomCharacter = data.results[randomIndex];

    return randomCharacter;  
}

// Ejercicio 8.- Declara una función **getRandomCharacterInfo** que retorne de un personaje 
// su imagen, nombre, episodios en los que aparece y el nombre del primer episodio en el que 
// aparece + fecha de estreno

async function getRandomCharacterInfo() {

    const character = await getRandomCharacter();
    const { name, image, episode } = character;

    const firstEpisodeUrl = episode[0];
    const episodeResponse = await fetch(firstEpisodeUrl);
    const episodeData = await episodeResponse.json();


    return {
        img: image,
        name: name,
        episodes: episode.length,
        firstEpisode: episodeData.name,
        dateEpisode: episodeData.air_date
    };
}


