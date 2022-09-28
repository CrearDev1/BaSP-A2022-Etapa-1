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
    var messageP=document.getElementsByClassName('p-sign')
    if(tiene_letras(name.value)!=0&&tiene_numeros(name.value)!=1&&name.value.length>=3){
        name.style.border='solid 2px green';
        
    }else{
        name.style.border='solid 2px red';
        messageP[0].innerText='**Name Error :Must contain only letters and more than 3 characters**';
    }
});
var name =document.getElementById('Name').addEventListener('focus',function(){
    name=event.target;
    var messageP=document.getElementsByClassName('p-sign')
    if(tiene_letras(name.value)!=0&&tiene_numeros(name.value)!=1&&name.value.length>=3){
        name.style.border='none';
    }else{
        name.style.border='none';
        messageP[0].innerText=' ';
    }
});


var lastName =document.getElementById('LastName').addEventListener('blur',function(){
    lastName=event.target;
    var messageP=document.getElementsByClassName('p-sign')
    if(tiene_letras(lastName.value)!=0&&tiene_numeros(lastName.value)!=1&&name.value.length>=3){
        lastName.style.border='solid 2px green';
    }else{
        lastName.style.border='solid 2px red';
        messageP[1].innerText='** Last Name Error: Must contain only letters and more than 3 characters**';
    }
});
var lastName=document.getElementById('LastName').addEventListener('focus',function(){
    lastName=event.target;
    var messageP=document.getElementsByClassName('p-sign')
    if(tiene_letras(lastName.value)!=0&&tiene_numeros(lastName.value)!=1&&lastName.value.length>=3){
        lastName.style.border='none';
    }else{
        lastName.style.border='none';
        messageP[1].innerText=' ';
    }
});

var dni=document.getElementById('dni').addEventListener('blur',function(){
    dni=event.target;
    var messageP=document.getElementsByClassName('p-sign')
    if(tiene_numeros(dni.value)!=0&&tiene_letras(dni.value)!=1&&dni.value.length>=7){
        dni.style.border='solid 2px green';
    }else{
        dni.style.border='solid 2px red';
        messageP[2].innerText='***DNI Error: Must contain only numbers and more than 7 characters**';
    }
});
var dni=document.getElementById('dni').addEventListener('focus',function(){
    dni=event.target;
    var messageP=document.getElementsByClassName('p-sign')
    if(tiene_letras(dni.value)!=1&&tiene_numeros(dni.value)!=0&&dni.value.length>=7){
        dni.style.border='none';
    }else{
        dni.style.border='none';
        messageP[2].innerText=' ';
    }
});

var phone=document.getElementById('phone').addEventListener('blur',function(){
    phone=event.target;
    var messageP=document.getElementsByClassName('p-sign')
    if(tiene_numeros(phone.value)!=0&&tiene_letras(phone.value)!=1&&phone.value.length==10){
        phone.style.border='solid 2px green';
    }else{
        phone.style.border='solid 2px red';
        messageP[4].innerText='**Phone Error: Must contain only numbers and 10 characters**';
    }
});
var phone=document.getElementById('phone').addEventListener('focus',function(){
    phone=event.target;
    var messageP=document.getElementsByClassName('p-sign')
    if(tiene_letras(phone.value)!=1&&tiene_numeros(phone.value)!=0&&phone.value.length==10){
        phone.style.border='none';
    }else{
        phone.style.border='none';
        messageP[4].innerText=' ';
    }
});


var address=document.getElementById('address').addEventListener('blur',function(){
    address=event.target;
    var messageP=document.getElementsByClassName('p-sign')
    if(tiene_numeros(address.value)!=0&&tiene_letras(address.value)!=0&&address.value.length>=5){
        address.style.border='solid 2px green';
    }else{
        address.style.border='solid 2px red';
        messageP[5].innerText='**Addres Error: Must contain numbers, letters and more than 5 characters**';
    }
});
var address=document.getElementById('address').addEventListener('focus',function(){
    address=event.target;
    var messageP=document.getElementsByClassName('p-sign')
    if(tiene_letras(address.value)!=0&&tiene_numeros(address.value)!=0&&address.value.length>=5){
        address.style.border='none';
    }else{
        address.style.border='none';
        messageP[5].innerText=' ';
    }
});

var location=document.getElementById('location').addEventListener('blur',function(){
    location=event.target;
    var messageP=document.getElementsByClassName('p-sign')
    if(tiene_numeros(location.value)!=1&&tiene_letras(location.value)!=0&&location.value.length>=5){
        location.style.border='solid 2px green';
    }else{
        location.style.border='solid 2px red';
        messageP[6].innerText='**Location Error: Must contain  letters and more than 5 characters**';
    }
});
var location=document.getElementById('location').addEventListener('focus',function(){
    location=event.target;
    var messageP=document.getElementsByClassName('p-sign')
    if(tiene_letras(location.value)!=1&&tiene_numeros(location.value)!=0&&location.value.length>=5){
        location.style.border='none';
    }else{
        location.style.border='none';
        messageP[6].innerText=' ';
    }
});

var postalCode=document.getElementById('postal-code').addEventListener('blur',function(){
    postalCode=event.target;
    var messageP=document.getElementsByClassName('p-sign')
    if(tiene_numeros(postalCode.value)!=0&&tiene_letras(postalCode.value)!=1&&postalCode.value.length>=5){
        postalCode.style.border='solid 2px green';
    }else{
        postalCode.style.border='solid 2px red';
        messageP[7].innerText='**Postal Code Error: Must contain  only numbers and more than 5 characters**';
    }
});
var postalCode=document.getElementById('postal-code').addEventListener('focus',function(){
    postalCode=event.target;
    var messageP=document.getElementsByClassName('p-sign')
    if(tiene_letras(postalCode.value)!=1&&tiene_numeros(postalCode.value)!=0&&postalCode.value.length>=5){
        postalCode.style.border='none';
    }else{
        postalCode.style.border='none';
        messageP[7].innerText=' ';
    }
});

var email=document.getElementById('email').addEventListener('blur',function (){
    email= event.target;
    var emailRegex=/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/; 
    if(emailRegex.test(email.value)){
        email.style.border='solid 2px green';
    }else{
        email.style.border='solid 2px red';
        var messageP=document.getElementsByClassName('p-sign');
        messageP[8].innerText='**Email error Ex:email1@gmail.com**'                                         
    }
}) ;   
var email=document.getElementById('email').addEventListener('focus', function(){
    email= event.target;
    var emailRegex=/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    if(emailRegex.test(email.value)){
        email.style.border='none';
    }else{
        email.style.border='none';
        var messageP=document.getElementsByClassName('p-sign');
        messageP[8].innerText=' '
    }
});   

var password=document.getElementById('password').addEventListener('blur',function (){
    password= event.target; 
    if(tiene_letras(password.value)!=0&&tiene_numeros(password.value)!=0&&(password.value.length)>=8){
        password.style.border='solid 2px green';
    }else{
        password.style.border='solid 2px red';
        var messageP=document.getElementsByClassName('p-sign');
        messageP[9].innerText='**Password error: use numbers, letters \nand more than 8 characters**';
        messageP[9].style.marginTop='2%';
    }
    
}); 
var password=document.getElementById('password').addEventListener('focus', function(){
    password= event.target;
    if(tiene_letras(password.value)!=0&&tiene_numeros(password.value)!=0&&(password.value.length)>=8){
        password.style.border='none';
    }else{
        password.style.border='none';
        var messageP=document.getElementsByClassName('p-sign');
        messageP[10].innerText='  '
    }
});    

var passwordR=document.getElementById('repeat-password').addEventListener('blur',function (){
    passwordR= event.target; 
    if(password.value==passwordR.value){
        passwordR.style.border='solid 2px green';
    }else{
        passwordR.style.border='solid 2px red';
        var messageP=document.getElementsByClassName('p-sign');
        messageP[10].innerText='**Password error:do not match**';
        messageP[10].style.marginTop='2%';
    }
    
}); 
var passwordR=document.getElementById('repeat-password').addEventListener('focus', function(){
    passwordR= event.target;
    if(password.value==passwordR.value){
        passwordR.style.border='none';
    }else{
        passwordR.style.border='none';
        var messageP=document.getElementsByClassName('p-sign');
        messageP[11].innerText=' ';
    }
});

var submit=document.getElementById('submit').addEventListener('click', function(e){
    submit=event.target;
    e.preventDefault();
    var messageP=document.getElementsByClassName('p-sign');
    var arrayS=[];
    for(var f=0;f<messageP.length;f++){
        if(messageP[f].textContent)
        arrayS[f]=messageP[f].textContent
    }
  

    var cadena=arrayS.toString()
    alert(cadena);
    
 });


/**

var submit=document.getElementById('submit').addEventListener('click', function(e){
    e.preventDefault();
    var messageP=document.getElementsByClassName('p-sign');
    if(!messageP[0].textContent
        &&!messageP[1].textContent
        &&!messageP[2].textContent
        &&!messageP[3].textContent
        &&!messageP[4].textContent
        &&!messageP[5].textContent
        &&!messageP[6].textContent
        &&!messageP[7].textContent
        &&!messageP[8].textContent){
      
            alert('Name:'+name.value+'\n'+
            'Last Name: '+lastName.value+'\n'
            +'DNI: '+dni.value+'\n'
            +'Phone: '+phone.value+'\n'+''
            +'Address: '+address.value+'\n'+''
            +'Email: '+email.value+'\n'+''
            +'Password: '+password.value+'\n'+''
            +'Repeat password: '+passwordR.value+'\n'+'');
      
        }else if(messageP[0].textContent
            &&!messageP[1].textContent
            &&!messageP[2].textContent
            &&!messageP[3].textContent
            &&!messageP[4].textContent
            &&!messageP[5].textContent
            &&!messageP[6].textContent
            &&!messageP[7].textContent
            &&!messageP[8].textContent){

                alert('Name:'+name.value+'\n'+
            'Last Name: '+lastName.value+'\n'
            +'DNI: '+dni.value+'\n'
            +'Phone: '+phone.value+'\n'+''
            +'Address: '+address.value+'\n'+''
            +'Email: '+email.value+'\n'+''
            +'Password: '+password.value+'\n'+''
            +'Repeat password: '+passwordR.value+'\n'+
            '**Error Name*');
            }else if(!messageP[0].textContent
                &&messageP[1].textContent
                &&!messageP[2].textContent
                &&!messageP[3].textContent
                &&!messageP[4].textContent
                &&!messageP[5].textContent
                &&!messageP[6].textContent
                &&!messageP[7].textContent
                &&!messageP[8].textContent){

                    alert('Name:'+name.value+'\n'+
                    'Last Name: '+lastName.value+'\n'
                    +'DNI: '+dni.value+'\n'
                    +'Phone: '+phone.value+'\n'+''
                    +'Address: '+address.value+'\n'+''
                    +'Email: '+email.value+'\n'+''
                    +'Password: '+password.value+'\n'+''
                    +'Repeat password: '+passwordR.value+'\n'+
                    '**Error Last Name*');
                }else if(!messageP[0].textContent
                    &&!messageP[1].textContent
                    &&messageP[2].textContent
                    &&!messageP[3].textContent
                    &&!messageP[4].textContent
                    &&!messageP[5].textContent
                    &&!messageP[6].textContent
                    &&!messageP[7].textContent
                    &&!messageP[8].textContent){

                        alert('Name:'+name.value+'\n'+
                        'Last Name: '+lastName.value+'\n'
                        +'DNI: '+dni.value+'\n'
                        +'Phone: '+phone.value+'\n'+''
                        +'Address: '+address.value+'\n'+''
                        +'Email: '+email.value+'\n'+''
                        +'Password: '+password.value+'\n'+''
                        +'Repeat password: '+passwordR.value+'\n'+
                        '**Error DNI*');
                    }else if(!messageP[0].textContent
                        &&!messageP[1].textContent
                        &&!messageP[2].textContent
                        &&messageP[4].textContent
                        &&!messageP[5].textContent
                        &&!messageP[6].textContent
                        &&!messageP[7].textContent
                        &&!messageP[8].textContent){

                            alert('Name:'+name.value+'\n'+
                            'Last Name: '+lastName.value+'\n'
                            +'DNI: '+dni.value+'\n'
                            +'Phone: '+phone.value+'\n'+''
                            +'Address: '+address.value+'\n'+''
                            +'Email: '+email.value+'\n'+''
                            +'Password: '+password.value+'\n'+''
                            +'Repeat password: '+passwordR.value+'\n'+
                            '**Error phone**');
                        }else if(!messageP[0].textContent
                                &&!messageP[1].textContent
                                &&!messageP[2].textContent
                                &&!messageP[3].textContent
                                &&!messageP[4].textContent
                                &&messageP[5].textContent
                                &&!messageP[6].textContent
                                &&!messageP[7].textContent
                                &&!messageP[8].textContent){
        
                                    alert('Name:'+name.value+'\n'+
                                    'Last Name: '+lastName.value+'\n'
                                    +'DNI: '+dni.value+'\n'
                                    +'Phone: '+phone.value+'\n'+''
                                    +'Address: '+address.value+'\n'+''
                                    +'Email: '+email.value+'\n'+''
                                    +'Password: '+password.value+'\n'+''
                                    +'Repeat password: '+passwordR.value+'\n'+
                                    '**Error addres**');
                                }else if(!messageP[0].textContent
                                    &&!messageP[1].textContent
                                    &&!messageP[2].textContent
                                    &&!messageP[3].textContent
                                    &&!messageP[4].textContent
                                    &&!messageP[5].textContent
                                    &&messageP[6].textContent
                                    &&!messageP[7].textContent
                                    &&!messageP[8].textContent){
            
                                        alert('Name:'+name.value+'\n'+
                                        'Last Name: '+lastName.value+'\n'
                                        +'DNI: '+dni.value+'\n'
                                        +'Phone: '+phone.value+'\n'+''
                                        +'Address: '+address.value+'\n'+''
                                        +'Email: '+email.value+'\n'+''
                                        +'Password: '+password.value+'\n'+''
                                        +'Repeat password: '+passwordR.value+'\n'+
                                        '**Error Email**');
                                    }else if(!messageP[0].textContent
                                        &&!messageP[1].textContent
                                        &&!messageP[2].textContent
                                        &&!messageP[3].textContent
                                        &&!messageP[4].textContent
                                        &&!messageP[5].textContent
                                        &&!messageP[6].textContent
                                        &&messageP[7].textContent){
                
                                            alert('Name:'+name.value+'\n'+
                                            'Last Name: '+lastName.value+'\n'
                                            +'DNI: '+dni.value+'\n'
                                            +'Phone: '+phone.value+'\n'+''
                                            +'Address: '+address.value+'\n'+''
                                            +'Email: '+email.value+'\n'+''
                                            +'Password: '+password.value+'\n'+''
                                            +'Repeat password: '+passwordR.value+'\n'+
                                            '**Error password**');
                                        }else if(!messageP[0].textContent
                                            &&!messageP[1].textContent
                                            &&!messageP[2].textContent
                                            &&!messageP[3].textContent
                                            &&!messageP[4].textContent
                                            &&!messageP[5].textContent
                                            &&!messageP[6].textContent
                                            &&!messageP[7].textContent
                                            &&!messageP[8].textContent){
                    
                                                alert('Name:'+name.value+'\n'+
                                                'Last Name: '+lastName.value+'\n'
                                                +'DNI: '+dni.value+'\n'
                                                +'Phone: '+phone.value+'\n'+''
                                                +'Address: '+address.value+'\n'+''
                                                +'Email: '+email.value+'\n'+''
                                                +'Password: '+password.value+'\n'+''
                                                +'Repeat password: '+passwordR.value+'\n'+
                                                '**Error Repeat password**');
                                            }

    })
 */
}
