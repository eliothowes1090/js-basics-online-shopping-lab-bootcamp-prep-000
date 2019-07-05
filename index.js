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

  for (let i=0; i < cart.length; i++) {
    if (cart.length == 0) {
      printCart.push("Your shopping cart is empty.");
    } else if (i == cart.length - 1) {
      printCart.push(`${cart[i].itemName} at $${cart[i].itemPrice}.`)
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
