const form = document.getElementById("form");

const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");

const userError = document.getElementById("userError");
const emailError = document.getElementById("emailError");
const passError = document.getElementById("passError");


form.addEventListener("submit", function(e){

  e.preventDefault();

  let isValid = true;

  // Username validation
  if(username.value.trim() === ""){
    userError.textContent = "Username is required";
    isValid = false;
  } else {
    userError.textContent = "";
  }

  // Email validation
  if(email.value.trim() === ""){
    emailError.textContent = "Email is required";
    isValid = false;
  } else if(!email.value.includes("@")){
    emailError.textContent = "Enter a valid email";
    isValid = false;
  } else {
    emailError.textContent = "";
  }

  // Password validation
  if(password.value.trim() === ""){
    passError.textContent = "Password is required";
    isValid = false;
  } else if(password.value.length < 6){
    passError.textContent = "Minimum 6 characters required";
    isValid = false;
  } else {
    passError.textContent = "";
  }

  // Final check
  if(isValid){
    alert("Form submitted successfully!");
  }

});