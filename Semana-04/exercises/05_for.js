console.log('--EXERCISE 5:FOR');
console.log('\n Exercises 5.a');
/**a. Crear un array que contenga 5 palabras y recorrer dicho array utilizando 
 * un bucle for de JavaScript para mostrar una alerta utilizando cada una de las palabras. */
var array=['hello','boys','you','are','awesome!'];
for(var f=0;f<array.length;f++){
    alert(array[f]);
}

console.log('\n Exercises 5.b');
/**b. Al array anterior convertir la primera letra de cada palabra en mayúscula 
 * y mostrar una alerta por cada palabra modificada. */
for(var f=0;f<array.length;f++){
    alert(array[f].substring(0,1).toUpperCase()+array[f].substring(1,array[f].length).toLowerCase());
}

console.log('\n Exercises 5.c');
/**c. Crear una variable llamada “sentence” que tenga un string vacío, 
 * luego al array del punto a) recorrerlo con un bucle for para ir guardando 
 * cada palabra dentro de la variable sentence. Al final mostrar 
 * una única alerta con la cadena completa. */
var sentence='';
for(var f=0;f<array.length;f++){
    sentence+=array[f]+' ';
}
alert(sentence);

 console.log('\n Exercises 5.d');
/**d. Crear una array vacío y con un bucle for de 10 repeticiones. 
 * Llenar el array con el número de la repetición, es decir que al 
 * final de la ejecución del bucle for debería haber 10 elementos 
 * dentro del array, desde el número 0 hasta al número 9. 
 * Mostrar por la consola del navegador el array final (utilizar console.log). */
array=[];
for(var f=0;f<10;f++){
    array[f]=f;
}
console.log(array);