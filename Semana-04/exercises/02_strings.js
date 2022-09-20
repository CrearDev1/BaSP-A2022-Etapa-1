console.log('--EXERCISE 2:STRINGS');
console.log('\n Exercises 2.a');
/**Crear una variable de tipo string con al menos 10 caracteres y
 *  convertir todo el texto en mayúscula (utilizar toUpperCase). */
var word='hello world ! , hello world!';
console.log(word.toUpperCase());

console.log('\n Exercises 2.b');
/*Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 
caracteres guardando el resultado en una nueva variable (utilizar substring).*/
subWord=word.substring(0,5);
console.log(subWord);

console.log('\n Exercises 2.c');
/**Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 
 * 3 caracteres guardando el resultado en una nueva variable (utilizar substring). */
console.log(word.length);
subWord=word.substring(25,28);
console.log(subWord);

console.log('\n Exercises 2.d');
/**Crear una variable de tipo string con al menos 10 caracteres y 
 * generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. 
 * Guardar el resultado en una nueva variable (utilizar substring, 
 * toUpperCase, toLowerCase y el operador +). */
subWord= word.substring(0,1).toUpperCase()+word.substring(1,word.length).toLowerCase();
console.log(subWord);

console.log('\n Exercises 2.e');
/**Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. 
 * Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf). */
subWord=word.indexOf(' ');
console.log(subWord);

console.log('\n Exercises 2.f');
/**Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). 
 * Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera 
 * letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, 
 * toUpperCase, toLowerCase y el operador +).*/
 var text='hello students';
 var result=text.substring(text.indexOf('h'),1).toUpperCase() +
     text.substring(text.indexOf('h')+1 ,text.indexOf(' ')).toLowerCase() +' '+
     text.substring(text.indexOf('s'),text.indexOf('s')+1).toUpperCase() +
     text.substring(text.indexOf('s')+1,text.length).toLowerCase();
     console.log(result);