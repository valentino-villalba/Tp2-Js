const filas = parseInt(prompt('Ingrese un número de filas'));
const columnas = parseInt(prompt('Ingrese un número de columnas'));

let total = filas * columnas;

document.write('<table><tbody>');
for (let indiceFilas = 0; indiceFilas < filas; indiceFilas++) {
  document.write('<tr>');
  for (let indiceColumnas = 0; indiceColumnas < columnas; indiceColumnas++) {
    document.write('<td>' + total + '</td>');
    total--;
  }
  document.write('</tr>');
}
document.write('</tbody></table>');