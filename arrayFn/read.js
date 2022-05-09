const fs = require("fs");
const read = () => {
  const cart = fs.readFileSync("./data/cart.json", "utf8");
  return JSON.parse(cart);
};
module.exports = read;
