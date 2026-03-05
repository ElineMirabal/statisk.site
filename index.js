// const params = new URLSearchParams(window.location.search);
// const id = params.get("category-container");

// const fetchUrl = myCategories ? `https://kea-alt-del.dk/t7/api/categories?category=${encodeURIComponent(myCategories)}` : `https://kea-alt-del.dk/t7/api/categories`;
const fetchUrl = `https://kea-alt-del.dk/t7/api/categories`;
const listContainer = document.querySelector(".kategorier");

function getCategories() {
  fetch(fetchUrl).then((res) => res.json().then((categories) => showCategories(categories)));
}

function showCategories(categories) {
  listContainer.innerHTML = "";

  categories.forEach((category) => {
    listContainer.innerHTML += `
        <article class="card-kategorier"><a href="productlist.html?category=${encodeURIComponent(category.category)}">${category.category}</a></article>
        `;
  });
}

getCategories();
