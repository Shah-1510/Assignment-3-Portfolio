// Auto input
var typed = new Typed(".auto-input", {
    strings: ["DATA ANALYST","WEB DEVELOPER", "BUSINESS ANALYST"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
})


// Scroll to Top
const totop = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
   if (window.pageYOffset > 100){
       totop.classList.add("active");
   }else{
       totop.classList.remove("active");
   }

})



const usernamevalidation = document.querySelector('#username');
const emailEl = document.querySelector('#email');
const passwordEl = document.querySelector('#password');
const confirmPasswordEl = document.querySelector('#confirm-password');
const form = document.querySelector('#signup');

let submit = document.getElementById("submitBtn");
submit.addEventListener("click", () => {
    if (usernamevalidation.value=="")
    {  
      alert("Enter full name.");  
       return false;  
    }
    else if (emailEl.value==null || emailEl.value=="")
    {  
      alert("Enter your email address.");  
      return false;  
    }
    else if(passwordEl.value == null || passwordEl.value=="" )
    {
    alert("Please Enter Password")
    }
    else if(confirmPasswordEl.value== null || confirmPasswordEl.value=="" )
    {
    alert("Please Enter Confirm Password Field")
    }
    else
    {
        alert("Thankyou for contacting me!")
        return true;
    }
});



const checkUsername = () => {
    let valid = false;
    const min = 3,
        max = 25;
    const username = usernamevalidation.value.trim();
    if (!isRequired(username)) {
        showError(usernamevalidation, 'please enter user name.');
    } else if (!isBetween(username.length, min, max)) {
        showError(usernamevalidation, `Username must be between ${min} and ${max} characters.`)
    } else {
        showSuccess(usernamevalidation);
        valid = true;
    }
    return valid;
};


const checkEmail = () => {
    let valid = false;
    const email = emailEl.value.trim();
    if (!isRequired(email)) {
        showError(emailEl, 'pelase enter a email.');
    } else if (!isEmailValid(email)) {
        showError(emailEl, 'plz enter a valid email that cotains special characters also.')
    } else {
        showSuccess(emailEl);
        valid = true;
    }
    return valid;
};

const checkPassword = () => {
    let valid = false;


    const password = passwordEl.value.trim();

    if (!isRequired(password)) {
        showError(passwordEl, 'Please enter a password.');
    } else if (!isPasswordSecure(password)) {
        showError(passwordEl, 'Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters');
    } else {
        showSuccess(passwordEl);
        valid = true;
    }

    return valid;
};

const checkConfirmPassword = () => {
    let valid = false;
    // check confirm password
    const confirmPassword = confirmPasswordEl.value.trim();
    const password = passwordEl.value.trim();

    if (!isRequired(confirmPassword)) {
        showError(confirmPasswordEl, 'Please enter the password again');
    } else if (password !== confirmPassword) {
        showError(confirmPasswordEl, 'The password does not match');
    } else {
        showSuccess(confirmPasswordEl);
        valid = true;
    }

    return valid;
};

const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const isPasswordSecure = (password) => {
    const re = new RegExp("(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}");
    return re.test(password);
};

const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;


const showError = (input, message) => {
    const formField = input.parentElement;
    formField.classList.remove('success');
    formField.classList.add('error');
    const error = formField.querySelector('small');
    error.textContent = message;
};

const showSuccess = (input) => {
    const formField = input.parentElement;
    formField.classList.remove('error');
    formField.classList.add('success');
    const error = formField.querySelector('small');
    error.textContent = '';
}


form.addEventListener('submit', function (e) {
    e.preventDefault();
    let isUsernameValid = checkUsername(),
        isEmailValid = checkEmail(),
        isPasswordValid = checkPassword(),
        isConfirmPasswordValid = checkConfirmPassword();

    let isFormValid = isUsernameValid &&
        isEmailValid &&
        isPasswordValid &&
        isConfirmPasswordValid;
    if (isFormValid) {

    }
});
const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
        // cancel the previous timer
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        // setup a new timer
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};
form.addEventListener('input', debounce(function (e) {
    switch (e.target.id) {
        case 'username':
            checkUsername();
            break;
        case 'email':
            checkEmail();
            break;
        case 'password':
            checkPassword();
            break;
        case 'confirm-password':
            checkConfirmPassword();
            break;
    }
}));

