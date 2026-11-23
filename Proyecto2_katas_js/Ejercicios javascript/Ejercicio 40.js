function findArrayIndex(array, text) {
    return array.indexOf(text);
}

const mainCharacters = [
    "Luke",
    "Leia",
    "Han Solo",
    "Chewbacca",
    "Rey",
    "Anakin",
    "Obi-Wan"
];

console.log(findArrayIndex(mainCharacters, "Luke"));
console.log(findArrayIndex(mainCharacters, "Rey"));
console.log(findArrayIndex(mainCharacters, "Pedro"));

function removeItem(array, text) {
    let posicion = findArrayIndex(array, text);

    if (posicion !== -1) {
        array.splice(posicion, 1);
    }

    return array;
}

console.log(removeItem(mainCharacters, "Luke"));
console.log(removeItem(mainCharacters, "Rey"));