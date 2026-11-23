const names = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
];

function nameFinder(nameList, name) {
    let posicion = nameList.indexOf(name);

    if (posicion !== -1) {
        return {
            encontrado: true,
            posicion: posicion
        };
    } else {
        return false;
    }
}

console.log(nameFinder(names, "Tony"));
console.log(nameFinder(names, "Pedro"));