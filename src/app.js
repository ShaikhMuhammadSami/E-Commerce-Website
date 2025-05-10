//////////// Login and Singup switch starts
const loginContainer = document.querySelectorAll('.js-login-container')[0];
const signupContainer = document.querySelectorAll('.js-signup-container')[0];

function loginSwitch(){
    signupContainer.classList.add('hidden');    
    loginContainer.classList.remove('hidden');
}

function signupSwitch(){
    signupContainer.classList.remove('hidden');
    loginContainer.classList.add('hidden')
}
///////////// Login and Singup switch Ends


////////////// Creating Signup fucntion  

const loginEmail = document.querySelectorAll('.js-login-email')[0];
const loginPass = document.querySelectorAll('.js-login-pass')[0];
const signupText = document.querySelectorAll('.js-signup-text')[0];
const signupEmail = document.querySelectorAll('.js-signup-email')[0];
const signupPass1 = document.querySelectorAll('.js-signup-pass-1')[0];
let signupCheckbox = document.querySelector('#termsAndConditions');


let users = JSON.parse(localStorage.getItem('usersInfo')) || [];

function singup(){
    if(signupText.value === "" || signupEmail.value === "" || signupPass1.value === ""){
        Swal.fire("Error : Fill All The Sections");
        return
    }
    let textVal = signupText.value;
    let emailVal = signupEmail.value;
    let pass1Val = signupPass1.value;
    
    let newUsers = {
        name : textVal,
        email : emailVal,
        pass1 : pass1Val,
    }

    if(pass1Val.length <= 6){
        Swal.fire("Enter More The 6 Characters in Password");
        return;
    }else if(!signupEmail.value.includes('@') || !signupEmail.value.includes('.')){
        signupEmail.value = '@ or . is missing Enter Correct Email';
        signupEmail.style.color = 'red';
        setTimeout(() => {
            signupEmail.value = '';
            signupEmail.style.color = 'black';
        }, 2500)
    }else if(!signupCheckbox.checked){
        Swal.fire("Plese Select Terms and Conditions");
        return
    }else{
        for(let i = 0; i < users.length; i++){
            if(users[i].email === signupEmail.value){
                signupEmail.value = 'This Email already exits';
                signupEmail.style.color = 'red';
                setTimeout(() => {
                    signupEmail.value = '';  
                    signupEmail.style.color = 'black';
                },2000)
                return
            }else{

            }
        }
        users.push(newUsers);
        localStorage.setItem('usersInfo', JSON.stringify(users));
        signupEmail.value = '';
        signupText.value = '';
        signupPass1.value = '';
        location = "products/products.html"
    }

}

// //////////////////  Login Function Logic

function login(){
    let matchedEmilPass = users.some((user) => loginEmail.value === user.email && loginPass.value === user.pass1);
    if(matchedEmilPass){
        loginEmail.value = ''
        loginPass.value = ''
        location = "products/products.html"
        return
    }  
    if(loginEmail.value === '' || loginPass === ''){
        Swal.fire("Error : Fill All The Sections");
        return
    }
    users.forEach((user) => {
        if(user.email !== loginEmail.value){
            Swal.fire("Error : This Email does not Exists");
            return
        }else if(user.pass1 !== loginPass.value){
            Swal.fire("Error : Incorrect Password");
            return
        }
    });    
}
