const fs = require("fs");
const read = () => {
  const cart = fs.readFileSync("./data/cart.json", "utf8");
  const cartObj = JSON.parse(cart);
  console.log(cartObj);
  return cartObj;
};
module.exports = read;
