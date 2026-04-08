const button = document.getElementById('generate');
const colorText = document.getElementById('colorCode');

button.addEventListener("click", function() {

  //Random Colors Generation
  const r1 = Math.floor(Math.random() * 256);
  const g1 = Math.floor(Math.random() * 256);
  const b1 = Math.floor(Math.random() * 256);

  const r2 = Math.floor(Math.random() * 256);
  const g2 = Math.floor(Math.random() * 256);
  const b2 = Math.floor(Math.random() * 256);

  //Create Gradient
  const gradient = 
    `linear-gradient(135deg, rgb(${r1}, ${g1}, ${b1}), rgb(${r2}, ${g2}, ${b2}))`;

  //Apply Gradient
  document.body.style.background = gradient;

  //Show the color values
  colorText.textContent = 
    `Gradient: (135deg, rgb(${r1}, ${g1}, ${b1}), rgb(${r2}, ${g2}, ${b2})`;
});
