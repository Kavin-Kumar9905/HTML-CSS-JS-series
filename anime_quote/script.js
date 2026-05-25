const input = document.getElementById('searchinput');
const btn = document.getElementById('searchBtn');
const result = document.getElementById('result');
const loading = document.getElementById(loading);

btn.addEventListener("click", async function(){

    const query = input.value.trim();

    if(query === "") return;

    loading.textContent = "Searching...";
    result.innerHTML = "";

    try{

        const response = await fetch(`https://api.animechan.io/v1/quotes/random?anime=${query}`);
        const data = await response.json();

        //API returns array
        const quote = data[0];

        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <p class="quote">"${quote.quote}"</p>
            <p class="character">"${quote.character}"</p>
        `;

        result.appendChild(card);
    } catch{
        
        loading.textContent = "No quotes found or error occured";
    }
});