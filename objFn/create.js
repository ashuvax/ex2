const fs = require("fs");
const read = require("./read");

const create = (product) => {
  if (product) {
    const cart = read();
    const newCart = [...cart, ...product];
    fs.writeFileSync("./data/cart.json", JSON.stringify(newCart));
  } else {
    console.log("Please provide a product name");
  }
};
module.exports = create;
