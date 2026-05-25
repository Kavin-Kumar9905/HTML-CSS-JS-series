const amount = document.getElementById("amount");
const from = document.getElementById("from");
const to = document.getElementById("to");
const btn = document.getElementById("convertBtn");
const result = document.getElementById("result");
const loading = document.getElementById("loading");

btn.addEventListener("click", async function(){

    const amt = amount.value;

    if(amt === "") return;

    loading.textContent = "Converting...";
    result.textContent = "";

    try{

        const res = await fetch(`https://api.exchangerate-api.com/v4/latest/${from.value}`);
        const data = res.json();
        
        const rate = data.rates[to.value];
        const converted = (amt * rate).toFixed(2);

        loading.textContent = "";

        result.textContent = `${amt} ${from.value} = ${converted} ${to.value}`;

    } catch{

        loading.textContent = "Error fetching rates";
    }
});