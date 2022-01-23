const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

require("dotenv").config();
const { PORT, DB_CONNECT_URL } = process.env;

//Routers authens
const authens = require("./routes/Authen")
app.use("/Authens",authens);

//Routes customer
const customerRoute = require("./routes/CustomerInfo");
app.use("/Customer", customerRoute);

//Routes
app.get("/", (req, res) => {
  res.send("wellcome test api");
});

//Connect DB
mongoose.connect(DB_CONNECT_URL, { useNewUrlParser: true }, () => {
  console.log("connect DB");
});

app.listen(PORT);
