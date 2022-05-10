const fs = require("fs");
const read = require("./read");

const create = (product) => {
  if (product) {
    const cart = read();
    const key = Object.keys(product)[0];
    if (!cart[key]) {
      const newCart = [...cart, ...product];
      fs.writeFileSync("./data/cart.json", JSON.stringify(newCart));
      console.log("cart new is: ", newCart);
    } else {
      throw new Error("Product " + key + " already in cart");
    }
  } else {
    console.log("Please provide a product name");
  }
};
module.exports = create;
