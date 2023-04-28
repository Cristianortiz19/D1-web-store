class detailProduct extends HTMLElement {
    constructor (){
        super();
        this.name = this.getAttribute("name");
        this.url = this.getAttribute("url");
        this.description =  this.getAttribute("description");
        this.price = this.getAttribute("price");
        this.category = this.getAttribute("category");
        this.brand = this.getAttribute("brand");
        this.size = this.getAttribute("size");
    }

    connectedCallback(){
        this.render();
    }

    static get observedAttributes() {
        return ["name", "url", "description", "price", "category", "brand", "size"];
    }

    attributeChangedCallback(propName, oldValue, newValue) {
        this[propName] = newValue;
        this.render();
    }

    render() {
        this.innerHTML = `

            <figure><img src="${this.url}"> </figure>
            <div>
                <h2>${this.name}</h2>
                <h3>${this.size}</h3>
                <h3>${this.brand}</h3>
                <p>${this.description}</p>
                <h2>${this.price}</h2>
                <a href="#"><h3>Comprar</h3></a>
                <p>${this.category}</p>
            </div>
            
        `
    }
}

customElements.define('detail-product', detailProduct);
export default detailProduct;