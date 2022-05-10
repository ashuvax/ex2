const fs = require("fs");
const read = require("./read");

const create = (product) => {
  if (product) {
    const cart = read();
    const key = Object.keys(product)[0];

    if (cart.some((item) => Object.keys(item)[0] === key)) {
      throw new Error("Product " + key + " already in cart");
    } else {
      cart.push(product);
      fs.writeFileSync("./data/cart.json", JSON.stringify(cart));
      console.log("cart new is: ", cart);
    }
  } else {
    throw new Error("Please provide a product");
  }
};
module.exports = create;
