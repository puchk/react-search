var express = require('express');
var router = express.Router();

// Article Schema
var Article = require('../models/Article');

router.get('/', function(req, res) {
	res.sendFile(__dirname + '/dist/index.html');
});


module.exports = router;

