function calcularImpuestos (e,i) {
    if (e >= 18 && i >= 1000){
      return i * 0.4;
    }else return 0;
}


// código de prueba
console.log(calcularImpuestos(18, 1000)) // 400
console.log(calcularImpuestos(40, 10000)) // 4000
console.log(calcularImpuestos(17, 5000)) // 0
console.log(calcularImpuestos(30, 500)) // 0