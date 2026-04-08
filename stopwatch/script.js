const timeDisplay = document.getElementById("time");

const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

let seconds = 0;
let minutes = 0;
let hours = 0;

let interval = null;
let isRunning = false;


// Update display
function updateDisplay(){

  let h = hours;
  let m = minutes;
  let s = seconds;

  if(h < 10){
    h = "0" + h;
  }

  if(m < 10){
    m = "0" + m;
  }

  if(s < 10){
    s = "0" + s;
  }

  timeDisplay.textContent = h + ":" + m + ":" + s;
}


// Start
startBtn.addEventListener("click", function(){

  if(isRunning === false){

    isRunning = true;

    interval = setInterval(function(){

      seconds = seconds + 1;

      if(seconds === 60){
        seconds = 0;
        minutes = minutes + 1;
      }

      if(minutes === 60){
        minutes = 0;
        hours = hours + 1;
      }

      updateDisplay();

    }, 1000);
  }

});


// Stop
stopBtn.addEventListener("click", function(){

  if(isRunning === true){
    clearInterval(interval);
    isRunning = false;
  }

});


// Reset
resetBtn.addEventListener("click", function(){

  clearInterval(interval);

  seconds = 0;
  minutes = 0;
  hours = 0;

  isRunning = false;

  updateDisplay();

});