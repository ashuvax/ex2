const readFn = require("./read");
const createFn = require("./create");
const updateFn = require("./update");
const deleteFn = require("./delete");
const args = process.argv.slice(2);
const operation = args[0];
const product = args[1];

switch (operation) {
  case "create":
    createFn(JSON.parse(product));
    break;
  case "read":
    readFn();
    break;
  case "update":
    updateFn(JSON.parse(product));
    break;
  case "delete":
    deleteFn(product);
    break;
  default:
    throw new Error(operation + " Invalid operation");
}
