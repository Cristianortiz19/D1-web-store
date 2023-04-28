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

    static get observedAttributes() {
        return ["name", "url", "description", "price", "category", "brand", "size"];
    }

    attributeChangedCallback(propName, oldValue, newValue) {
        this[propName] = newValue;
        this.render();
    }

    render() {
        this.innerHTML = `
        
        `
    }
}

customElements.define('detail-product', detailProduct);
export default detailProduct;