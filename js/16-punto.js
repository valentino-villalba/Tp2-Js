const texto = prompt("escriba una cadena de texto");
let reves = "";

for (let i = texto.length - 1; i >= 0; i--) {
    reves += texto[i];
}

alert("frases al reves: " + reves);