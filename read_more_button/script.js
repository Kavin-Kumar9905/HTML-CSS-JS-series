const dots = document.getElementById('dots');
const moreText = document.getElementById('more');
const btn = document.getElementById('toggleBtn');

btn.addEventListener("click", function() {

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    moreText.style.display = "none";
    btn.textContent = "Read More";
  } else {
    dots.style.display = "none";
    moreText.style.display = "inline";
    btn.textContent = "Read Less";
  }
  
});