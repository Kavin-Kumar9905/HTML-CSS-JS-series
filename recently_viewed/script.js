const cards = document.querySelectorAll('.card');
const recentList = document.getElementById('recentList');

let recent = JSON.parse(localStorage.getItem("recent")) || [];

//Save
function save(){
    localStorage.setItem("recent", JSON.stringify(recent));
}

//Render
function render(){

    recentList.innerHTML = "";

    recent.forEach(function(item){

        const li = document.createElement("li");
        li.textContent = item;

        recentList.appendChild(li);
    });
}

//Click on product
cards.forEach(function(card){

    card.addEventListener("click", function(){

        const name = card.dataset.name;

        //Remove if already exists
        recent = recent.filter(function(item){
            return item !== name;
        });

        //Add to front
        recent.unshift(name);

        //Limit to 5 items
        if(recent.length > 5){
            recent.pop();
        }

        save();
        render();
    });
});

//Initial
render();