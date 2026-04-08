const toggleBtn = document.getElementById("toggleTheme");

toggleBtn.addEventListener("click", function() {
  
  /* MANUAL TOGGLE METHOD:
     This does the exact same thing as .toggle("dark")
     but shows the step-by-step logic.
  */
  
  /*
  if (document.body.classList.contains("dark")) {
    document.body.classList.remove("dark");
  } else {
    document.body.classList.add("dark");
  }
  */

  // THE MODERN WAY:
  document.body.classList.toggle("dark");
});