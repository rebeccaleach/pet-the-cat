var mysql = require('mysql');

var connection = mysql.createConnection({
	host: "localhost",
	port: 3000,
	user: "root",
	password: "lunabin86",
	database: "cats_db"
});

connection.connect(function(err) {
	if (err) {
		console.log('error connection: ' + err.stack);
		return;
	}
	console.log('cats_db is connected');
});

module.exports = connection;