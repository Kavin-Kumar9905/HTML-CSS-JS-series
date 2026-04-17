const slide = document.getElementById('slide');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

//Image List
const images = [   
    "https://picsum.photos/seed/1/600/300",
    "https://picsum.photos/seed/2/600/300",
    "https://picsum.photos/seed/3/600/300",
    "https://picsum.photos/seed/4/600/300"
];

let currentIndex = 0;

//Update Image
function updateImage(){
    slide.src = images[currentIndex];
}

//Next Button
nextBtn.addEventListener("click", function(){

    currentIndex = currentIndex + 1;

    if(currentIndex >= images.length){
        currentIndex = 0;
    }

    updateImage();
});

//Previous Button
prevBtn.addEventListener("click", function(){

    currentIndex = currentIndex - 1;

    if(currentIndex < 0){
        currentIndex = images.length - 1;
    }

    updateImage();
});