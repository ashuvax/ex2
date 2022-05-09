const fs = require("fs");
const read = require("./read");

const update = (product) => {
  const cart = read();
  const key = Object.keys(product)[0];
  if (key in cart) {
    cart[key] = product[key];
    fs.writeFileSync("./data/cart.json", JSON.stringify(cart));
    console.log("cart is: ", cart);
  } else {
    throw new Error("Product " + key + " not found");
  }
};
module.exports = update;
