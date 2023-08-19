// Q. Create a basic express server with 2 routes

// - add package.json
// - install express
// - setup an express server
// - add a listener on port 3000
// - handle these routes
//   1. GET -> `/` with HTML response saying 'Welcome to express' in H2.``
//   2. GET -> `/about` with plain text content saying 'My name is qwerty'

// let express = require("express");
// let app = express();

// app.get("/", (req, res) => {
//   res.setHeader("Content-Type", "text/html");
//   res.send("<h2> Welcome to express</h2>");
// });

// app.get("/about", (req, res) => {
//   res.setHeader("Content-Type", "text/plain");
//   res.send("My name is qwerty");
// });

// app.listen(3000, () => {
//   console.log("server is live");
// });

// Q. Modify above application, add appropriate middleware

// - to capture form data from request
// - to capture json data from request
// - add POST request on `/form` route to capture form data from postman and send entire form data through response in json format
// - add POST request on `/json` route to capture JSON data from postman and send entire data in response in plain text format.
// - json and form data should include fields
//   - name
//   - age
//   - email

// ### Note:-

// Remember to add middlewares before handling any routes.

// let express = require("express");
// let app = express();

// // middlewares

// app.use(express.urlencoded());
// app.use(express.json());

// app.get("/", (req, res) => {
//   res.setHeader("Content-Type", "text/html");
//   res.send("<h2> Welcome to express</h2>");
// });

// app.get("/about", (req, res) => {
//   res.setHeader("Content-Type", "text/plain");
//   res.send("My name is qwerty");
// });

// app.post("/form", (req, res) => {
//   res.send(req.body);
// });
// app.post("/json", (req, res) => {
//   res.send(req.body);
// });

// app.listen(3000, () => {
//   console.log("server is live");
// });

// Q. Modify above application to include

// - logger middleware
// - cookieParser middleware
// - add a middleware to send cookie to the client.

let express = require("express");
let app = express();
let logger = require("morgan");
let cookieParser = require("cookie-parser");

// middlewares build-in

app.use(express.urlencoded());
app.use(express.json());

// middleware external and custom
app.use(logger()); // doubt

app.use(cookieParser());

////a 500 handler for client/server error

app.use("/admin", (req, res, next) => {
  next("unauthorised");
});

app.use((req, res, next) => {
  res.cookie("count", 1);
  next();
});

app.get("/", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.send("<h2> Welcome to express</h2>");
});

app.get("/about", (req, res) => {
  res.setHeader("Content-Type", "text/plain");
  res.send("My name is qwerty");
});

app.post("/form", (req, res) => {
  res.send(req.body);
});
app.post("/json", (req, res) => {
  res.send(req.body);
});

app.get("/", function (req, res) {
  // Cookies that have not been signed
  console.log("Cookies: ", req.cookies);

  // Cookies that have been signed
  console.log("Signed Cookies: ", req.signedCookies);
});

// Q. Modify above application to include

// - a router to capture params from the request on a route `/users/:username` using GET request.
// - capture the username and respond with username in HTML response.

app.get("/users/:username", (req, res) => {
  let param = req.params.username;
  res.setHeader("Content-Type", "text/html");
  res.send(`<h2>${param}</h2>`);
});

// Q. Modify above to include error handler middleware

// - a 404 handler for routes which are not handled
// - a 500 handler for client/server error

// ### Note:-

// Remember to add error handler middlewares after handling all the routes in the application

// - a 404 handler for routes which are not handled

app.use((req, res, next) => {
  res.send("page not found ");
});

//a 500 handler for client/server error

app.use((err, req, res, next) => {
  res.send(err);
  next();
});

app.listen(3000, () => {
  console.log("server is live");
});
