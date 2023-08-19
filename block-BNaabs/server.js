let express = require("express");

let app = express();

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/index.html");
// });

// app.get("/new", (req, res) => {
//   res.sendFile(__dirname + "/new.html");
// });

app.use(express.urlencoded());

app.post("/new", (req, res) => {
  res.send(req.name);
});

// app.get("/user/:userid", (req, res) => {
//   let username = req.params.userid;
//   res.send(username);
// });

app.listen(4000, () => {
  console.log("server is live ");
});
