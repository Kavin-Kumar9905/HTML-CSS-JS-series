const paletteContainer = document.getElementById('palette');
const button = document.getElementById('generate');

//To generate random color code
function generateColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return "rgb(" + r + "," + g + "," + b + ")";
}

//Generate Palette
button.addEventListener("click", function() {

  //Clear Previous Palette
  paletteContainer.innerHTML = "";

  const colors = [];

  //Create 5 colors
  for (let i = 0; i < 5; i++) {
    
    const color = generateColor();
    colors.push(color);

    const box = document.createElement("div");
                box.classList.add('color-box');

    box.style.background = color;
    box.textContent = color;

    paletteContainer.appendChild(box);
  }
});