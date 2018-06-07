var express = require('Express');
var bodyParser = require("body-parser");

var router = require('./route');

var cors = require('cors');


var app = express();
app.use(cors());

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());


app.use('/',router);

app.listen(3500);

console.log("Server listening to port 3500");