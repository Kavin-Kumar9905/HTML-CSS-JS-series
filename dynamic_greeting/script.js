const greeting = document.getElementById('greeting');
const timeText = document.getElementById('time');

//Get currennt date and time
const now = new Date();
const hours = now.getHours();
const minutes = now.getMinutes();

let formattedMinutes;

//Format minutes
if (minutes < 10) {
    formattedMinutes = "0" + minutes;
} else {
    formattedMinutes = minutes;
}

//Display Time
timeText.textContent = "Current Time: " + hours + ":" + formattedMinutes;

//Dynamic Greeting
if (hours < 12) {
    greeting.textContent = "Good Morning";
} else if (hours < 18) {
    greeting.textContent = "Good Afternoon";
} else {
    greeting.textContent = "Good Night";
}