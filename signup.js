const userName = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');
const form = document.querySelector('#signup');
const min = 3;
const max = 25;
const firstname = document.querySelector('#firstname');
const telephone = document.querySelector('#phonenumber');



const checkUserName = ()=>{
    let valid = false;
    
    let trimmed_username = userName.value.trim();
    let alpha = /^[0-9a-zA-Z]+$/ ;
    

    if(trimmed_username == ''){
        alert("Please Release us");
        userName.style.border = "2px solid green";
        return false;
    }

    if(trimmed_username.length < min || trimmed_username.length>max){
        alert('UserName characters not in range');
        userName.style.border = "2px solid yellow";
        return false;
    }

    if(trimmed_username.match(alpha)){
        firstname.focus();
        return true
    } else {
        userName.style.border = "2px solid cyan";
        alert('Your name doesnt match the alpha numeric standard');
        return false;
    }
}


// const showSuccess = (input) => {
//     // get the form-field element
//     const formField = input.parentElement;

//     // remove the error class
//     formField.classList.remove('error');
//     formField.classList.add('success');

//     // hide the error message
//     const error = formField.querySelector('small');
//     error.textContent = '';
// }

// const showError = (input, message) => {
//     // get the form-field element
//     const formField = input.parentElement;
//     // add the error class
//     formField.classList.remove('success');
//     formField.classList.add('error');

//     // show the error message
//     const error = formField.querySelector('small');
//     error.textContent = message;
// };

// form.addEventListener('click', checkUserName);

// checking password
const checkPassword = ()=>{
    const pass_wrd = password.value;
    const confirm_pwd = confirmPassword.value;

    if(pass_wrd == "" || confirm_pwd == ""){
        alert("Password cannot be empty");
        password.style.border = "3px solid red";
        confirmPassword.style.border = "3px solid red";
        return false;
    }

    if(pass_wrd != confirmPassword){
        alert('Passwords  do not match!');
        password.style.border = "3px solid red";
        confirmPassword.style.border = "3px solid red";
        return false;
    }
    // Regular expressions
    // alphabet /^[A-Za-z]+$/  
    // alphanumeric /^[0-9a-zA-Z]+$/ 
    // Numbers /^[0-9]+$/
    // email /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
}

const checkFirstName = ()=>{
    let first_name = firstname.value.trim();
    let alphabet = /^[A-Za-z]+$/  ;

    if(first_name.match(alphabet)){
        telephone.focus();
    } else {
        firstname.style.border = "2px solid orange";
        alert('The first name doesnt match the alphabet');
    }
}