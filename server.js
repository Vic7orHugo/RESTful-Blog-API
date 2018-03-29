/*
    server.js - RESTful API for the Module 2 Assignment from the course "Introduction to Node.js" at https://edx.org. 
                The API will handle the simple CRUD http requests for a blog.
	27/03/2018 19:00
*/

// Importing modules
const express = require('express');			    		// The base Node.js server framework
const logger = require('morgan');			     		// Gives server logs
const errorhandler = require('errorhandler');    		// Basic error handling capabilities
const bodyParser = require('body-parser'); 	     		// Interprets and parse in/out payloads
const { comments, posts, reset } = require('./routes'); // Imports all the routes for the API

// Instanciating the Express server
let app = express();

// Stores all the blog posts
let store = { posts: [] }; 	

// Using all the imported middleware
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(errorhandler());
app.use((req, res, next) => {
	req.store = store;
	next();
});

// CRUD requests for posts
app.get('/posts', posts.get);
app.post('/posts', posts.add);
app.put('/posts/:postId', posts.update);
app.delete('/posts/:postId', posts.remove);

// CRUD requests for comments
app.get('/posts/:postId/comments', comments.get);
app.post('/posts/:postId/comments', comments.add);
app.put('/posts/:postId/comments/:commentId', comments.update);
app.delete('/posts/:postId/comments/:commentId', comments.remove);

// Reset Blog request
app.delete('/reset', reset);

// Server listener
app.listen(3000);