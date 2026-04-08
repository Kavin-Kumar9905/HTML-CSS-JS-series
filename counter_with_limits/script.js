let count = 0;

const countDisplay = document.getElementById('count');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const message = document.getElementById('message');

const MAX = 10;
const MIN = 0;

//Update UI based on state
function updateUI() {

  countDisplay.textContent = count;

  //Disable buttons based on limits
  if(count === MAX){
    increaseBtn.disabled = true;
    message.textContent = "Maximum limit reached";
  } else {
    increaseBtn.disabled = false;
    message.textContent = "";
  }

  if(count === MIN){
    decreaseBtn.disabled = true;
  } else {
    decreaseBtn.disabled = false;
  }
}

//Increase BTN
increaseBtn.addEventListener("click", function() {
  if(count < MAX) {
    count = count + 1;
    updateUI();
  }
});

//Decrease BTN
decreaseBtn.addEventListener("click", function() {
  if(count > MIN){
    count = count - 1;
    updateUI();
  }
});

//Initial UI
updateUI();