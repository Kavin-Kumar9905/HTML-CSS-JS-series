const input = document.getElementById('searchInput');
const btn = document.getElementById('searchBtn');
const grid = document.getElementById('grid');
const loading = document.getElementById('loading');

btn.addEventListener("click", async function(){

    const query = input.value.trim();

    if(query === "") return;

    loading.textContent = "Searching....";
    grid.innerHTML = "";

    try{

        const res = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
        const data = await res.json();

        loading.textContent = "";

        if(data.length === 0){
            grid.innerHTML = "<p>No Results Found</p>";
            return;
        }

        data.forEach(function(item){

            const show = item.show;

            const card = document.createElement('div');
            card.classList.add('card');

            card.innerHTML = `
                <img src="${show.image ? show.image.medium : ""}">
                <div class="card-body">
                    <p>${show.name}</p>
                    <small>${show.premiered || "NA"}</small>
                </div>
            `;

            grid.appendChild(card);
        });
    } catch{

        loading.textContent = "Error fetching Data";
    }
});