/*
 *
 * Ejercicio 1: Implemente una funcion que retorne la suma de todos
 * los elementos en el arreglo.
 *
 */

var arraySum = function(array){
  // TODO: Tu codigo aqui!
  // ...
  var suma =0;// variable suma para add
  
  for(var i= 0; i < array.length; i++){
    
   suma += array[i];
   
   
  }
  console.log(suma);
  
   return suma;
  
};

// Prueba (No modificar)

var a = [1, 2, 3, 4, 5];
var b = [-1, -2, -3, -4, -5];
var c = [2];



if (arraySum(a) === 15 &&
    arraySum(b) === -15 &&
    arraySum(c) === 2) {
  console.log('Ejercicio 1 paso la prueba!');
} else {
  console.log('Ejercicio 1 no paso la prueba! =(');
}
