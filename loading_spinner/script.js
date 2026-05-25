const btn = document.getElementById("loadBtn");
const spinner = document.getElementById("spinner");
const result = document.getElementById("result");

btn.addEventListener("click", async function(){

    spinner.classList.remove('hidden');
    result.textContent = "";

    try{

        const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const data = await res.json();

        result.textContent = data.title;

    } catch{

        result.textContent = "Error loading the data";

    } finally{

        spinner.classList.add("hidden");
    }
});