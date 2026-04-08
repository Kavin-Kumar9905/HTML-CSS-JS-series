const counters = document.querySelectorAll('.counter');

counters.forEach(function(counter){

  let count = 0;

  const countDisplay = counter.querySelector('.count');
  const increaseBtn = counter.querySelector('.increase');
  const decreaseBtn = counter.querySelector('.decrease');

  //Incresae
  increaseBtn.addEventListener("click", function(){
    count = count + 1;
    countDisplay.textContent = count;
  });

  //Decrease
  decreaseBtn.addEventListener("click", function(){
    count = count - 1;
    countDisplay.textContent = count;
  });

});