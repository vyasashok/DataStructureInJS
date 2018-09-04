var cart = {};


item = ["bat", "ball", "stumps", "gloves", "pads"];


for (var i = 0; i < item.length; i++) {
    cart[item[i]] = i;
}

for (const key in cart) {
    if (cart.hasOwnProperty(key)) {
        const element = cart[key];
        console.log(element);
    }
}



//console.log(cart)

