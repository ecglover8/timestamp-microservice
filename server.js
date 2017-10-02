var express = require("express");
var app = express();
var port = process.env.PORT || 8080;
app.use(express.static(__dirname));
app.get("/", function (req, res) {
  res.sendFile("index.html");
});
app.get("/:query", function (req, res) {
  var query = req.params.query;
  res.json(service(query));
});
//always use port 8080 on c9.io
app.listen(port, function () {
  console.log("This app is listening on port " + port + ".");
});
function service(query) {
  var response = {"UNIXtime": "null", "REGULARtime": "null"};
  var thedate;
  var montharray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  if (query == "now" || query == "Now" || query == "NOW") {
    var now = new Date();
    response.UNIXtime = now.getTime();
    response.REGULARtime = montharray[now.getMonth()] + " " + now.getDate() + ", " + now.getFullYear();
    console.log(response);
    return response;
  }
  if (Number.isInteger(parseInt(query))) {
    thedate = new Date(parseInt(query));
    response.UNIXtime = query;
    response.REGULARtime = montharray[thedate.getMonth()] + " " + thedate.getDate() + ", " + thedate.getFullYear();
    console.log(response);
    return response;
  }
  thedate = new Date(query);
  if (Number.isInteger(thedate.getTime())) {
    response.UNIXtime = thedate.getTime();
    response.REGULARtime = montharray[thedate.getMonth()] + " " + thedate.getDate() + ", " + thedate.getFullYear();
    console.log(response);
    return response;
  }
  console.log(response);
  return response;
}
