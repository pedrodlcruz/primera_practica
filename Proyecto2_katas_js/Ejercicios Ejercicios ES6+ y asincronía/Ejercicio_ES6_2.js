// 2.1
const pointsList = [32, 54, 21, 64, 75, 43];

const pointsCopy = [...pointsList];

console.log(pointsCopy);


// 2.2
const toy = {
    name: 'Bus laiyiar',
    date: '20-30-1995',
    color: 'multicolor'
};

const toyCopy = { ...toy };

console.log(toyCopy);


// 2.3
const pointsList1 = [32, 54, 21, 64, 75, 43];
const pointsList2 = [54, 87, 99, 65, 32];

const pointsCombined = [...pointsList1, ...pointsList2];

console.log(pointsCombined);


// 2.4
const toy1 = {
    name: 'Bus laiyiar',
    date: '20-30-1995',
    color: 'multicolor'
};

const toyUpdate = {
    lights: 'rgb',
    power: ['Volar like a dragon', 'MoonWalk']
};

const toyCombined = { ...toy1, ...toyUpdate };

console.log(toyCombined);


// 2.5
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

const colorsCopy = [...colors.slice(0, 2), ...colors.slice(3)];

console.log(colorsCopy);
console.log(colors);