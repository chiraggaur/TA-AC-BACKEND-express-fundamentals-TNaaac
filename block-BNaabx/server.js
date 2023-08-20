let express = require("express");
let app = express();

// custom middleware

// morgan copy
app.use("/", (req, res, next) => {
  console.log(req.method, req.url);
  next();
});

// express.json custom middleware

// express.static custom  middleware

//routes
app.get("/", (req, res) => {
  res.send("welcome");
});

app.listen(3000, () => {
  console.log("server is live");
});
