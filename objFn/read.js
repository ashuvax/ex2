const fs = require("fs");
const read = () => {
  const cart = fs.readFileSync("./data/cart.json", "utf8");
  console.log(cart);
};
module.exports = read;
