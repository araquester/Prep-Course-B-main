function imprimirSumaNumeros() {
    // Imprime la suma de los números del 1 al 10
    // Pista: usa un acumulador
    // Tu código:
    var acc = 0
    for(i=1;i<=10;i++){
      acc = acc + i;
      console.log(acc);
	  }
    return acc
}

console.log(imprimirSumaNumeros())