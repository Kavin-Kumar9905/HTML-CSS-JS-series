const productList = document.getElementById('productList');

// Product data (objects)
const products = [
  {
    name: "Laptop",
    price: 50000,
    image: "https://picsum.photos/seed/laptop/300/200"
  },
  {
    name: "Phone",
    price: 20000,
    image: "https://picsum.photos/seed/phone/300/200"
  },
  {
    name: "Headphones",
    price: 3000,
    image: "https://picsum.photos/seed/headphones/300/200"
  }
];

//Generate UI
function renderProducts(){

    products.forEach(function(product){

        const card = document.createElement("div");
        card.classList.add('card');

        card.innerHTML = `
            <img src="${product.image}">
            <div class="card-body>
                <h3>${product.name}</h3>
                <p class="price>Rs ${product.price}</p>
                <button>Buy</button>
            </div>
        `;

        productList.appendChild(card);
    });
}

renderProducts();


