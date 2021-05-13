const productsRouter = require("./products");
const siteRouter = require("./site");
const usersRouter = require("./users");
const manageRouter = require("./manage");

function route(app) {
  app.use("/user", usersRouter);
  app.use("/product", productsRouter);
  app.use("/manage", manageRouter);
  app.use("/", siteRouter);
}

module.exports = route;
