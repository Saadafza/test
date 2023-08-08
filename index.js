const express = require('express');
const app = express();






app.get("/", (req, res) => {
    res.send("working...")
  })





  app.listen(4001, () => {
    console.log("db and server is running on port 4001 ")
  })