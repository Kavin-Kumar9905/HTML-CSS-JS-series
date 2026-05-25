const btn = document.getElementById('loadBtn');
const img = document.getElementById('animalImg');
const loading = document.getElementById('loading');

btn.addEventListener("click", async function(){

    loading.textContent = "Loading...";
    img.src = "";

    try{

        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await response.json();

        img.src = data.message;

        loading.textContent = "";
    } catch {
         
        loading.textContent = "Failed  to load image";
    }
});