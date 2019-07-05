var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let price = Math.floor(Math.random() * 100) + 1;
  cart.push({itemName: item, itemPrice: price});
  return `${item} has been added to your cart.`;
}

function viewCart() {
  let printCart = [];

  for (i=0; i < array.length; i++) {
    if i == array.length - 1 {
      printCart.push(`${array[i].itemName} at $${array[i].itemPrice}.`)
    }
  }
  
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
