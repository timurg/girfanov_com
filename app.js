const express = require("express");
var path = require('path');
const app = express();

app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname + '/node_modules/nes.css/'));
app.use(express.static(__dirname + '/node_modules/bootstrap/dist/'));
app.use("/contact", function(_, response){

    response.render("contact.hbs");
});
app.use("/", function(_, response){

    response.render("index.hbs");
});
app.listen(3000);