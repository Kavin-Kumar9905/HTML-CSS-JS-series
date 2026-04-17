const slide = document.getElementById('slide');

//image array
const images = [
    "https://picsum.photos/seed/1/600/300",
    "https://picsum.photos/seed/2/600/300",
    "https://picsum.photos/seed/3/600/300",
    "https://picsum.photos/seed/4/600/300"
];

let currentIndex =  0;

//Update image
function updateImage(){
     slide.style.opacity = "0";

     setTimeout(function(){

        slide.src = images[currentIndex];
        slide.style.opacity = "1";

     }, 300)
}

//Auto change every 3 seconds
setInterval(function(){

    currentIndex = currentIndex + 1;

    if(currentIndex >= images.length){
        currentIndex = 0;
    }

    updateImage();
    
}, 3000);