const list = document.getElementById('list');
const sortAZ = document.getElementById('sortAZ');
const sortZA = document.getElementById('sortZA');

let items = [
  "JavaScript",
  "HTML",
  "CSS",
  "React",
  "Node.js"
];

//Render
function render(){

    list.innerHTML = "";

    items.forEach(function(item){

        const li = document.createElement('li');
        li.textContent = item;
        
        list.appendChild(li);
    });
}

//Sort A - Z
sortAZ.addEventListener("click", function(){

    items.sort(function(a, b){
        return a.localeCompare(b);
    });

    render();
});

///Sort Z - A
sortZA.addEventListener("click", function(){

    items.sort(function(a, b){
        return b.localeCompare(a);
    });

    render();
});

render();