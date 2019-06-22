const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
	res.render('home');
});

app.listen(8080, function() {
	console.log('Server started on localhost:8080');
});
