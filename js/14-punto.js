let texto = prompt("escriba una cadena de texto");
let guiones = "";

for (let i = 0; i < texto.length; i++) {
    if (i === texto.length - 1) {
        guiones += texto[i];
    } else {
        guiones += texto[i] + "-";
    }
}

alert("guiones incluidos: " + Ggiones);