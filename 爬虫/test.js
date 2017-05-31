var path = require('path'),
	url = require('url'),
	fs = require('fs'),
	http = require('http');
	fs.readFile('foo.json', function(err, data) {
  		if (err !== null) throw err;
  		console.log(data);
  		console.log(data.toString())
  		var hello = new Buffer(data);
  		console.log(hello.toString())
	});