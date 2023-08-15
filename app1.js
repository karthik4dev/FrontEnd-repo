const form = document.querySelector('form');
const listContainer = document.querySelector('#list')
form.addEventListener('submit', function(e){
  e.preventDefault();
 
  const qtyInput = form.elements.qty;
  const productName = form.elements.pruduct;
    addToList(qty.value, product.value)
    qtyInput.value = '';
    product.value = '';
})
 
const addToList = (qty, product)=> {
  const newProduct = document.createElement('li');
  newProduct.textContent = `${qty} ${product}`;
  listContainer.appendChild(newProduct);
}