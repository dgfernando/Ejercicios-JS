function imprimirMatriz(m) {
    for (let fila of m) {
        for (let elemento of fila) {
            console.log(elemento);
        }
    }
}

// código de prueba
imprimirMatriz([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]);
