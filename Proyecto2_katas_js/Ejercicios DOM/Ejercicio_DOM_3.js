// 1.1
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const listaPaises = document.createElement("ul");

for (let pais of countries) {
    const li = document.createElement("li");
    li.textContent = pais;
    listaPaises.appendChild(li);
}

document.body.appendChild(listaPaises);

// 1.2
document.querySelector(".fn-remove-me").remove();

// 1.3
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const listaCoches = document.createElement("ul");

for (let coche of cars) {
    const li = document.createElement("li");
    li.textContent = coche;
    listaCoches.appendChild(li);
}

document.querySelector('[data-function="printHere"]').appendChild(listaCoches);

// 1.4
const countriesImages = [
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

const contenedor = document.createElement("div");

for (let country of countriesImages) {
    const div = document.createElement("div");

    const h4 = document.createElement("h4");
    h4.textContent = country.title;

    const img = document.createElement("img");
    img.src = country.imgUrl;

    div.appendChild(h4);
    div.appendChild(img);

    contenedor.appendChild(div);
}

document.body.appendChild(contenedor);

// 1.5
const botonEliminarUltimo = document.createElement("button");
botonEliminarUltimo.textContent = "Eliminar último elemento";

botonEliminarUltimo.addEventListener("click", function() {
    if (contenedor.lastElementChild) {
        contenedor.lastElementChild.remove();
    }
});

document.body.appendChild(botonEliminarUltimo);

// 1.6
for (let tarjeta of contenedor.children) {
    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";

    botonEliminar.addEventListener("click", function() {
        tarjeta.remove();
    });

    tarjeta.appendChild(botonEliminar);
}