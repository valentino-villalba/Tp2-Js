const num = parseInt(prompt('Ingrese un número (no mayor de 50):'));

if (num > 0 && num <= 50) {
  for (let i = 1; i <= num; i++) {
    let fila = '';
    for (let j = 1; j <= i; j++) {
      fila += j;
    }
    document.write(fila + '<br>');
  }
} else {
  document.write('Por favor, ingrese un número válido entre 1 y 50.');
}