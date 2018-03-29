/*
	index.js - Script that imports all the CRUD requests for comments and posts of the RESTful Blob API.
			   It exports the mudules containing the CRUD requests, making it easier to import it all.
			   Adds a DELETE request to reset the Blog.
	27/03/2018 20:33
*/

const comments = require('./comments.js');	// Imports the comments CRUD requests
const posts = require('./posts.js');		// Imports the posts CRUD requets

module.exports = {comments, posts, 			// Exports all the requests
	reset(req, res) {	 					// Resets the blog
		if (req.store.posts.length === 0) return res.sendStatus(400); // "Bad request" code in case there is no post
		req.store.posts = [];				// Cleans the store variable
		res.status(205).send();				// Reset code
		console.log('All posts have been deleted.');
	}
};