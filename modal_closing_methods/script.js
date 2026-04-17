const modal = document.getElementById('modal');
const openBtn = document.getElementById('openModal');
const closeBtn = document.getElementById('closeBtn');

//Open modal
openBtn.addEventListener("click", function(){
    modal.style.display = "flex";
});

//Close button
closeBtn.addEventListener("click", function(){
    modal.style.display = "none";
});

//Click to close otside
window.addEventListener("click", function(e){
    if(e.target === modal){
        modal.style.display = "none";
    }
});

//Close using Esc key
document.addEventListener("keydown", function(e){
   if(e.key === "Escape"){
    modal.style.display = "none";
   } 
});