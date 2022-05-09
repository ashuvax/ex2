const readFn = require("./read");
const createFn = require("./create");
const updateFn = require("./update");
const deleteFn = require("./delete");
const args = process.argv.slice(2);
const operation = args[0];

switch (operation) {
  case "create":
    const product = args[1];
    createFn(JSON.parse(product));
    break;
  case "read":
    readFn();
    break;
  case "update":
    const updateproduct = args[1];
    updateFn(JSON.parse(updateproduct));
    break;
  case "delete":
    const deleteproduct = args[1];
    deleteFn(deleteproduct);
    break;
  default:
    throw new Error(operation + " Invalid operation");
}
