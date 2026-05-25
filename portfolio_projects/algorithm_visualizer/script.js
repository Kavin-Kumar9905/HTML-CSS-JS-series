const barsContainer = document.getElementById("barsContainer");
const generateBtn = document.getElementById("generateBtn");
const sortBtn = document.getElementById("sortBtn");
const speedInput = document.getElementById("speed");
const info = document.getElementById("info");

let numbers = [];


// Generate random bars
function generateBars(){

  barsContainer.innerHTML = "";
  numbers = [];

  for(let i = 0; i < 15; i++){

    const value = Math.floor(Math.random() * 300) + 20;

    numbers.push(value);

    const bar = document.createElement("div");
    bar.classList.add("bar");

    bar.style.height = value + "px";

    barsContainer.appendChild(bar);

  }

}


generateBtn.addEventListener("click", generateBars);


// Delay helper
function sleep(ms){
  return new Promise(resolve => setTimeout(resolve, ms));
}


// Bubble Sort Visualization
async function bubbleSort(){

  const bars = document.querySelectorAll(".bar");

  for(let i = 0; i < numbers.length; i++){

    for(let j = 0; j < numbers.length - i - 1; j++){

      bars[j].classList.add("active");
      bars[j + 1].classList.add("active");

      info.textContent = `Comparing ${numbers[j]} and ${numbers[j+1]}`;

      await sleep(speedInput.value);

      if(numbers[j] > numbers[j + 1]){

        // Swap numbers
        let temp = numbers[j];
        numbers[j] = numbers[j + 1];
        numbers[j + 1] = temp;

        // Swap heights
        bars[j].style.height = numbers[j] + "px";
        bars[j + 1].style.height = numbers[j + 1] + "px";

      }

      bars[j].classList.remove("active");
      bars[j + 1].classList.remove("active");

    }

    bars[numbers.length - i - 1].classList.add("sorted");

  }

  info.textContent = "Sorting Complete";

}


sortBtn.addEventListener("click", bubbleSort);


// Initial bars
generateBars();