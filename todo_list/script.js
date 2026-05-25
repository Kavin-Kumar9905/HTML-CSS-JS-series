const input = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const list = document.getElementById('taskList');
const filterBtns = document.querySelectorAll('[data-filter]');
const themeToggle = document.getElementById('themeToggle');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
let currentFilter = 'all';

//Save Tasks
function saveTasks(){
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

//Render tasks
function renderTasks(){

    list.innerHTML = "";

    let filtered = tasks;

    if(currentFilter === "completed"){
        filtered = tasks.filter(t => t.completed);
    }

    if(currentFilter === "pending"){
        filtered = tasks.filter(t => !t.completed);
    }

    filtered.forEach(function(task, index){

        const li = document.createElement("li");
        li.draggable = true;

        if(task.completed){
            li.classList.add("completed");
        }

        const span = document.createElement('span');
        span.textContent = task.text;

        //Toggle Button
        span.addEventListener("click", function(){
            task.completed = !task.completed;
            saveTasks();
            renderTasks();
        });

        //Delete Button
        const del = document.createElement("button");
        del.textContent = "X";

        del.addEventListener("click", function(){
            tasks.splice(index, 1);
            saveTasks();
            renderTasks();
        });

        //Edit
        span.addEventListener("dblclick", function(){

            const inputEdit = document.createElement("input");
            inputEdit.value = task.text;

            li.replaceChild(inputEdit, span);

            inputEdit.addEventListener("blur", function(){
                task.text = inputEdit.value;
                saveTasks();
                renderTasks();
            });
        });

        li.appendChild(span);
        li.appendChild(del);
        li.appendChild(li);
    });
}

//Add Task
addBtn.addEventListener("click", function(){

    if(input.value.trim() === "") return;

    task.push({
        text: input.value,
        completed: false
    });

    input.value = "";
    saveTasks();
    renderTasks();
});

//Filter
filterBtns.forEach(function(btn){

    btn.addEventListener("click", function(){
        currentFilter = btn.dataset.filter;
        renderTasks();
    });
});

//Theme Toggle
themeToggle.addEventListener("click", function(){

    document.body.classList.toggle("dark");

    localStorage.setItem(
        "theme",
        document.body.classList.contains("dark")
    );
});

//Load theme
if(localStorage.getItem("theme") === "true"){
    document.body.classList.add("dark");
}

//Initail render
renderTasks();