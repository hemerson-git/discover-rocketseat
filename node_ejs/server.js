const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const items = [
    { title: "D", message: "Developer" },
    { title: "O", message: "Over" },
    { title: "N", message: "Node" },
    { title: "E", message: "Express" },
  ];

  res.render("pages/index", {
    qualities: items,
  });
});

app.get("/about", (req, res) => {
  res.render("pages/about");
});

app.listen(8080, () => {
  console.log("Listening on http://localhost:8080");
});
