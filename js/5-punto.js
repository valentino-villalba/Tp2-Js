while (true) {
    let numero = prompt("Dni");
    numero = parseInt(numero);
  
    if (!isNaN(numero) && numero >= 0 && numero <= 99999999) {
      const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
      const resto = numero % 23;
      const letraDNI = letras.charAt(resto);
      alert(`${numero} Su letra es: ${letraDNI}`);
    } else {
      alert("ingrese un numero de dni");
    }
  }