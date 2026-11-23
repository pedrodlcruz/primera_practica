const movies = [
    { title: 'The Matrix', releaseYear: 1999 },
    { title: 'Star Wars: Episode IV – A New Hope', releaseYear: 1977 },
    { title: 'Inception', releaseYear: 2010 },
    { title: 'Jurassic Park', releaseYear: 1993 },
    { title: 'The Shawshank Redemption', releaseYear: 1994 },
    { title: 'Pulp Fiction', releaseYear: 1994 },
    { title: 'Avatar', releaseYear: 2009 },
    { title: 'The Dark Knight', releaseYear: 2008 },
    { title: 'Fight Club', releaseYear: 1999 },
    { title: 'Forrest Gump', releaseYear: 1994 }
];

let anteriores = 0;
let posteriores = 0;

for (let pelicula of movies) {
    if (pelicula.releaseYear < 2000) {
        anteriores++;
    } else if (pelicula.releaseYear > 2000) {
        posteriores++;
    }
}

console.log("Películas anteriores a 2000: " + anteriores);
console.log("Películas posteriores a 2000: " + posteriores);