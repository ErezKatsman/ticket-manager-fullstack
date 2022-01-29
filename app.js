const ticket = require("./ticket");
const express = require("express");
const app = express();

app.use(express.static("client/build"));

//ticket router ==> ticket.js
app.use("/api/tickets", ticket);

module.exports = app;
