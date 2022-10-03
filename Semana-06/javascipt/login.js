window.onload= function(){

    var letters="abcdefghyjklmnñopqrstuvwxyz";
    
    function has_letters(text){
        for(i=0; i<text.length; i++){
            if (letters.indexOf(text.charAt(i),0)!=-1){
                return 1;
            }
        }
        return 0;
    }
    var numbers="0123456789";

    function has_numbers(text){
        for(i=0; i<text.length; i++){
            if (numbers.indexOf(text.charAt(i),0)!=-1){
                return 1;
            }
        }
        return 0;
    };    
    var email=document.getElementById('email').addEventListener('blur',function(){
        email= event.target;
        var emailRegex=/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/; 
        if(emailRegex.test(email.value)){
                email.classList.add('green-border');
            }else{
                email.classList.add('red-border');
                var messageE=document.getElementsByClassName('p');
                messageE[0].classList.add('p-login');
                messageE[0].innerText='Email error Ex:email1@gmail.com';
        }
    }); 
    var email=document.getElementById('email').addEventListener('focus', function(){
        email= event.target;
        var emailRegex=/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
        if(emailRegex.test(email.value)){
            email.classList.remove('green-border');
            }else{
                email.classList.remove('red-border');
                var messageE=document.getElementsByClassName('p');
                messageE[0].classList.remove('p-login');
                messageE[0].innerText='';
            }
    });
    var password=document.getElementById('password').addEventListener('blur',function (){
        password= event.target; 
        if(has_letters(password.value)!=0&&has_numbers(password.value)!=0&&(password.value.length)>=8){
            password.classList.add('green-border');
        }else{
            password.classList.add('red-border');
            var messageP=document.getElementsByClassName('p');
            messageP[1].classList.add('p-login');
            messageP[1].innerText='Password error: use numbers ,letters\nand more than 8 characters';
        }  
    }); 
    var password=document.getElementById('password').addEventListener('focus', function(){
        password= event.target;
        if(has_letters(password.value)!=0&&has_numbers(password.value)!=0&&(password.value.length)>=8){
            password.classList.remove('green-border');
            }else{
                password.classList.remove('red-border');
                var messageP=document.getElementsByClassName('p');
                messageP[1].classList.remove('p-login');
                messageP[1].innerText='';
            }
    });        
    var submit =document.getElementById('submit').addEventListener('click', function(e){
        e.preventDefault();
        var emailRegex=/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/; 
        var email=document.getElementById('email');
        var password=document.getElementById('password');
        var doubleValidate=emailRegex.test(email.value)&&has_letters(password.value)!=0&&
            has_numbers(password.value)!=0&&(password.value.length)>=8;
        if(doubleValidate){
            alert('Email: '+email.value+'\n'+'Password :'+password.value);
        }else if(emailRegex.test(email.value)){
            alert('Email: '+email.value+'\n'+'Password :'+password.value+
            '\nPassword error: use numbers, letters \nand more than 8 characters');
        }else if(has_letters(password.value)!=0&&has_numbers(password.value)!=0&&(password.value.length)>=8){
            alert('Email: '+email.value+'\n'+'Password :'+password.value+'\n**Email error Ex:email1@gmail.com**');
        };    
        if(doubleValidate){
            var emailLogin=email.value;
            var passwordLogin=password.value;
            var url='https://basp-m2022-api-rest-server.herokuapp.com/login?email='+emailLogin+'&password='+passwordLogin;

            fetch(url)
                .then(function(response){
                    return response.json();
                })
                .then(function(data){
                    console.log(data);
                    if(data.success==true){
                        alert('Successful request'+'\n'+data.msg);
                    }else{
                        alert('wrong request'+'\n'+data.msg);
                    }
                })
                .catch(function(error){
                    console.log('error',error);
                });
        }
    });
}