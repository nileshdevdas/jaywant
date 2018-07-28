var express = require("express");
var bodyparser = require("body-parser");
var cookieparser = require("cookieparser");
var cors = require("cors");
var app = express();
//  use_static
// whether do you wish to serve the static pages
// from you node or not if yes
// use_static dir in the node
app.use(cors());
app.get("/user", function(req,res){
  var user = {};
  user.username ="nilesh";
  user.password = "password";
  res.end(JSON.stringify(user));
});

app.listen(5000);
