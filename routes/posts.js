/*
	posts.js - Script containing the CRUD requests for comments of the RESTful Blob API.
	27/03/2018 20:32
*/

let store = require('../store.js'); // Imports the stored blog posts

module.exports = {
  	getPosts(req, res) { // Shows the existing comments on the selected post
  		// Checks if there is at least one blog post, emmitting a "Invalid request" in a false case
  		if (store.posts.length === 0) return res.status(400).send('There is no post on the blog!');
  		if (!store.posts[req.params.postId]) return res.status(400).send('There is no post with this ID.'); // Checks if the post exists 	
  		// Checks if the post has comments
  		if (!('comments' in store.posts[req.params.postId])) return res.status(400).send('This post has no comments yet.');
  		res.status(200).send(store.posts[req.params.postId].comments);	// "OK" code is emmitted and send to client all the comments from the blog post selected
  	},
  	addPost(req, res) { // Adds a comment on the selected post
  		// Checks if there is at least one blog post, emmitting a "Invalid request" in a false case
  		if (store.posts.length === 0) return res.status(400).send('There is no post on the blog!');
  		if (!store.posts[req.params.postId]) return res.status(400).send('There is no post with this ID.'); // Checks if the post exists 
  		if (!req.body.text) return res.status(400).send('No comment was given.');							// "Bad Request" code because there was no comment on the request body
  		if (!req.body.text.trim()) return res.status(400).send('The comment needs content.');				// "Bad Request" code because the comment was empty
  		let newComment = { text: req.body.text }; 							// Only takes the information that is necessary - Input cleaning
  		if (!('comments' in store.posts[req.params.postId])) store.posts[req.params.postId].comments = []; 	// Checks if the post has comments
  		let id = store.posts[req.params.postId].comments.length;			// Saves the amount of comments as the commentId - Comment 1 has commentId=0 and so on								
  		store.posts[req.params.postId].comments.push(newComment);			// Adds the comment to the blog post
  		res.status(201).send({postId: req.params.postId ,commentId: id});	// "Content created" code and send to client the commentId number
  	},
  	updatePost(req, res) { // Updates an existing comment on the selected post
  		// Checks if there is at least one blog post, emmitting a "Invalid request" in a false case
  		if (store.posts.length === 0) return res.status(400).send('There is no post on the blog!');
  		if (!store.posts[req.params.postId]) return res.status(400).send('There is no post with this ID.'); // Checks if the post exists 
  		// Checks if the post has comments
  		if (!('comments' in store.posts[req.params.postId])) return res.status(400).send('The comment you are trying to edit does no exist.');
  		if (!req.body.text) return res.status(400).send('No comment was given.');				// "Bad Request" code because there was no comment on the request body
  		if (!req.body.text.trim()) return res.status(400).send('The comment needs content.');	// "Bad Request" code because the comment was empty
  		let newComment = req.body.text; 														// Only takes the information that is necessary - Input cleaning
  		store.posts[req.params.postId].comments[req.params.commentId].text = newComment;		// Updates the selected comment
  		res.status(200).send(store.posts[req.params.postId].comments[req.params.commentId]);	// "No content" code log, and sends to the client the updated comment
  	},
  	removePost(req, res) { // Deletes an existing comment on the selected post
  		// Checks if there is at least one blog post, emmitting a "Invalid request" in a false case
  		if (store.posts.length === 0) return res.status(400).send('There is no post on the blog!');
  		if (!store.posts[req.params.postId]) return res.sendStatus(400); // Checks if the post exists 
  		// Checks if the post has comments
  		if (!('comments' in store.posts[req.params.postId])) return res.status(400).send('There is no comment to delete.');
  		store.posts[req.params.postId].comments.splice(req.params.commentId, 1);	// Deletes the selected comment
  		res.status(204).send();														// "OK" code log
  	}
}