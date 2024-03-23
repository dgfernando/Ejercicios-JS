function numeroDeCaracteres(s, c) {
    let contador = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === c) {
            contador++;
        }
    }
    return contador;
}

// código de prueba
console.log(numeroDeCaracteres("Hola Mundo", "o")); // 2
console.log(numeroDeCaracteres("MMMMM", "m")); // 0
console.log(numeroDeCaracteres("eeee", "e")); // 4

