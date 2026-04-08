const button = document.getElementById("generate");
const colorText = document.getElementById("colorCode");

button.addEventListener("click", function(){

  // Generate random HEX color
  let color = "#";

  const hexChars = "0123456789ABCDEF";

  for(let i = 0; i < 6; i++){
    const randomIndex = Math.floor(Math.random() * 16);
    color = color + hexChars[randomIndex];
  }

  // Apply background
  document.body.style.background = color;

  // Display color code
  colorText.textContent = color;

});