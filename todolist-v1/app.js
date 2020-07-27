const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"))

var items = ["Buy food", "Cook food", "Eat food"];

app.get("/", function (req, res) {
  var today = new Date();
  var currentDay = today.getDay();

  var options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  var day = today.toLocaleDateString("en-US", options);
  
  res.render("list", { listTitle: day, newListItems: items });
});

app.post("/", function (req, res) {
  var item = req.body.newItem;
  items.push(item);

  res.redirect("/");
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
};
app.listen(port, function() {
  console.log("Server started on port " + port + ".");
});

// app.listen(port, function () {
//   console.log("Server started on port successfully.");
// });
