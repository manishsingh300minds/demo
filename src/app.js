const express = require("express");
const app = express()

app.get("/testNode",(_req, res) => {
  res.status(200).send("The testNode end point works");
})

module.exports = app;