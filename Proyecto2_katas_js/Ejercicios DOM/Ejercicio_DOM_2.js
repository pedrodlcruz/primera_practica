// Guardar los div originales
const divsOriginales = document.querySelectorAll("body > div");

// 2.1
const divVacio = document.createElement("div");
document.body.appendChild(divVacio);

// 2.2
const divConP = document.createElement("div");
const parrafo = document.createElement("p");

divConP.appendChild(parrafo);
document.body.appendChild(divConP);

// 2.3
const divConSeisP = document.createElement("div");

for (let i = 0; i < 6; i++) {
    const p = document.createElement("p");
    divConSeisP.appendChild(p);
}

document.body.appendChild(divConSeisP);

// 2.4
const parrafoDinamico = document.createElement("p");
parrafoDinamico.textContent = "Soy dinámico!";

document.body.appendChild(parrafoDinamico);

// 2.5
document.querySelector(".fn-insert-here").textContent = "Wubba Lubba dub dub";

// 2.6
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const lista = document.createElement("ul");

for (let app of apps) {
    const li = document.createElement("li");
    li.textContent = app;
    lista.appendChild(li);
}

document.body.appendChild(lista);

// 2.7
const elementosEliminar = document.querySelectorAll(".fn-remove-me");

for (let elemento of elementosEliminar) {
    elemento.remove();
}

// 2.8
const parrafoMedio = document.createElement("p");
parrafoMedio.textContent = "Voy en medio!";

document.body.insertBefore(parrafoMedio, divsOriginales[1]);

// 2.9
const divsInsertar = document.querySelectorAll("div.fn-insert-here");

for (let div of divsInsertar) {
    const p = document.createElement("p");
    p.textContent = "Voy dentro!";
    div.appendChild(p);
}