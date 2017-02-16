var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');


var app = express();
var PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(express.static('public'));


var routes = require('./controllers/cat-controller.js')(app);

app.listen(PORT, function() {
	console.log('Cats are waiting to be petted on port ' + PORT);
});