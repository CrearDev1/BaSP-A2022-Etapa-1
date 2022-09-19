console.log('--EXERCISE 6:FUNCTION');
console.log('\n Exercises 6.a');
/**a. Crear una función suma que reciba dos valores numéricos 
 * y retorne el resultado. Ejecutar la función y guardar el 
 * resultado en una variable, mostrando el valor de dicha variable en la consola del navegador. */
function sum(x,y){
    return x+y;
}
var result=sum(2,2);
console.log(result);

console.log('\n Exercises 6.b');
/**b. A la función suma anterior, agregarle una validación para 
 * controlar si alguno de los parámetros no es un número; de no 
 * ser un número, mostrar una alerta aclarando que uno de los 
 * parámetros tiene error y retornar el valor NaN como resultado. */
 function sum1(x,y){
    if(isNaN(x)||isNaN(y))
        return NaN;
    else
        return x+y;
}
console.log(sum1(10,10));

console.log('\n Exercises 6.c');
/**c. Aparte, crear una función validate Integer que reciba un número 
 * como parámetro y devuelva verdadero si es un número entero. */
function validateInteger(x){
    return Number.isInteger(x);
}
console.log(validateInteger(1.5));

console.log('\n Exercises 6.d');
/**d. A la función suma del ejercicio 6b) agregarle una llamada a 
 * la función del ejercicio 6c. y que valide que los números 
 * sean enteros. En caso que haya decimales mostrar un alerta 
 * con el error y retornar el número convertido a entero (redondeado). */
 function sum2(x,y){
    if(isNaN(x)||isNaN(y))
        return NaN;
    else if(validateInteger(x)&&validateInteger(y))
        return x+y;
    else if(validateInteger(x)==false&&validateInteger(y)==false)
        alert('Error '+x+' y '+y+' no son enteros: '+Math.round(x)+' -- '+Math.round(y)+' (redondeados)');
    else if(validateInteger(x)==false)
        alert('Error '+x+' no es entero: '+Math.round(x)+' (redondeo)');
    else if(validateInteger(y)==false)
        alert('Error '+y+' no es entero: '+Math.round(y)+' (redondeo)');
}
console.log(sum2(8.999999,10.5));

console.log('\n Exercises 6.e');
/**Convertir la validación del ejercicio 6d) en una función separada 
 * y llamarla dentro de la función suma probando que todo siga funcionando igual. */
function validate1(x,y){
if(validateInteger(x)==false&&validateInteger(y)==false)
    alert('Error '+x+' y '+y+' no son enteros: '+Math.round(x)+' -- '+Math.round(y)+' (redondeados)');
else if(validateInteger(y)==false)
    alert('Error '+y+' no es entero: '+Math.round(y)+' (redondeo)');
else if(validateInteger(x)==false)
    alert('Error '+x+' no es entero: '+Math.round(x)+' (redondeo)');
}
function sum3(x,y){
    if(isNaN(x)||isNaN(y))
    return NaN;
else if(validate1(x,y))
    return x+y;
}
console.log(sum3(3.285,10.5222));
