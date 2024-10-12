// Import the Express module
const express = require("express");

// Create an instance of an Express application
const app = express();

// Set up a route for the root URL ("/")
// When a request is made to "/", the server will respond with "hello from server"
app.use("/", (req, res) => {
  res.send("hello from server");
});

// Set up a route for "/home"
// When a request is made to "/home", the server will respond with "hello from server"
app.use("/home", (req, res) => {
  res.send("hello from server");
});

// Set up a route for "/login"
// There is a missing forward slash ("/") before "login". It should be "/login"
app.use("/login", (req, res) => {
  res.send("hello from server");
});

// Set up a route for "/dashboard"
// Similarly, there is a missing forward slash ("/") before "dashboard". It should be "/dashboard"
app.use("/dashboard", (req, res) => {
  res.send("hello from server");
});

// Start the server and listen on port 3000
// This function will log a message to the console when the server is successfully running
app.listen(3000, () => {
  console.log("app running successfully on port 3000");
});
