const express = require("express");
const morgan = require("morgan");
const methodOverride = require("method-override");
const cookieParser = require("cookie-parser");
const path = require("path");
const handlebars = require("express-handlebars");
const port = 3000;
const app = express();

app.use(cookieParser());

const route = require("./routes");
const db = require("./config/db");

//Connect to db
db.connect();

app.use(express.static(path.join(__dirname, "public")));

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(methodOverride("_method"));

//HTTP Logger
// app.use(morgan("combined"));
//Template emgine
app.engine(
  "hbs",
  handlebars({
    extname: ".hbs",
    helpers: {
      sum: (a, b) => a + b,
    },
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

//Router
route(app);

app.listen(port, () => console.log(`App listening at http:localhost:${port}`));
