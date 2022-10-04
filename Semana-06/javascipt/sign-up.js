window.onload=function(){

    var dob=document.getElementById('dob');
        dob.value=localStorage.getItem('dob') 
    var name=document.getElementById('Name')
        name.value=(localStorage.getItem('name'))
    var lastName=document.getElementById('LastName');
        lastName.value=(localStorage.getItem('lastName'));
    var dni=document.getElementById('dni');
        dni.value=localStorage.getItem('dni');
    var phone=document.getElementById('phone');
        phone.value=localStorage.getItem('phone');
    var address=document.getElementById('address');
        address.value=localStorage.getItem('adress');
    var location=document.getElementById('location');
        location.value=localStorage.getItem('city');
    var postalCode=document.getElementById('postal-code');
        postalCode.value=localStorage.getItem('zip');
    var email=document.getElementById('email');
        email.value=localStorage.getItem('email');
    var password=document.getElementById('password');
        password.value=localStorage.getItem('password');
    var passwordR=document.getElementById('repeat-password');
        passwordR.value=localStorage.getItem('password');
    
    
    var letters="abcdefghyjklmnñopqrstuvwxyz";

    function has_letters(text){
        for(i=0; i<text.length; i++){
            if (letters.indexOf(text.charAt(i),0)!=-1){
                return 1;
            };
        };
        return 0;
    };
    var numbers="0123456789";

    function has_numbers(text){
        for(i=0; i<text.length; i++){
            if (numbers.indexOf(text.charAt(i),0)!=-1){
                return 1;
            };
        };
        return 0;
    };
    var name=document.getElementById('Name').addEventListener('blur',function(){
        name=event.target;
        var validateN=has_letters(name.value)!=0&&has_numbers(name.value)!=1&&name.value.length>=3;
        var messageP=document.getElementsByClassName('p-sign');
        if(validateN){
            name.style.border='solid 2px green';        
            }else{
                name.style.border='solid 2px red';
                messageP[0].innerText='**Name Error :Must contain only letters and more than 3 characters**';
        }
    });
    var name =document.getElementById('Name').addEventListener('focus',function(){
        name=event.target;
        var validateN=has_letters(name.value)!=0&&has_numbers(name.value)!=1&&name.value.length>=3;
        var messageP=document.getElementsByClassName('p-sign')
        if(validateN){
            name.style.border='none';
            }else{
                name.style.border='none';
                messageP[0].innerText=' ';
        }
    });
    var lastName =document.getElementById('LastName').addEventListener('blur',function(){
        lastName=event.target;
        var validateLN=has_letters(lastName.value)!=0&&has_numbers(lastName.value)!=1&&name.value.length>=3;
        var messageP=document.getElementsByClassName('p-sign');
        if(validateLN){
            lastName.style.border='solid 2px green';
            }else{
                lastName.style.border='solid 2px red';
                messageP[1].innerText='** Last Name Error: Must contain only letters and more than 3 characters**';
        }
    });
    var lastName=document.getElementById('LastName').addEventListener('focus',function(){
        lastName=event.target;
        var validateLN=has_letters(lastName.value)!=0&&has_numbers(lastName.value)!=1&&name.value.length>=3;
        var messageP=document.getElementsByClassName('p-sign')
        if(validateLN){
            lastName.style.border='none';
            }else{
                lastName.style.border='none';
                messageP[1].innerText=' ';
        }
    });

    var dni=document.getElementById('dni').addEventListener('blur',function(){
        dni=event.target;
        var messageP=document.getElementsByClassName('p-sign');
        var validateD=has_numbers(dni.value)!=0&&has_letters(dni.value)!=1&&dni.value.length>=7;
        if(validateD){
            dni.style.border='solid 2px green';
            }else{
                dni.style.border='solid 2px red';
                messageP[2].innerText='***DNI Error: Must contain only numbers and more than 7 characters**';
        }
    });
    var dni=document.getElementById('dni').addEventListener('focus',function(){
        dni=event.target;
        var validateD=has_numbers(dni.value)!=0&&has_letters(dni.value)!=1&&dni.value.length>=7;
        var messageP=document.getElementsByClassName('p-sign')
        if(validateD){
            dni.style.border='none';
            }else{
                dni.style.border='none';
                messageP[2].innerText=' ';
        }
    });
    var phone=document.getElementById('phone').addEventListener('blur',function(){
        phone=event.target;
        var messageP=document.getElementsByClassName('p-sign')
        if(has_numbers(phone.value)!=0&&has_letters(phone.value)!=1&&phone.value.length==10){
            phone.style.border='solid 2px green';
            }else{
                phone.style.border='solid 2px red';
                messageP[4].innerText='**Phone Error: Must contain only numbers and 10 characters**';
        }
    });
    var phone=document.getElementById('phone').addEventListener('focus',function(){
        phone=event.target;
        var messageP=document.getElementsByClassName('p-sign');
        if(has_letters(phone.value)!=1&&has_numbers(phone.value)!=0&&phone.value.length==10){
            phone.style.border='none';
            }else{
                phone.style.border='none';
                messageP[4].innerText=' ';
        }
    });
    var address=document.getElementById('address').addEventListener('blur',function(){
        address=event.target;
        var messageP=document.getElementsByClassName('p-sign');
        if(has_numbers(address.value)!=0&&has_letters(address.value)!=0&&address.value.length>=5){
            address.style.border='solid 2px green';
            }else{
                address.style.border='solid 2px red';
                messageP[5].innerText='**Addres Error: Must contain numbers, letters and more than 5 characters**';
        }
    });
    var address=document.getElementById('address').addEventListener('focus',function(){
        address=event.target;
        var messageP=document.getElementsByClassName('p-sign');
        if(has_letters(address.value)!=0&&has_numbers(address.value)!=0&&address.value.length>=5){
            address.style.border='none';
            }else{
                address.style.border='none';
                messageP[5].innerText=' ';
        }
    });
    var location=document.getElementById('location').addEventListener('blur',function(){
        location=event.target;
        var messageP=document.getElementsByClassName('p-sign');
        if(has_numbers(location.value)!=1&&has_letters(location.value)!=0&&location.value.length>=5){
            location.style.border='solid 2px green';
            }else{
                location.style.border='solid 2px red';
                messageP[6].innerText='**Location Error: Must contain  letters and more than 5 characters**';
        }
    });
    var location=document.getElementById('location').addEventListener('focus',function(){
        location=event.target;
        var messageP=document.getElementsByClassName('p-sign');
        if(has_letters(location.value)!=1&&has_numbers(location.value)!=0&&location.value.length>=5){
            location.style.border='none';
            }else{
                location.style.border='none';
                messageP[6].innerText=' ';
        }
    });
    var postalCode=document.getElementById('postal-code').addEventListener('blur',function(){
        postalCode=event.target;
        var messageP=document.getElementsByClassName('p-sign');
        if(has_numbers(postalCode.value)!=0&&has_letters(postalCode.value)!=1&&postalCode.value.length>=5){
            postalCode.style.border='solid 2px green';
            }else{
                postalCode.style.border='solid 2px red';
                messageP[7].innerText='**Postal Code Error: Must contain  only numbers and more than 5 characters**';
        }
    });
    var postalCode=document.getElementById('postal-code').addEventListener('focus',function(){
        postalCode=event.target;
        var messageP=document.getElementsByClassName('p-sign')
        if(has_letters(postalCode.value)!=1&&has_numbers(postalCode.value)!=0&&postalCode.value.length>=5){
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
    });   
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
        if(has_letters(password.value)!=0&&has_numbers(password.value)!=0&&(password.value.length)>=8){
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
        if(has_letters(password.value)!=0&&has_numbers(password.value)!=0&&(password.value.length)>=8){
            password.style.border='none';
            }else{
                password.style.border='none';
                var messageP=document.getElementsByClassName('p-sign');
                messageP[9].innerText='';
        }
    });    
    var passwordR=document.getElementById('repeat-password').addEventListener('blur',function (){
        passwordR= event.target;
        var password=document.getElementById('password'); 
        if(password.value===passwordR.value){
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
        var password=document.getElementById('password');
        if(password.value===passwordR.value){
            passwordR.style.border='none';
            }else{
                passwordR.style.border='none';
                var messageP=document.getElementsByClassName('p-sign');
                messageP[10].innerText='';
        }
    });
    var submit=document.getElementById('submit').addEventListener('click', function(e){
        submit=event.target;

        e.preventDefault();

        var name=document.getElementById('Name');
        var lastName=document.getElementById('LastName');
        var dni=document.getElementById('dni');
        var phone=document.getElementById('phone');
        var addres=document.getElementById('address');
        var location=document.getElementById('location');
        var postalCode=document.getElementById('postal-code');
        var password=document.getElementById('password');
        var passwordR=document.getElementById('repeat-password');
        var email=document.getElementById('email');
        var dob=document.getElementById('dob');
        var messageP=document.getElementsByClassName('p-sign');
        var validateN=has_letters(name.value)!=0&&has_numbers(name.value)!=1&&name.value.length>=3;
        var validateLN=has_letters(lastName.value)!=0&&has_numbers(lastName.value)!=1&&name.value.length>=3;
        var validateD=has_numbers(dni.value)!=0&&has_letters(dni.value)!=1&&dni.value.length>=7;
        var validateP=has_letters(phone.value)!=1&&has_numbers(phone.value)!=0&&phone.value.length==10;
        var validateA=has_numbers(addres.value)!=0&&has_letters(addres.value)!=0&&addres.value.length>=5;
        var validateL=has_numbers(location.value)!=1&&has_letters(location.value)!=0&&location.value.length>=5;
        var validatePC=has_numbers(postalCode.value)!=0&&has_letters(postalCode.value)!=1&&postalCode.value.length>=5;
        var validateP=has_letters(password.value)!=0&&has_numbers(password.value)!=0&&(password.value.length)>=8;
        var emailRegex=/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
        var validateE=emailRegex.test(email.value);
        var validatePR=password.value===passwordR.value;
        var inputArr=[name,lastName,dni,phone,addres,location,postalCode,password,passwordR];

        function correct(){
            for(var f=0;f<inputArr.length;f++){
                if(inputArr[f].value==''){
                    return false;
                }
            }
        }

        if(correct()!=false&&validateN&&validateLN&&validateD&&validateP&&validateA&&validateL&&
            validatePC&&validateE&&validateP&&validatePR){
            alert('Name: '+name.value+'\n'+
                'Last Name: '+lastName.value+'\n'+
                'DNI: '+dni.value+'\n'+
                'Phone: '+phone.value+'\n'+
                'Address: '+addres.value+'\n'+
                'Location: '+location.value+'\n'+
                'Postal Code: '+postalCode.value+'\n'+
                'Email: '+email.value+'\n'+
                'Password: '+password.value+'\n'+
                'Repeat Password: '+passwordR.value+'\n');
                }else{
                    alert('Complete all input');
        }

        var name=name.value;
        var lastName=lastName.value;
        var dni=dni.value;
        var phone=phone.value;
        var addres=addres.value;
        var location=location.value;
        var postalCode=postalCode.value;
        var email=email.value;
        var password=password.value;
        var passwordR=passwordR.value;
        var dob=dob.value;

        
        var dateSplit = dob.split('-');
        var   dobNewFormat= dateSplit[1] + '/'+dateSplit[2]+ '/' + dateSplit[0];
    

        var url='https://basp-m2022-api-rest-server.herokuapp.com/signup?name='+name+'&lastName='+lastName+
                '&dni='+dni+'&phone='+phone+'&address='+addres+'&city='+location+'&zip='+postalCode+
                '&email='+email+'&password='+password+'&dob='+dobNewFormat;

        fetch(url)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data)
            if(data.success==true){
                alert('Successful request\n'+data.msg);
                localStorage.setItem('name',name);
                localStorage.setItem('lastName',lastName);
                localStorage.setItem('dni',dni);
                localStorage.setItem('phone',phone);
                localStorage.setItem('adress',addres);
                localStorage.setItem('city',location);
                localStorage.setItem('zip',postalCode);
                localStorage.setItem('email',email);
                localStorage.setItem('password',password);
                localStorage.setItem('dob',dob);
            }else{
                alert('wrong request\n'+data.errors.msg);
            }
        })
        .catch(function(error){
            console.log('error',error);
        })
    });
}