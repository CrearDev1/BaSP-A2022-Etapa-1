
    
   
       
window.onload= function(){

    var campo=document.getElementById('email').addEventListener('blur',function(){
        campo= event.target;
        var emailOk=document.getElementById('valido1');
        var emailRegex=/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/; 
        if(emailRegex.test(campo.value)){
            emailOk.innerText='Correcto';
        }else{
            emailOk.innerText='Incorrecto Ej: email1@gmail.com';
        }
    })    
   var campo1=document.getElementById('email').addEventListener('focus', function(){
        campo1= event.target;
        var emailOk=document.getElementById('valido1');
        var emailRegex=/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
        if(emailRegex.test(campo1.value)){
            emailOk.innerText='';
        }else{
            emailOk.innerText='';
        }
    })         

    var campo2=document.getElementById('password').addEventListener('blur',function(){
        campo2= event.target;
        var passwordOk=document.getElementById('valido2'); 
        if(!isNaN(campo2.value)&&campo2.value.length>3){
            passwordOk.innerText='Correcto';
        }else{
            passwordOk.innerText='Incorrecto Ej: password1234';
        }
    }) 
    var campo3=document.getElementById('password').addEventListener('focus', function(){
        campo3= event.target;
        var passwordOk=document.getElementById('valido2');
        if(!isNaN(campo2.value)&&campo2.value.length>3){
            passwordOk.innerText='';
        }else{
            passwordOk.innerText='';
        }
    })         


}


    