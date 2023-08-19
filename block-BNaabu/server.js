let express = require("express");

let app = express();

// middleware which throws err
app.use("/admin", (req, res, next) => {
  next("Unauthorized");
});

//error handing on 404
app.use((req, res, next) => {
  res.send("page not found");
});

// error handing on client and server side / custom error

app.use((err, req, res, next) => {
  res.send(err);
});

app.listen(3000, () => {
  console.log("server is live ");
});
