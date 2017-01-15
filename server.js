var express = require("express");
var app = express();
app.get("/", function (req, res) {
  res.send("Hello World!");
});
//always use port 8080 on c9.io
app.listen(8080, function () {
  console.log("Example app listening on port 8080!");
});