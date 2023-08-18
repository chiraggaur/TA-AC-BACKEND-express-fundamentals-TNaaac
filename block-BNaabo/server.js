var express = require("express");

var app = express();

// Q. Write code to add express.json middleware

// - send json data from postman using POST http method on '/json' route.
// - console.log(req.body) to see all json data in console on a POST route on '/json'.

// // middleware used app.use(express.json())

// in build middleware
// get req data

// app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("welcome");
// });
// app.post("/json", (req, res) => {
//   //capture the  data
//   console.log(req.body);
//   res.send("data captured");
// });

// app.listen(3000, () => {
//   console.log("server is live ");
// });

// Q. Add express.urlencoded as middleware

// - send form data from postman on `/contact` route.
// - Access it using req.body on `/contact` route in our server

// // middleware used app.use(express.urlencoded())

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/images/img2.jpeg");
  //   res.send("image captured");
});
app.post("/json", (req, res) => {
  //capture the  data
  console.log(req.body);
  res.send("data captured");
});

app.listen(3000, () => {
  console.log("server is live ");
});
