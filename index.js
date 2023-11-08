require("dotenv").config();
const express = require("express");

const app = express();
app.use(express.static(__dirname + "/public"));
const port = process.env.SERVER_PORT || 3000;

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  let data = {
    name: "Ironhacker",
    lastName: "Rocking it!",
    address: {
      street: "Your heart",
      number: 87,
    },
    cities: [
      "Amsterdam",
      "Barcelona",
      "Berlin",
      "Lisbon",
      "Madrid",
      "Mexico City",
      "Miami",
      "Paris",
      "Sao Paulo",
    ],
  };

  res.render("index", data);
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.listen(port, () => {
  console.info("app is running on port: " + port || 3000);
});
