let filter = 0;

function setFilter(num) {
  filter = num;
  renderCard();
  console.log(filter);
}

async function getData() {
  const response = await fetch("https://apimocha.com/d1-products/products");
  let productData = await response.json();
  console.log(productData);
  return productData;
}

async function renderCard() {
  let products = await getData();

  if (filter == 0) {
    showAll(products);
  } else if (filter == 1) {
    filterData("Carnes", products);
  } else if (filter == 2) {
    filterData("Enlatados y Envasados", products);
  } else if (filter == 3) {
    filterData("Harinas y Pre-mezclas", products);
  } else if (filter == 4) {
    filterData("Pescados y Mariscos", products);
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

function filterData(type, products) {
  if (products?.length != 0) {
    let html = "";
    for (let i = 0; i < products.length; i++) {
      let reference = products[i].name.replaceAll(" ", "-");
      let detail = "/product-detail/index.html?id=" + reference;
      if (products[i].category == type) {
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

renderCard();
