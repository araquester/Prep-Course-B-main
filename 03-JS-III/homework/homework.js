// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function imprimirSumaNumeros() {
    // Imprime la suma de los números del 1 al 10
    // Pista: usa un acumulador
    // Tu código:
    var acc = 0
    for(i=1;i<=10;i++){
      acc = acc + i;
    }
    return acc
}

function encuentraPares(array){
  // Devuelve un arreglo con los pares encontrados
  // en el arreglo de enteros pasado como parámetro
  // Tu código:
  var array2 = []
  for(i=0;i<array.length;i++){
    if(array[i]%2==0){
      array2.push(array[i]);
    }
  }
  return array2
}

function elevaAlCuadrado(array){
  // Devuelve un arreglo con cada número del array
  // elevado al cuadrado
  // Tu código:
  function aLa2(elemento) {
    return elemento ** 2;
  }
  
  var cuadrado = array.map(aLa2);
  return cuadrado
}

function sumaArray(array){
  // Devuelve el resultado de sumar todos los elementos
  // de un arreglo de enteros dado
  // Tu código:
  var acc = 0
  var suma = array.reduce(function (acc, elemento) {
    return acc + elemento;
  });
  return suma
}

function numeroDigitos(num){
  // Devuelve el número de dígitos de un número dado
  // Tu código:
  for( var i=0; num>1; i++ )
  {
      num /= 10;
  }
  return i
}
  
  
  // No modificar nada debajo de esta línea
  // --------------------------------
  
  module.exports = {
    imprimirSumaNumeros,
    encuentraPares,
    elevaAlCuadrado,
    sumaArray,
    numeroDigitos
  };
