document.addEventListener('DOMContentLoaded', function(){

    let navbar = document.querySelector('.navbar');
    let logo = document.querySelector('.logo');
    let menu = document.querySelector('.menu');
    let toTop = document.querySelector('#toTop ');
    let toTop_text = document.querySelector('#toTop a');
    let capital = document.querySelectorAll('.contactUs .right span h3');
    let map = document.querySelectorAll('.mapouter');
    let form = document.getElementById('form');
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let number = document.getElementById('number');
    let address = document.getElementById('address');
   let leftContent = document.querySelector('.container .contactUs .left');
    let position_leftContent = leftContent.offsetTop - 100
    


    
    window.addEventListener('scroll',function(){
        if(window.pageYOffset > 0){
            navbar.classList.add('navbar-fixed');
            logo.classList.add('logo-fixed');
            menu.classList.add('menu-fixed');
            toTop.classList.add('slideUp')
            
        }
        else {
            navbar.classList.remove('navbar-fixed');
            logo.classList.remove('logo-fixed');
            menu.classList.remove('menu-fixed');
            toTop.classList.remove('slideUp')
            
        }
    })
    // click bottom button 
   toTop_text.onclick = function (e){
       e.preventDefault()
       window.scrollTo({
           top:0,
           behavior:'smooth'
       })
   }

capital[0].onclick = function (){
    capital[1].classList.remove('active');
    capital[0].classList.add('active');
    map[1].classList.remove('appear');
    map[0].classList.add('appear');
    }
    
capital[1].onclick = function (){
    capital[0].classList.remove('active');
    capital[1].classList.add('active');
    map[0].classList.remove('appear');
    map[1].classList.add('appear');
    }

    // validaton
function test(value){
    return value.trim()? undefined : 'Vui lòng nhập trường này'
}

let errorName = name.parentElement.querySelector('small');
if(name){
    name.onblur = function(){
        errorMessage = test(name.value)
        if(errorMessage){
            errorName.innerText = errorMessage
            name.classList.add('error');
            errorName.classList.add('error')
        }
        name.oninput = function(){
            errorName.innerText = ''
            name.classList.remove('error');
            errorName.classList.remove('error')
        }
    }
}
// name
function validateEmail(){
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return regex.test(email.value)? undefined : 'Trường này phải là email'
}
let errorEmail = email.parentElement.querySelector('small');
if(email){
    email.onblur = function(){
        errorMessage = test(email.value)
        if(errorMessage){
            errorEmail.innerText = errorMessage
            email.classList.add('error');
            errorEmail.classList.add('error')
        }

        mustEmail = validateEmail(email.value)
        if(mustEmail){
            errorEmail.innerText = mustEmail
            email.classList.add('error');
            errorEmail.classList.add('error')
        }

        email.oninput = function(){
            errorEmail.innerText = ''
            email.classList.remove('error');
            errorEmail.classList.remove('error')
        }
    }
}
// email
function litmitNumber(number,min){
    return number.value.length >= min? undefined : `Số điện thoại tối thiểu ${min} kí tự`
}

let errorNumber = number.parentElement.querySelector('small');
if(number){
    number.onblur = function(){
        errorMessage = test(number.value)
        if(errorMessage){
            errorNumber.innerText = errorMessage
            number.classList.add('error');
            errorNumber.classList.add('error')

         
        }
        errorLimit = litmitNumber(number,10)
        if(errorLimit){
            errorNumber.innerText = errorLimit
            number.classList.add('error');
            errorNumber.classList.add('error')
        }
    }
    number.oninput = function(){
        errorNumber.innerText = ''
        number.classList.remove('error');
        errorNumber.classList.remove('error')
    }
   
}
// number
let errorAddress = address.parentElement.querySelector('small');
if(address){
    address.onblur = function(){
        errorMessage = test(address.value)
        if(errorMessage){
            errorAddress.innerText = errorMessage
            address.classList.add('error');
            errorAddress.classList.add('error')
        }
        address.oninput = function(){
            errorAddress.innerText = ''
            address.classList.remove('error');
            errorAddress.classList.remove('error')
        }
    }
}
// adress

    form.onsubmit = function(e){
        e.preventDefault()
        window.scrollTo({
            top:position_leftContent,
            behavior:'smooth'
        })
        if(name.value == ''){
            errorMessage = test(name.value)
            errorName.innerText = errorMessage
            name.classList.add('error');
            errorName.classList.add('error')
            
            name.oninput = function(){
                errorName.innerText = ''
                name.classList.remove('error');
                errorName.classList.remove('error')
            }
        }
        if(email.value == ''){
            errorMessage = test(email.value)
            errorEmail.innerText = errorMessage
            email.classList.add('error');
            errorEmail.classList.add('error')

            email.oninput = function(){
                errorEmail.innerText = ''
                email.classList.remove('error');
                errorEmail.classList.remove('error')
            }
            
        }
        if(number.value == ''){
            errorMessage = test(number.value)
            errorNumber.innerText = errorMessage
            number.classList.add('error');
            errorNumber.classList.add('error')

            number.oninput = function(){
                errorNumber.innerText = ''
                number.classList.remove('error');
                errorNumber.classList.remove('error')
            }
         
            
        }
        if(address.value == ''){
            errorMessage = test(address.value)
            errorAddress.innerText = errorMessage
            address.classList.add('error');
            errorAddress.classList.add('error')

            address.oninput = function(){
                errorAddress.innerText = ''
                address.classList.remove('error');
                errorAddress.classList.remove('error')
            }
            return false
        }

        let h2 = document.createElement('h2');
        h2.innerHTML = 'Cảm ơn quý khách khàng đã gửi thông tin đến House Design. Chúng tôi sẽ liên hệ với bạn sớm!';
        leftContent.appendChild(h2)

        form.style.display = 'none'
     
    }

   
   
})