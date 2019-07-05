var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let price = Math.floor(Math.random() * 100) + 1
  cart.push({itemName: item, itemPrice: price})
  return `${item} has been added to your cart.`
}

function viewCart() {
  let printCart = []
debugger;
  for (let i=0; i<cart.length; i++) {
    printCart.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)
  }

  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  } else if (printCart.length === 1) {
    return `In your cart, you have ${printCart}.`;
  } else if (printCart === 2) {
    return `In your cart, you have ${printCart.join(" and ")}.`;
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
