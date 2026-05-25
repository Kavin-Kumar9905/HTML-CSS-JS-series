const countEl = document.getElementById("count");
const themeEl = document.getElementById("theme");
const historyList = document.getElementById("historyList");

const incrementBtn = document.getElementById("incrementBtn");
const toggleBtn = document.getElementById("toggleBtn");
const undoBtn = document.getElementById("undoBtn");
const redoBtn = document.getElementById("redoBtn");


// App State
let state = {
  count:0,
  dark:false
};


// History
let history = [];
let redoStack = [];


// Save state snapshot
function saveState(action){

  history.push({
    action:action,
    state:JSON.parse(JSON.stringify(state))
  });

  renderHistory();

}


// Render UI
function render(){

  countEl.textContent = state.count;

  if(state.dark){
    themeEl.textContent = "Dark";
    document.body.classList.add("dark");
  } else {
    themeEl.textContent = "Light";
    document.body.classList.remove("dark");
  }

}


// Render history
function renderHistory(){

  historyList.innerHTML = "";

  history.forEach(function(item, index){

    const div = document.createElement("div");
    div.classList.add("history-item");

    div.innerHTML = `
      <strong>${index + 1}. ${item.action}</strong>
      <p>Count: ${item.state.count}</p>
      <p>Theme: ${item.state.dark ? "Dark" : "Light"}</p>
    `;

    historyList.prepend(div);

  });

}


// Increment
incrementBtn.addEventListener("click", function(){

  saveState("Increment");

  state.count++;

  redoStack = [];

  render();

});


// Toggle theme
toggleBtn.addEventListener("click", function(){

  saveState("Toggle Theme");

  state.dark = !state.dark;

  redoStack = [];

  render();

});


// Undo
undoBtn.addEventListener("click", function(){

  if(history.length === 0) return;

  redoStack.push(JSON.parse(JSON.stringify(state)));

  const previous = history.pop();

  state = previous.state;

  render();
  renderHistory();

});


// Redo
redoBtn.addEventListener("click", function(){

  if(redoStack.length === 0) return;

  history.push({
    action:"Redo",
    state:JSON.parse(JSON.stringify(state))
  });

  state = redoStack.pop();

  render();
  renderHistory();

});


// Initial render
render();