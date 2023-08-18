var express = require("express");
var toggle = require("morgan");

var cookieParser = require("cookie-parser");

var app = express();

app.use(toggle("dev"));

app.use(cookieParser());

app.use((req, res, next) => {
  res.cookie("username", "suraj");
  next();
});

// app.use((req, res, next) => { // doubt
//   console.log(res.cookie());
//   next();
// });

app.get("/about", (req, res) => {
  res.send("welcome");
});

app.listen(4000, () => {
  console.log("server is live ");
});
