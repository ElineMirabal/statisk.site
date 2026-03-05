const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const productURL = "https://kea-alt-del.dk/t7/api/products/" + id;
const productcontainer = document.querySelector("#productContainer");

function getData() {
  fetch(productURL).then((res) => res.json().then((data) => show(data)));
}

function show(data) {
  document.querySelector("#product-title").textContent = data.productdisplayname;

  productcontainer.innerHTML = `<img src="https://kea-alt-del.dk/t7/images/webp/640/${id}.webp" alt="${data.productdisplayname}" class="product-image">
     <section class="product-info">
                    <p class="product-brand"> Brand:${data.brandname}</p>
                    <p class="price"> Price: ${data.price}DKK</p>
                    <p class="product-old-price"> Old price:${data.oldprice}</p>
                    <p class="product-status"> Lagerstatus:${data.soldout ? "Out of Stock" : "In Stock"}</p>
                </section>

  `;
}

getData();
