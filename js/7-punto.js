const num = parseInt(prompt('escriba un numero que no sea mayor a 50):'));

if (num > 0 && num <= 50) {
  for (let i = num; i >= 1; i--) {
    let fila = '';
    for (let j = 1; j <= i; j++) {
      fila += i;
    }
    document.write(fila + '<br>');
  }
} else {
  document.write('solo numeros menor o igual a 50');
}