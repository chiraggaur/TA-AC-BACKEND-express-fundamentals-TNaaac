var express = require("express");

var app = express();

// middleware

// function logger(req, res, next) {
//   console.log(req.method, req.url);
//   next(); // send request to next middle ware or routing
// }
// app.use(logger);

// second way

// pathcharacters in first should match and give url after that / only
app.use("/users", (req, res, next) => {
  console.log(req.method, req.url);
  next(); // send request to next middle ware or routing
});
// routing
app.get("/", (req, res) => {
  res.send("welcome");
});

app.listen(4000, "localhost", () => {
  console.log("server is live ");
});
