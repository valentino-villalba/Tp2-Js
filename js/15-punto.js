let texto = prompt("escriba una cadena de texto");
let vocales = 0;

for (let i = 0; i < texto.length; i++) {
    const caracter = texto[i].toLowerCase();
    if (caracter === "a" || caracter === "e" || caracter === "i" || caracter === "o" || caracter === "u") {
        vocales++;
    }
}

alert("total de vocales: " + vocales);