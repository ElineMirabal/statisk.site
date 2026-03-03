const listURL = "https://kea-alt-del.dk/t7/api/products?limit=50";
const listContainer = document.querySelector(".product-gallery");

function getProducts() {
  fetch(listURL).then((res) => res.json().then((products) => showProducts(products)));
}

function showProducts(products) {
  // Start med tom container
  listContainer.innerHTML = "";

  // products er et array af objekter
  products.forEach((product) => {
    listContainer.innerHTML += `

      <article class="product">
                <h3>${product.productdisplayname}</h3>
                <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp"class="Billede"/>
                <p class="category">${product.subcategory}</p>
                <p class="brandname">${product.brandname}</p>
                <p class="price">${product.price} DKK</p>
                <a href="product.html" class="button">Buy now</a>
            </article>
    `;
  });
}

getProducts();
