let nombres = [];
let edades = [];

for (let i = 0; i < 3; i++) {
  let nombre = prompt("escriba un nombre:");
  let edad = parseInt(prompt(`escriba la edad de ${nombre}`));

  nombres.push(nombre);
  edades.push(edad);
}

let Mayor = 0;
for (let i = 1; i < 3; i++) {
  if (edades[i] > edades[Mayor]) {
    Mayor = i;
  }
}

document.write("el mayor es: " + nombres[Mayor]);