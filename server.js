/*
	server.js - RESTful API for the Module 2 Assignment from the course "Introduction to Node.js" at https://edx.org. 
				The API will handle the simple CRUD http requests for a blog.
	27/03/2018 19:00
*/

// Importing modules
const express = require('express');				// The base Node.js server framework
const logger = require('morgan');				// Gives server logs
const errorhandler = require('errorhandler'); 	// Basic error handling capabilities
const bodyParser = require('body-parser'); 		// Interprets and parse in/out payloads
const routes = require('./routes');				// Imports all the routes for the API

// Instanciating the Express server
let app = express();

// All the middleware
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(errorhandler());

// CRUD requests
app.get('/', (req, res) => {routes.comments.getComments(req, res)});

// Server call
app.listen(3000);