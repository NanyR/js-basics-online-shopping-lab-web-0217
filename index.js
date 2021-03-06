var cart=[];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function getCart(){
  return cart;
}

function addToCart(item) {
   var obj={[item]: Math.floor(Math.random()*100)};
   cart.push(obj);
   console.log(`${item} has been added to your cart.`);
   return cart
}

function viewCart(){
  if(cart.length===0){
    console.log("Your shopping cart is empty.");
    return
  }
  else{
  var inCart=`In your cart, you have`;
  for(let i=0; i<cart.length; i++){
    for(var item in cart[i]){
      inCart+=` ${item} at $${cart[i][item]},`;
    };
  };
  inCart=inCart.replace(/,$/,".");
  console.log(inCart);
}
}


function removeFromCart(itemName){
  for(let i=0; i<cart.length; i++){
    for(var item in cart[i]){
      if(item === itemName){
        cart.splice(i, 1);
        return cart
      }
    };
  }
  console.log("That item is not in your cart.");
  return cart
}

function placeOrder(cardNumber){
  if(cardNumber){
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  }
  else {
    console.log("We don't have a credit card on file for you to place your order.")
  }
  cart=[];
}
