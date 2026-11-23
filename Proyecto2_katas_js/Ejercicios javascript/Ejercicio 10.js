const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(numberList) {
    let suma = 0;

    for (let numero of numberList) {
        suma += numero;
    }

    return suma / numberList.length;
}

console.log(average(numbers));