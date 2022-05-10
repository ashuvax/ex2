const fs = require("fs");
const read = require("./read");

const update = (product) => {
  const cart = read();
  const key = Object.keys(product)[0];

  if (cart.some((item) => Object.keys(item)[0] === key)) {
    cart.map((item) =>
      Object.keys(item)[0] === key
        ? (item[Object.keys(product)[0]] = product[key])
        : item
    );

    fs.writeFileSync("./data/cart.json", JSON.stringify(cart));
    console.log("cart new is: ", cart);
  } else {
    throw new Error("Product " + key + " not found in cart");
  }
};
module.exports = update;
