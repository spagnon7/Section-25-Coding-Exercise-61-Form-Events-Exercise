const grocForm = document.querySelector('form');
const grocList = document.querySelector('#list');

function addGrocItem(product, qty) {
    let newItem = document.createElement('li');
    newItem.innerText = qty + ' ' + product;
    grocList.appendChild(newItem);
}

grocForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const product = grocForm.elements.product;
  const qty = grocForm.elements.qty;
  
  addGrocItem(product.value, qty.value);
  
  product.value = '';
  qty.value = '';
})