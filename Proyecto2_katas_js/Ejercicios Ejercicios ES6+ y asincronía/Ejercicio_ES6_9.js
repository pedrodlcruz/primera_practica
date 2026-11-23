const pokemonImage = document.querySelector('.random-image');

// Generar un número aleatorio entre 1 y 151
const randomNumber = Math.floor(Math.random() * 151) + 1;

// Crear la URL del Pokémon
const url = `https://pokeapi.co/api/v2/pokemon/${randomNumber}`;

// Obtener los datos del Pokémon
fetch(url)
    .then(response => response.json())
    .then(pokemon => {

        // Obtener la imagen del Pokémon
        pokemonImage.src = pokemon.sprites.other['official-artwork'].front_default;

        pokemonImage.alt = pokemon.name;

        console.log('Pokémon:', pokemon.name);
        console.log('Número:', pokemon.id);

    })
    .catch(error => {
        console.log('Error al obtener el Pokémon:', error);
    });