'use strict';

var express = require('express'); // do not change this line

var server = express();

server.get('/', function(req, res) {
	res.status(200);
	res.set({
		'Content-Type': 'text/html'
	});

	res.write('<!DOCTYPE html><html><body>lorem ipsum</body></html>');

	res.end();
});

server.listen(process.env.PORT || 5000);
