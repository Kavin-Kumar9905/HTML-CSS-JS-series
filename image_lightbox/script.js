const gallery = document.getElementById("gallery");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");


// Event delegation for images
gallery.addEventListener("click", function(e){

  if(e.target.tagName === "IMG"){

    lightbox.style.display = "flex";
    lightboxImg.src = e.target.src;

  }

});


// Close lightbox on click
lightbox.addEventListener("click", function(){
  lightbox.style.display = "none";
});