const playground = document.getElementById("playground");
const tree = document.getElementById("tree");
const info = document.getElementById("info");

let selectedElement = null;


// Build DOM Tree
function buildTree(element, container){

  const node = document.createElement("div");
  node.classList.add("node");
  node.textContent = element.tagName.toLowerCase();

  node.addEventListener("click", function(e){
    e.stopPropagation();
    highlightElement(element);
    highlightNode(node);
  });

  container.appendChild(node);

  const children = element.children;

  if(children.length > 0){
    const childContainer = document.createElement("div");
    childContainer.style.marginLeft = "20px";

    Array.from(children).forEach(child => {
      buildTree(child, childContainer);
    });

    container.appendChild(childContainer);
  }
}


// Highlight Element
function highlightElement(el){

  document.querySelectorAll(".highlight").forEach(e => {
    e.classList.remove("highlight");
  });

  el.classList.add("highlight");
  selectedElement = el;

  info.textContent = `Selected: <${el.tagName.toLowerCase()}>`;
}


// Highlight Tree Node
function highlightNode(node){

  document.querySelectorAll(".active-node").forEach(n => {
    n.classList.remove("active-node");
  });

  node.classList.add("active-node");
}


// Click in playground
playground.addEventListener("click", function(e){

  e.stopPropagation();

  highlightElement(e.target);

  // Event bubbling simulation
  let current = e.target;
  let path = [];

  while(current){
    path.push(current.tagName);
    current = current.parentElement;
  }

  info.textContent = "Bubbling: " + path.join(" → ");

});


// Initialize tree
buildTree(playground, tree);