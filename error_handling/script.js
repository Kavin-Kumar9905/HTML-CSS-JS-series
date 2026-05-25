const btn = document.getElementById("fetchBtn");
const alertBox = document.getElementById("alert");
const result = document.getElementById("result");

btn.addEventListener("click", async function(){

    alertBox.classList.add("hidden");
    result.textContent = "";

    try{

        const res = await fetch("https://invalid-url.com/data");

        if(!res.ok){
            throw new Error("Network response was not ok");
        }

        const data = await res.json();

        result.textContent = data.title;
    
    } catch(error){

        alertBox.textContent = "Something went wrong. Please try again."
        alertBox.classList.remove("hidden");
    }

});