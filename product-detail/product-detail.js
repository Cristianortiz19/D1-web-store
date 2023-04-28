

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
    
}