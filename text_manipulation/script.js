//Select Elements
const paragraph = document.getElementById('content');
const textBtn = document.getElementById('plainText');
const htmlBtn = document.getElementById('htmlText');
const sizeBtn = document.getElementById('increaseSize');
const resetBtn = document.getElementById('reset');

//Change Using textContent
textBtn.onclick = function(){
  paragraph.textContent = 
    "This text was chnaged using textContent. It only inserts the plain text."
};

//Change using innnerHTML
htmlBtn.onclick = function(){
  paragraph.innerHTML = 
    "This text was changed using <strong>innerHTML</strong>. It can be <em>HTML elements</em>."
};

//Increase the typography scale
sizeBtn.onclick = function(){
  paragraph.style.fontSize = '26px';
};

//Reset
resetBtn.onclick = function(){
  paragraph.textContent = 
    "This paragraph will change when you click the buttons below.";
  paragraph.style.fontSize = '18px';
};