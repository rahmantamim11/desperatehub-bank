// Step - 1 : add event handler with the submit button

document.getElementById('btn-submit').addEventListener('click', function(){
//   step 2 : get the email address inside the email input field
// Always remember to use .value to get text from an input field

const emailField = document.getElementById('user-email');
const email = emailField.value;

// step 3 - get password
// * Set id on the html element/
// * get the element
// * get the value from the element
const passField = document.getElementById('user-pass');
const pass = passField.value;
console.log(email, pass);

// Danger: Do not verify email password  on the client side in this way

// Step - 4 : Verify email and password

if (email === 'desperatehub@khelbo.com' && pass === 'secret') {
    window.location.href = 'bank.html';
}

else {
    alert('Your Email/Password is Incorrect - Please Try Again');
}

})

