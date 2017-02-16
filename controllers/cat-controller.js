var express = require('express');
var path = require('path');
var cat = require('../models/cat.js');

// Create the router for the app, and export the router at the end of your file

console.log("Router is connected.");

module.exports = function(app) {
	// front end routes
	app.get('/', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/index.html'));
	});
	// api routes
	app.get('/api/')
}