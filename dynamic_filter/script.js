const grid = document.getElementById('grid');
const buttons = document.querySelectorAll('[data-category]');

//Data
const projects = [
    { name: "Website 1", category: "web" },
    { name: "Logo Design", category: "design" },
    { name: "Website 2", category: "web" },
    { name: "Poster", category: "design" }
];

function render(data){

    grid.innerHTML = "";

    data.forEach(function(item){

        const card = document.createElement('div');
        card.classList.add('card');
        card.textContent = item.name;

        grid.appendChild(card);
    });
}

buttons.forEach(function(btn){

    btn.addEventListener("click", function(){

        const category = btn.dataset.category;

        if(category === "all"){
            render(projects);
        } else {
            
            const filtered = projects.filter(function(item){
                return item.category === category; 
            });

            render(filtered);
        }
    });
});

//Intial UI
render(projects);