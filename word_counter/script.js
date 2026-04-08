const textInput = document.getElementById('textInput');
const wordCountDisplay = document.getElementById('wordCount');

textInput.addEventListener("input", function() {

  const text = textInput.value.trim();

  let words = 0;

  if(text === "") {
    words = 0;
  } else {
    
    const wordArray = text.split(" ");

    //Filter empty strings
    const filteredWords = wordArray.filter(function(word){
      return word !== "";
    });

    words = filteredWords.length;
  }

  wordCountDisplay.textContent = "Words: " + words;
});