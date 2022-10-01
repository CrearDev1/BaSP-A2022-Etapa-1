window.onload= function(){

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
    var campoE=document.getElementById('email').addEventListener('blur',function(){
        campoE= event.target;
        var emailRegex=/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/; 
        if(emailRegex.test(campoE.value)){
            campoE.style.border='solid 2px green';
            }else{
                campoE.style.border='solid 2px red';
                var messageE=document.getElementsByClassName('p');
                messageE[0].innerText='Email error Ex:email1@gmail.com';
                messageE[0].style.padding='2%';
                messageE[0].style.backgroundColor='#ffff33';
        }
    }); 
   var campoE=document.getElementById('email').addEventListener('focus', function(){
        campoE= event.target;
        var emailRegex=/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
        if(emailRegex.test(campoE.value)){
            campoE.style.border='none';
        }else{
            campoE.style.border='none';
            var messageE=document.getElementsByClassName('p');
            messageE[0].innerText='';
            messageE[0].style.backgroundColor='inherit';
        }
    });
    var campoP=document.getElementById('password').addEventListener('blur',function (){
        campoP= event.target; 
        if(tiene_letras(campoP.value)!=0&&tiene_numeros(campoP.value)!=0&&(campoP.value.length)>=8){
            campoP.style.border='solid 2px green';
        }else{
            campoP.style.border='solid 2px red';
            var messageP=document.getElementsByClassName('p');
            messageP[1].innerText='Password error: use numbers ,letters\nand more than 8 characters';
            messageP[1].style.marginTop='2%';
            messageP[1].style.backgroundColor='#ffff33';
        }  
    }); 
    var campoP=document.getElementById('password').addEventListener('focus', function(){
        campoP= event.target;
        if(tiene_letras(campoP.value)!=0&&tiene_numeros(campoP.value)!=0&&(campoP.value.length)>=8){
            campoP.style.border='none';
            }else{
                campoP.style.border='none';
                var messageP=document.getElementsByClassName('p');
                messageP[1].innerText='';
                messageP[1].style.backgroundColor='inherit';
            }
    });        
    var submit =document.getElementById('submit').addEventListener('click', function(e){
        e.preventDefault();
        var emailRegex=/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/; 
        var campoE=document.getElementById('email');
        var campoP=document.getElementById('password');
        var doubleValidate=emailRegex.test(campoE.value)&&tiene_letras(campoP.value)!=0&&
            tiene_numeros(campoP.value)!=0&&(campoP.value.length)>=8;
        if(doubleValidate){
            alert('Email: '+campoE.value+'\n'+'Password :'+campoP.value);
        }else if(emailRegex.test(campoE.value)){
            alert('Email: '+campoE.value+'\n'+'Password :'+campoP.value+
            '\nPassword error: use numbers and letters \nand more than 8 characters');
        }else if(tiene_letras(campoP.value)!=0&&tiene_numeros(campoP.value)!=0&&(campoP.value.length)>=8){
            alert('Email: '+campoE.value+'\n'+'Password :'+campoP.value+'\n**Email error Ex:email1@gmail.com**');
        };    
        if(doubleValidate){
            var emailLogin=campoE.value;
            var passwordLogin=campoP.value;
            var url='https://basp-m2022-api-rest-server.herokuapp.com/login?email='+emailLogin+'&password='+passwordLogin;

             fetch(url)
                .then(function(response){
                    return response.json();
                })
                .then(function(data){
                    console.log(data);
                    if(data.success==true){
                        alert('Successful request'+
                        '\n'+data.msg);
                    }else{
                        alert('wrong request'+
                        '\n'+data.msg);
                    }
                })
                .catch(function(error){
                    console.log('error',error);
            });
        }
    });
}


    