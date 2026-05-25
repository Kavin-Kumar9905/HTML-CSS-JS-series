const input = document.getElementById('searchInput');
const list = document.getElementById('list');

const items = [
  "JavaScript",
  "HTML",
  "CSS",
  "React",
  "Node.js",
  "MongoDB"
];

//Render
function render(data) {

    list.innerHTML = "";

    data.forEach(function(item){

        const card = document.createElement('div');
        card.classList.add('card');
        card.textContent = item;

        list.appendChild(card);
    });
}

//Live search
input.addEventListener("input", function(){

    const value = input.value.toLowerCase();

    const filtered = items.filter(function(item){
        return item.toLowerCase().includes(value);
    });

    render(filtered);
});

//Initial UI
render(items);