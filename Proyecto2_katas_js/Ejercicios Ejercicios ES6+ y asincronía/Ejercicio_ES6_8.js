const characterList = document.querySelector('#character-list');
const characterImage = document.querySelector('.character-image');

const url = 'https://thronesapi.com/api/v2/Characters';

// Obtener los personajes de la API
fetch(url)
    .then(response => response.json())
    .then(characters => {

        // Crear una opción para cada personaje
        characters.forEach(character => {
            const option = document.createElement('option');

            option.value = character.imageUrl;
            option.textContent = character.fullName;

            characterList.appendChild(option);
        });

        // Mostrar la imagen del primer personaje
        characterImage.src = characters[0].imageUrl;

        // Cambiar la imagen al seleccionar otro personaje
        characterList.addEventListener('change', () => {
            characterImage.src = characterList.value;
        });

    })
    .catch(error => {
        console.log('Error al obtener los personajes:', error);
    });