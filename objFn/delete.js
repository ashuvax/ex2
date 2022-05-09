const fs = require("fs");
const read = require("./read");
const deleteFn = (product) => {
  if (product) {
    const cart = read();
    if (product in cart) {
      delete cart[product];
      fs.writeFileSync("./data/cart.json", JSON.stringify(cart));
    } else {
      throw new Error("Product " + product + " not found in cart");
    }
  } else {
    throw new Error("Product " + product + " not found");
  }
};
module.exports = deleteFn;
