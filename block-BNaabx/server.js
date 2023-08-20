let express = require("express");
let app = express();
let fs = require("fs");
let query = require("querystring");

var store = "";

// custom middleware

// morgan copy
app.use("/", (req, res, next) => {
  console.log(req.method, req.url);
  next();
});

// express.json custom middleware

app.use("/data", (req, res, next) => {
  req.on("data", (chunk) => {
    store += chunk;
  });

  req.on("end", () => {
    res.statusCode = 201;
    res.send(store);
  });
  next();
});

// express.static custom  middleware

app.use("/data", (req, res, next) => {
  req.on("data", (chunk) => {
    store += chunk;
  });

  req.on("end", () => {
    res.setHeader("content-Type", "text/html");
    fs.createReadStream("./form.html").pipe(res);
  });
  next();
});

//routes
app.get("/", (req, res) => {
  res.send("welcome");
});

app.listen(3000, () => {
  console.log("server is live");
});
