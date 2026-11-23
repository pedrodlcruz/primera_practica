const mixedElements = [
    6,
    1,
    "Marvel",
    1,
    "hamburguesa",
    "10",
    "Prometeo",
    8,
    "Hola mundo"
];

function averageWord(list) {
    let suma = 0;

    for (let elemento of list) {
        if (typeof elemento === "number") {
            suma += elemento;
        } else {
            suma += elemento.length;
        }
    }

    return suma / list.length;
}

console.log(averageWord(mixedElements));