const passwordInput = document.getElementById("password");
const strengthBar = document.getElementById("strengthBar");
const strengthText = document.getElementById("strengthText");

passwordInput.addEventListener("input", function(){

  const password = passwordInput.value;

  let strength = 0;

  let hasUppercase = false;
  let hasNumber = false;
  let hasSpecial = false;

  const specialChars = "@$!%*?&";

  // Loop through each character
  for(let i = 0; i < password.length; i++){

    const char = password[i];

    // Check uppercase
    if(char >= "A" && char <= "Z"){
      hasUppercase = true;
    }

    // Check number
    if(char >= "0" && char <= "9"){
      hasNumber = true;
    }

    // Check special character
    if(specialChars.includes(char)){
      hasSpecial = true;
    }
  }

  // Conditions
  if(password.length >= 6){
    strength = strength + 1;
  }

  if(hasUppercase){
    strength = strength + 1;
  }

  if(hasNumber){
    strength = strength + 1;
  }

  if(hasSpecial){
    strength = strength + 1;
  }

  // Update UI

  if(strength === 0){
    strengthBar.style.width = "0%";
    strengthBar.style.background = "red";
    strengthText.textContent = "";
  }

  else if(strength === 1){
    strengthBar.style.width = "25%";
    strengthBar.style.background = "red";
    strengthText.textContent = "Weak";
  }

  else if(strength === 2){
    strengthBar.style.width = "50%";
    strengthBar.style.background = "orange";
    strengthText.textContent = "Medium";
  }

  else if(strength === 3){
    strengthBar.style.width = "75%";
    strengthBar.style.background = "blue";
    strengthText.textContent = "Strong";
  }

  else if(strength === 4){
    strengthBar.style.width = "100%";
    strengthBar.style.background = "green";
    strengthText.textContent = "Very Strong";
  }

});