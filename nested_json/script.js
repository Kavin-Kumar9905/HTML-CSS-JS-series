const input = document.getElementById('wordInput');
const btn = document.getElementById('searchBtn');
const result = document.getElementById('result');
const loading = document.getElementById('loading');

btn.addEventListener("click", async function(){

    const word = input.value.trim();

    if(word === "") return;

    loading.textContent = "Searching...";
    result.innerHTML = "";

    try {
        
        const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        const data = await res.json();

        loading.textContent = "";

        //Nested JSON
        const entry = data[0];
        const meaning = entry.meaning[0];
        const definition = meaning.definition[0].definition;

        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <p class="word">${entry.word}</p>
            <p><strong>Part Of Speech: <strong>${meaning.partOfSpeech}</p>
            <p class="meaning">${definition}</p>
        `;

        result.appendChild(card);
        
    } catch{

        loading.textContent = "Word not found or error occured";
    }
});