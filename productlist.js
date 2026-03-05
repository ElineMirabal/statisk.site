const params = new URLSearchParams(window.location.search);
const category = params.get("category");
// console.log("Category:", category);

//pris sorterings knap//
const sortByPriceBtn = document.querySelector("#sortByPriceBtn");

const listURL = category ? `https://kea-alt-del.dk/t7/api/products?category=${category}` : "https://kea-alt-del.dk/t7/api/products";
console.log("listurl:", listURL);
const listContainer = document.querySelector(".product-gallery");
document.querySelector("h2").textContent = category ? category : "Products";

let allProducts = [];

function getProducts() {
  fetch(listURL).then((res) =>
    res.json().then((products) => {
      allProducts = products;
      console.log("allproducts", allProducts);
      showProducts(allProducts);
    }),
  );
}

function showProducts(products) {
  console.log("showproducts");
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
                <a href="product.html?id=${product.id}" class="button">Buy now</a>
            </article>
    `;
  });
}

function sortByPriceAsc() {
  console.log("sortByPriceAsc");
  allProducts.sort((a, b) => a.price - b.price);

  showProducts(allProducts);
}

sortByPriceBtn.addEventListener("click", sortByPriceAsc);

getProducts();
