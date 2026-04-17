const items = document.querySelectorAll('.item');

items.forEach(function(item){
 
    const question = item.querySelector('.question');
    const answer = item.querySelector('.answer');

    question.addEventListener("click", function(){

        //Close all  other
        items.forEach(function(i){
            const ans = i.querySelector('.answer');
            ans.style.disply = "none";
        });

        //Open Current 
        answer.style.display = "block";
    });
});