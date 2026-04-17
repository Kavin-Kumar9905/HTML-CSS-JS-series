const items = document.querySelectorAll('.item');

let currentIndex = 0;

//Update active items
function updateActive(){

    items.forEach(function(item){
        item.classList.remove('active');
    });

items[currentIndex].classList.add('active');
}

//Listen for key events
document.addEventListener("keydown", function(e){

    if(e.key === "ArrowDown"){
        
        currentIndex = currentIndex + 1;

        if(currentIndex >= items.length){
            currentIndex = 0;
        }

        updateActive();
    }

    else if(e.key === "ArrowUp"){

        currentIndex = currentIndex - 1;

        if(currentIndex < 0){
            currentIndex = items.length - 1;
        }

        updateActive();
    }
});