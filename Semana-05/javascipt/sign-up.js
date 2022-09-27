window.onload=function(){

    var letras="abcdefghyjklmnñopqrstuvwxyz";

    function tiene_letras(texto){
    for(i=0; i<texto.length; i++){
       if (letras.indexOf(texto.charAt(i),0)!=-1){
          return 1;
       }
    }
    return 0;
 }
 var numeros="0123456789";

 function tiene_numeros(texto){
    for(i=0; i<texto.length; i++){
       if (numeros.indexOf(texto.charAt(i),0)!=-1){
          return 1;
       }
    }
    return 0;
 }
    
var name =document.getElementById('Name').addEventListener('blur',function(){
    name=event.target;
    if(tiene_letras(name.value)!=0&&tiene_numeros(name.value)!=1){
        name.style.border='solid 2px green';
    }else{
        name.style.border='solid 2px red';
    }
});
var name =document.getElementById('Name').addEventListener('focus',function(){
    name=event.target;
    if(tiene_letras(name.value)!=0&&tiene_numeros(name.value)!=1){
        name.style.border='none';
    }else{
        name.style.border='none';
    }
});
    
    }

