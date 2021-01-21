const express = require('express');
const products = require("./products.json");

const app = express();

app.use('/GetProducts', function(req, res, next) {
  // get products from db
  console.log("Getting products...")

  res.send(products);
})

app.listen(3005, function() {
  console.log('server listening on http://localhost:3005');
});

