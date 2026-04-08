const title = document.querySelector('.title');
const text = document.querySelector('.description');
const colorBtn = document.querySelector('#changeColor');
const boldBtn = document.querySelector('#makeBold');
const upperBtn = document.querySelector('#uppercase');
const resetBtn = document.querySelector('#reset');

//Change Color
colorBtn.onclick = function() {
    text.style.color = "blue";
};


//Make Text Bold
boldBtn.onclick = function() {
    text.style.fontWeight = "bold";
};

//To Convert text to uppercase
upperBtn.onclick = function() {
    text.style.textTransform = "uppercase";
};

//Reset Styles
resetBtn.onclick = function() {
    text.style.color = "#333";
    text.style.fontWeight = "normal";
    text.style.textTransform = "none";
};