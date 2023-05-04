let filter = "";
let filterType = "";

async function getData() {
  const response = await fetch("https://apimocha.com/d1-products/products");
  let productData = await response.json();
  console.log(productData);
  return productData;
}

async function renderCard() {
  let products = await getData();

  if (filter === "" || filterType === "") {
    showAll(products);
    console.log(filter, filterType, "init");
  } else {
    filterData(filterType, filter, products);
    console.log("filtered");
  }
}

function showAll(products) {
  if (products?.length != 0) {
    let html = "";
    for (let i = 0; i < products.length; i++) {
      let reference = products[i].name.replaceAll(" ", "-");
      let detail = "/product-detail/index.html?id=" + reference;
      let productElement = `
      <d1_card>
      <img src="${products[i].url}">
      <div>
          <h2>${products[i].name}</h2>
      </div>
      <h3>${products[i].size}</h3>
      <h3>${products[i].brand}</h3>
      <h2>${products[i].price}</h2>
      <a href="${detail}"><h3>Comprar</h3></a>
      <p>${products[i].category}</p>
      </d1_card>
      `;
      html += productElement;
    }
    let container = document.querySelector(".container");
    container.innerHTML = html;
  }
}

function filterData(type, input, products) {
  if (products?.length != 0) {
    let html = "";
    for (let i = 0; i < products.length; i++) {
      let reference = products[i].name.replaceAll(" ", "-");
      let detail = "/product-detail/index.html?id=" + reference;

      if (products[i][type] == input) {
        let productElement = `
        <d1_card>
            <img src="${products[i].url}">
            <div>
                <h2>${products[i].name}</h2>
            </div>
            <h3>${products[i].size}</h3>
            <h3>${products[i].brand}</h3>
            <h2>${products[i].price}</h2>
            <a href="${detail}"><h3>Comprar</h3></a>
            <p>${products[i].category}</p>
        </d1_card>
        `;
        html += productElement;
      }
    }
    let container = document.querySelector(".container");
    container.innerHTML = html;
  }
}

function checkType(type) {}

function search() {
  console.log("search!");
  let input = document.getElementById("inputText").value;
  let inputType = document.getElementById("filter").value;

  filter = input;
  filterType = inputType;
  renderCard();

  console.log(filter, filterType);
}

renderCard();
