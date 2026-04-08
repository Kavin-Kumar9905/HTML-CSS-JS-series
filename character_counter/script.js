const textInput = document.getElementById('textInput');
const countDisplay = document.getElementById('count');

textInput.addEventListener("input", function() {

  const text = textInput.value;
  const length = text.length;

  countDisplay.textContent = "Characters: " + length;
});