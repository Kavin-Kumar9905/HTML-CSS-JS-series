const btn = document.getElementById("loadBtn");
const list = document.getElementById("list");
const loading = document.getElementById("loading");


btn.addEventListener("click", function(){

  loading.textContent = "Loading...";
  list.innerHTML = "";

  fetch("https://jsonplaceholder.typicode.com/users")
    .then(function(response){
      return response.json();
    })
    .then(function(data){

      loading.textContent = "";

      data.forEach(function(user){

        const li = document.createElement("li");
        li.textContent = user.name;

        list.appendChild(li);

      });

    })
    .catch(function(){
      loading.textContent = "Error loading data";
    });

});