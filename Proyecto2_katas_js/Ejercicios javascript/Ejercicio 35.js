const mutants = [
    { name: 'Wolverine', power: 'regeneration' },
    { name: 'Magneto', power: 'magnetism' },
    { name: 'Professor X', power: 'telepathy' },
    { name: 'Jean Grey', power: 'telekinesis' },
    { name: 'Rogue', power: 'power absorption' },
    { name: 'Storm', power: 'weather manipulation' },
    { name: 'Mystique', power: 'shape-shifting' },
    { name: 'Beast', power: 'superhuman strength' },
    { name: 'Colossus', power: 'steel skin' },
    { name: 'Nightcrawler', power: 'teleportation' }
];

function findMutantByPower(mutants, power) {
    for (let mutante of mutants) {
        if (mutante.power === power) {
            return "Poder encontrado: " + mutante.name;
        }
    }

    return "No se ha encontrado ningún mutante con ese poder";
}

console.log(findMutantByPower(mutants, "telepathy"));
console.log(findMutantByPower(mutants, "invisibility"));