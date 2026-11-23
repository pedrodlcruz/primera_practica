const albums = [
    "De Mysteriis Dom Sathanas",
    "Reign of Blood",
    "Ride the Lightning",
    "Painkiller",
    "Iron Fist"
];

// Crear estilos
const estilos = document.createElement("style");

estilos.textContent = `
    body {
        font-family: Arial, sans-serif;
        background-color: #181818;
        color: white;
        margin: 0;
        padding: 40px;
    }

    h1 {
        text-align: center;
        color: #e63946;
    }

    ul {
        max-width: 600px;
        margin: 30px auto;
        padding: 0;
        list-style: none;
    }

    li {
        background-color: #292929;
        padding: 20px;
        margin-bottom: 12px;
        border-radius: 8px;
        border-left: 5px solid #e63946;
        font-size: 18px;
    }

    li:hover {
        background-color: #3a3a3a;
    }
`;

document.head.appendChild(estilos);

// Crear título
const titulo = document.createElement("h1");
titulo.textContent = "Mis álbumes favoritos";

document.body.appendChild(titulo);

// Crear lista
const lista = document.createElement("ul");

for (let album of albums) {
    const li = document.createElement("li");
    li.textContent = album;

    lista.appendChild(li);
}

document.body.appendChild(lista);