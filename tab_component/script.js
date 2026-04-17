const buttons = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.content');

buttons.forEach(function(button){

    button.addEventListener("click", function(){

        const tabId = button.getAttribute("data-tab");

        //Remove active class 
        buttons.forEach(function(btn){
            btn.classList.remove("active");
        });

        contents.forEach(function(content){
            content.classList.remove("active");
        });

        //Activate clicked button
        button.classList.add("active");

        //Show corresponding content
        contents.forEach(function(content){
            if(content.getAttribute("data-content") === tabId){
                content.classList.add("active");
            }
        });
    });
});