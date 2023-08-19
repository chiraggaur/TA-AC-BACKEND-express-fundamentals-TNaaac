let express = require("express");
let app = express();
let logger = require("morgan");
// let cookieParser = express("cookie-parser");

// // middlewares

// //build - in

app.use(express.json()); // capture json data
app.use(express.urlencoded({ extended: false })); // capture forms data
app.use(express.static(__dirname + "public")); // handling static assets

// 3rd party middlewares

app.use(logger("dev"));
// app.use(cookieParser());

// error on client/server middlewares

app.use("/admin", (req, res) => {
  next("server error unauthorised");
});

// routes

app.get("/", (req, res) => {
  res.send("Welcome to website ");
});

app.get("/username", (req, res) => {
  res.send(" user is here! ");
});

// error middlewares

app.use((req, res) => {
  res.send("page not found"); // when rout is not handled by server
});

app.use((err, req, res, next) => {
  res.send(err);
});

app.listen(3000, () => {
  console.log("server is live ");
});
