const button = document.getElementById('toggleBtn');
const menu = document.getElementById('menu');

//Toggle Menu
button.addEventListener("click", function(){

    if(menu.style.display === "block"){
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
});

//Close when clicking outside
document.addEventListener("click", function(e){

    if(!button.contains(e.target) && !menu.contains(e.target)){
        menu.style.display = "none";
    }
});