let suma = 0;
let entrada;

while (true) {
  entrada = prompt("Escriba un numero");

  if (entrada === null) {
    break;
  }

  let numero = parseFloat(entrada);

  if (!isNaN(numero)) {
    suma += numero;
  } else {
    alert("Ingrese solo numeros");
  }
}

alert(`Suma total: ${suma}`);