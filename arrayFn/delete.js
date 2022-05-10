const fs = require("fs");
const read = require("./read");
const deleteFn = (product) => {
  if (product) {
    const cart = read();
    if (cart.some((item) => Object.keys(item)[0] === product)) {
      const newCart = cart.filter((item) => Object.keys(item)[0] != product);
      fs.writeFileSync("./data/cart.json", JSON.stringify(newCart));
      console.log("cart is: ", newCart);
    } else {
      throw new Error("Product " + product + " not found in cart");
    }
  } else {
    throw new Error("Product " + product + " not found");
  }
};
module.exports = deleteFn;
