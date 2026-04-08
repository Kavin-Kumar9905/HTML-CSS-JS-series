const input = document.getElementById('secondsInput');
const startBtn = document.getElementById('start');
const timerDisplay = document.getElementById('timer');

let interval = null;

startBtn.addEventListener("click", function() {

  let totalSeconds = Number(input.value);

  //Clear previous timer
  if(interval !== null) {
    clearInterval(interval);
  }

  //Start Countdown
  interval = setInterval(function(){

    if(totalSeconds <= 0){
      clearInterval(interval);
      timerDisplay.textContent = "00:00";
    } else {
      
      let minutes = Math.floor(totalSeconds / 60);
      let seconds = totalSeconds % 60;

      //Format minutes
      if(minutes < 10){
        minutes = "0" + minutes;
      }

      //Format Seconds
      if(seconds < 10){
        seconds = "0" + seconds;
      }

      timerDisplay.textContent = minutes + ":" + seconds;

      totalSeconds = totalSeconds - 1;
    }
  }, 1000);
});