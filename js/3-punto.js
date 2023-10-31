let fraseCompleta = "";

do {
  const primeraFrase = prompt('Ingrese una frase');
  // pregunta si es la primera frase
  if (fraseCompleta.length === 0) {
    fraseCompleta += primeraFrase;
  } else {
    fraseCompleta += "-" + primeraFrase;
  }
} while (confirm('Desea ingresar otra frase'));

document.write(`<p>La frase completa es: ${fraseCompleta}</p>`);