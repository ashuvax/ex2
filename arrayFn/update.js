const fs = require("fs");
const read = require("./read");

const update = (product) => {
  const cart = read();
  const key = Object.keys(product)[0];

  if (
    cart.filter((item) => Object.keys(item)[0] == Object.keys(product)[0])
      .length > 0
  ) {
    cart.map((item) =>
      Object.keys(item)[0] == Object.keys(product)[0]
        ? (item[Object.keys(product)[0]] = product[Object.keys(product)[0]])
        : item
    );

    fs.writeFileSync("./data/cart.json", JSON.stringify(cart));
    console.log("cart is: ", cart);
  } else {
    throw new Error("Product " + key + " not found");
  }
};
module.exports = update;
