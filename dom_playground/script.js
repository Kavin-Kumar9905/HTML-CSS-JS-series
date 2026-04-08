//Access DOM Elements
const title = document.getElementById('title');
const paragraph = document.getElementById('description');
const changeTextBtn = document.getElementById('changeText');
const changeColorBtn = document.getElementById('changeColor');
const increaseFontBtn = document.getElementById('increaseFont');
const resetBtn = document.getElementById('reset');

//Change Text
changeTextBtn.onclick = function() {
  title.textContent = "The DOM is powerful!";
};

//Change Text Color
changeColorBtn.onclick = function() {
  paragraph.style.color = "crimson";
};

//Increase Font Size
increaseFontBtn.onclick = function() {
  paragraph.style.fontSize = "22px";
};

//Reset Everything
resetBtn.onclick = function() {
  title.textContent = "Welcome to  DOM Playground";
  paragraph.style.color = "#333";
  paragraph.style.fontSize = "18px";
}