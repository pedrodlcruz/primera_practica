// 1.1
const boton = document.createElement("button");
boton.id = "btnToClick";
boton.textContent = "Haz clic";

document.body.appendChild(boton);

boton.addEventListener("click", function(event) {
    console.log(event);
});

// 1.2
const inputFocus = document.querySelector(".focus");

inputFocus.addEventListener("focus", function() {
    console.log(inputFocus.value);
});

// 1.3
const inputValue = document.querySelector(".value");

inputValue.addEventListener("input", function() {
    console.log(inputValue.value);
});