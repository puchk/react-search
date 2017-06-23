var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');

// Import Routes
var routes = require('./routes/routes.js');

// Express
var app = express();
var PORT = process.env.PORT || 8080;

// Body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', routes);

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var db = process.env.MONGODB_URI || "mongodb://localhost/reactSearch";

// Connect mongoose to our database
mongoose.connect(db, function(error) {
  // Log any errors connecting with mongoose
  if (error) {
    console.log(error);
  }
  // Or log a success message
  else {
    console.log("mongoose connection is successful");
  }
});

// Start Express
app.listen(PORT, function(err) {
  console.log('Listening on port ' + PORT);
});