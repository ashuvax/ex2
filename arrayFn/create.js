const fs = require("fs");
const read = require("./read");

const create = (product) => {
  if (product) {
    const cart = read();

    if (
      cart.filter((item) => Object.keys(item)[0] == Object.keys(product)[0])
        .length > 0
    ) {
      throw new Error(
        "Product " + Object.keys(product)[0] + " already in cart"
      );
    } else {
      cart.push(product);
      fs.writeFileSync("./data/cart.json", JSON.stringify(cart));
    }
  } else {
    console.log("Please provide a product name");
  }
};
module.exports = create;
