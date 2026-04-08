const clock = document.getElementById('clock');

function updateClock(){

  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  //Format Hours
  if(hours < 10){
    hours = "0" + hours;
  }

  //Format Minutes
  if(minutes < 10){
    minutes = "0" + minutes;
  }

  //Format Seconds
  if(seconds < 10){
    seconds = "0" + seconds;
  }

  clock.textContent = hours + ":" + minutes + ":" + seconds;
};

//Run every second
setInterval(updateClock, 1000);

//Initial  Call
updateClock();