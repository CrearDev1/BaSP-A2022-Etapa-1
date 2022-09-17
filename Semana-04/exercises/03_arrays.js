console.log('--EXERCISE 3:ARRAYS');
console.log('\n-Exercise 3.a');
/**a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", 
 * "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] 
 * mostrar por consola los meses 5 y 11 (utilizar console.log). */
 var months=["Enero", "Febrero", "Marzo", "Abril", "Mayo", 
 "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
console.log(months[4] , months[10]);

console.log('\n-Exercise 3.b');
/**Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort). */
console.log(months.sort());

console.log('\n-Exercise 3.c ');
/**Agregar un elemento al principio y al final del array (utilizar unshift y push). */
months.unshift('Hello');
months.push('Bye');
console.log(months);

console.log('\n-Exercise 3.d ');
/**Quitar un elemento del principio y del final del array (utilizar shift y pop). */
months.shift();
months.pop();
console.log(months);

console.log('\n-Exercise 3.e ');
/**Invertir el orden del array (utilizar reverse). */
months.reverse();
console.log(months);

console.log('\n-Exercise 3.f ');
/**Unir todos los elementos del array en un único string donde cada mes este separado por un guión 
 * - (utilizar join). */
textArray=months.join(' - ');
console.log(textArray);

console.log('\n-Exercise 3.e ');
/**Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice). */
 months=["Enero", "Febrero", "Marzo", "Abril", "Mayo", 
 "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
copyArray=months.slice(4,11);
console.log(copyArray);