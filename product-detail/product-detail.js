
const cardProducts = document.querySelector('#product-cards');

const url = window.location.search;
const searchParas = new URLSearchParams(url);

let solicitude = searchParas.get("id").replace('"', "");


async function getData(){
    try{
        let response = await fetch('https://apimocha.com/d1-products/products');
        let data = await response.json();
    } catch (a) {
        console.log(a);
    }
}

function organiceData(array){
    array.forEach(element => {
        let comparision = element.name.replaceAll(" ", "-");
        if(comparision == solicitude) {
            const productObj = document.createElement('detail-element');
            productObj.setAttribute('name', element.name);
            productObj.setAttribute('url', element.url);
            productObj.setAttribute('description', element.description);
            productObj.setAttribute('price', element.price);
            productObj.setAttribute('category', element.category);
            productObj.setAttribute('brand', element.brand);
            cardProducts.append(productObj);
        }
    });
}
getData();