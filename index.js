require("dotenv").config();
const express = require("express");

const app = express();
app.use(express.static(__dirname + "/public"));
const port = process.env.SERVER_PORT || 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(port, () => {
  console.info("app is running on port: " + port || 3000);
});
