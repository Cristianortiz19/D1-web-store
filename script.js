document.getElementById("myButton").addEventListener("click", function() {
    alert("ola que tal");
  });
  
  const buttons = document.querySelectorAll('.product-button');
  const cartItems = document.querySelector('.cart-items');
  
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const item = button.parentElement;
      const itemTitle = item.querySelector('.product-title').innerText;
      const itemPrice = item.querySelector('.product-price').innerText;
      
      const cartItem = document.createElement('div');
      cartItem.classList.add('cart-item');
      cartItem.innerHTML = `
        <p>${itemTitle}</p>
        <p>${itemPrice}</p>
      `;
      
      cartItems.appendChild(cartItem);
    });
  });

  const button = document.querySelector('.featured-button');


button.addEventListener('click', () => {
  const itemTitle = document.querySelector('.featured-title').innerText;
  const itemPrice = document.querySelector('.featured-price').innerText;

  const cartItem = document.createElement('div');
  cartItem.classList.add('cart-item');
  cartItem.innerHTML = `
    <p>${itemTitle}</p>
    <p>${itemPrice}</p>
  `;

  cartItems.appendChild(cartItem);
});
