const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser").json();
const accountRoutes = require("./api/account/create");

mongoose.connect("mongodb://localhost:27017/codeTest", {
  autoReconnect: true,
  reconnectTries: 60,
  reconnectInterval: 10000
});

const app = express();
app.listen(3000);

app.use(bodyParser);

app.use("/account/create", accountRoutes);

console.log("app running on port 3000...");

module.exports = app;
