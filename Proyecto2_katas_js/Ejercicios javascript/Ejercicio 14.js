const words = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code'
];

function repeatCounter(list) {
    let resultado = {};

    for (let palabra of list) {
        if (resultado[palabra]) {
            resultado[palabra]++;
        } else {
            resultado[palabra] = 1;
        }
    }

    return resultado;
}

console.log(repeatCounter(words));