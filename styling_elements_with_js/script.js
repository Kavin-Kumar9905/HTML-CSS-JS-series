//Select Elements
const title = document.getElementById('title');
const text = document.getElementById('text');
const redBtn = document.getElementById('red');
const blueBtn = document.getElementById('blue');
const gradientBtn = document.getElementById('gradient');
const resetBtn = document.getElementById('reset');

//Apply red theme
redBtn.onclick = function() {
  document.body.style.backgroundColor = '#ffebee';
  title.style.color = '#c62828';
  text.style.color = '#b71c1c';
}

//Apply  blue theme
blueBtn.onclick = function() {
  document.body.style.backgroundColor = 'rgb(227, 242, 253)';
  title.style.color = 'rgb(13, 71, 161)';
  text.style.color = 'rgb(25, 118, 210)';
}

//Apply gradient background
gradientBtn.onclick = function() {
  document.body.style.background = 'linear-gradient(135deg, #667eea, #764ba2)';
  title.style.color = '#333';
  text.style.color = '#333';
}

//Reset button
resetBtn.onclick = function() {
  document.body.style.background = '#f5f5f5';
  title.style.color = 'black';
  text.style.color = '#333';
}