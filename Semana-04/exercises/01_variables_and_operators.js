console.log('--EXERCISE 1:VARIABLES AND OPERATORS');
console.log('\n-Exercise 1.a');
/*Crear dos variables numéricas y utilizar el operador suma para guardar
el valor de la suma de ambos números en una 3er variable.*/
var num1=2,num2=2;
var sum=num1+num2;
console.log("Result of the sum: ",sum);

console.log('\n-Exercise 1.b');
/*Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.*/
var word1="Hello";
var word2="World!"
var sum=word1+" "+word2;
console.log("Sum of the strings:",sum);

console.log('\n-Exercise 1.c');
/**Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) 
 * guardando el resultado de la suma en una 3er variable (utilizar length) */
var sum=word1.length+word2.length;
console.log("Number of characters sum: ",sum);