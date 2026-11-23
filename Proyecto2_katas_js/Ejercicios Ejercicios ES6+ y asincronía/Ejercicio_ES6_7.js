const videogames = [
    { name: 'Final Fantasy VII', genders: ['RPG'], score: 9.5 },
    { name: 'Assasins Creed Valhalla', genders: ['Aventura', 'RPG'], score: 4.5 },
    { name: 'The Last of Us 2', genders: ['Acción', 'Aventura'], score: 9.8 },
    { name: 'Super Mario Bros', genders: ['Plataforma'], score: 8.5 },
    { name: 'Genshin Impact', genders: ['RPG', 'Aventura'], score: 7.5 },
    { name: 'Legend of Zelda: Breath of the wild', genders: ['RPG'], score: 10 }
];

// Filtrar videojuegos RPG
const rpgGames = videogames.filter(game => {
    return game.genders.includes('RPG');
});

console.log('Videojuegos RPG:', rpgGames);


// Calcular la media de sus puntuaciones
const averageRpgScore = rpgGames.reduce((total, game) => {
    return total + game.score;
}, 0) / rpgGames.length;

console.log('Media de puntuación RPG:', averageRpgScore);