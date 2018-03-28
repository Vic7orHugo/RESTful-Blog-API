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

// Using all the imported middleware
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(errorhandler());

// CRUD requests for posts
app.get('/posts', comments.getComments);
app.post('/posts', comments.addComment);
app.put('/posts/:postId', comments.updateComment);
app.delete('/posts/:postId', comments.removeComment);

// CRUD requests for comments
app.get('/posts/:postId/comments', posts.getPosts);
app.post('/posts/:postId/comments', posts.addPost);
app.put('/posts/:postId/comments/:commentId', posts.updatePost);
app.delete('/posts/:postId/comments/:commentId', posts.removePost);

// Reset Blog request
app.delete('/reset', reset);

// Server listener
app.listen(3000);